// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item affix "><a href="index.html">The Osnomicon: x86 - 3rd Edition</a></li><li class="chapter-item affix "><a href="front-matter/preface.html">Preface</a></li><li class="chapter-item affix "><a href="front-matter/introduction.html">Introduction: 3rd Edition</a></li><li class="chapter-item affix "><li class="spacer"></li><li class="chapter-item "><a href="body/chapter-1/index.html"><strong aria-hidden="true">1.</strong> Chapter 1: Toolchain, Kernel, GDT</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="body/chapter-1/repo-toolchain/index.html"><strong aria-hidden="true">1.1.</strong> Repository &amp; Toolchain</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="body/chapter-1/repo-toolchain/1-kit-repository.html"><strong aria-hidden="true">1.1.1.</strong> Kit Repository</a></li><li class="chapter-item "><a href="body/chapter-1/repo-toolchain/2-ide-vscode.html"><strong aria-hidden="true">1.1.2.</strong> Makeshift IDE: Visual Studio Code</a></li></ol></li><li class="chapter-item "><a href="body/chapter-1/kernel.html"><strong aria-hidden="true">1.2.</strong> Kernel</a></li><li class="chapter-item "><a href="body/chapter-1/gdt.html"><strong aria-hidden="true">1.3.</strong> Global Descriptor Table</a></li><li class="chapter-item "><div><strong aria-hidden="true">1.4.</strong> Extras: Computer</div></li></ol></li><li class="chapter-item "><div><strong aria-hidden="true">2.</strong> Chapter 2: Interrupt, Driver, File System</div></li><li class="chapter-item "><div><strong aria-hidden="true">3.</strong> Chapter 3: Paging, User Mode, Shell</div></li><li class="chapter-item affix "><li class="spacer"></li><li class="chapter-item "><a href="back-matter/appendix/index.html"><strong aria-hidden="true">4.</strong> Appendix</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><div><strong aria-hidden="true">4.1.</strong> Toolchain: Non-Linux</div><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="back-matter/appendix/toolchain/wsl.html"><strong aria-hidden="true">4.1.1.</strong> Windows: WSL</a></li><li class="chapter-item "><a href="back-matter/appendix/toolchain/apple-silicon.html"><strong aria-hidden="true">4.1.2.</strong> MacOS: Apple Silicon</a></li></ol></li><li class="chapter-item "><div><strong aria-hidden="true">4.2.</strong> Programming Language: C</div></li></ol></li><li class="chapter-item "><a href="back-matter/glossary.html">Glossary</a></li><li class="chapter-item affix "><a href="back-matter/references.html">References</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
