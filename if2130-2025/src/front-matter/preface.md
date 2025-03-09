# Preface

*Sistem Operasi, Kernel, Bare Metal, Assembly, Machine Code*

Kata-kata diatas terasa seperti *forbidden magic word* untuk sebagian besar software engineer.
Banyak mahasiswa yang mengatakan sistem operasi terasa "abstrak" dan takut ketika menghadapi hal-hal yang berhubungan dengan sistem operasi.

Sistem operasi dianggap sebagai sebuah "black box" yang hanya sebagian kecil orang dapat memahaminya.
Sama seperti framework dan library, jika fitur X tidak ada atau ada bug aneh dengan fitur Y, *dunno why, waktunya buka search engine*

Hal ini sangat disayangkan sering terjadi dan adanya teknologi baru seperti LLM semakin memperparah situasi "black box" ini.
Daripada mencoba memahami permasalahan yang ada dengan membuka source code kernel atau framework yang tersedia open source,
lempar error stack trace dan berharap alat sulap bernama LLM menyelesaikannya.

<br/>

> *All non-trivial abstractions, to some degree, are leaky.*

Abstraksi penting pada software engineering.
Namun kemampuan dan keberanian untuk membuka black box ketika dibutuhkan juga penting untuk melakukan non-trivial problem solving.
Issue yang dihadapi pada abstraksi tingkat atas mungkin berasal dari keterbatasan fundamental pada lapisan bawah.

Open source merupakan privilege unik yang dimiliki software engineer.
Source code dari sebuah library, framework, kernel sudah tersedia secara terbuka dan hidden in plain sight
dikarenakan ketakutan membuka dan mempelajari black box.
Pernahkah terpikirkan kita dapat memodifikasi sebuah library atau melakukan debugging langsung source code dari sebuah library?

*Kenapa membatasi diri hanya sebagai pengguna library dan membuat aplikasi web?*

*Kenapa tidak memahami black box dan membuat framework sendiri jika perlu?*

<br/>

Buku ini ditujukan untuk membantu pengerjaan tugas besar mata kuliah Sistem Operasi.
Tugas besar menugaskan pembaca untuk mengimplementasikan sistem operasi yang diharapkan dapat mendorong keberanian dalam membuka sebuah black box.

Buku ini ditulis dengan *tangan* dan diharapkan dapat menyediakan sumber lengkap ala manual untuk pengerjaan tugas.
Pembaca diharapkan untuk mengerjakan menggunakan alat kuno bernama *tangan* dan *membaca* dokumentasi.

Jika mengalami stuck setelah mencoba sendiri, gunakan medium diskusi yang disediakan asisten seperti layanan asistensi dan sheet QnA.
Penulis dan asisten laboratorium Sistem Paralel dan Terdistribusi juga dapat dikontak pada [labsister@std.stei.itb.ac.id](mailto:labsister@std.stei.itb.ac.id).

Setelah membaca dan mengerjakan tugas ini, diharapkan pembaca merasakan pengalaman baru
dengan membuka dan berkenalan dengan satu black box bernama "Sistem Operasi"---*dan bukan LLM yang menjadi semakin pintar*.
