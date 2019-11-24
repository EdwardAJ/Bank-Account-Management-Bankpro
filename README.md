[IF 3110 Pengembangan Aplikasi Berbasis Web]

Aplikasi Bankpro dibuat dengan Reactjs SPA dan menggunakan library Axios untuk mengirim request XML kepada WS-Bank.
Terdapat total sebanyak tujuh komponen. Komponen utama adalah App.js yang merender semua perubahan. Sisa enam komponen lainnya merupakan children dari
komponen utama tersebut.

Terdapat dua komponen yang merupakan anak langsung (direct children) dari App.js: MainPage.js dan AuthPage.js.

AuthPage.js:

Pada halaman login yang  pengguna akan memasukkan nomor akun. Nomor akun yang terdaftar sekarang adalah 13517115, 13517070, dan 13516088, serta 13517000.
Jika pengguna memasukkan salah satu dari nomor akun tersebut, Maka AuthPage akan memanggil fungsi handleLogin milik App.js dan cookie akan dibuat.
App.js kemudian akan merender MainPage.js

MainPage.js:

Terdapat tiga komponen yang merupakan direct children dari MainPage.js: InfoComponent.js, TransferComponent, dan HistoryComponent.
Secara otomatis setelah login, InfoComponent.js akan dirender. Terdapat skenario sebagai berikut:

Jika pengguna mengklik tulisan Home, InfoComponent.js akan dirender. Komponen ini akan merequest XML dan menampilkan respons dari WS-Bank.

Jika pengguna mengklik tulisan Transfer, TransferComponent.js akan dirender. Pengguna dapat mengetik nomor rekening maupun nomor virtual account.
Nomor rekening dan nomor virtual account harus terdaftar pada basis data WS-Bank. Jika tidak, akan ditampilkan pesan kesalahan.
Uang yang ditransfer juga harus lebih kecil dari saldo pengguna. JIka tidak, akan ditampilkan pesan kesalahan.

Jika pengguna mengklik tulisan History, HistoryComponent.js akan dirender. Komponen ini akan merequest riwayat transaksi dari WS-Bank.
SingleHistoryComponent.js merupakan representasi dari satu riwayat transaksi. Untuk setiap riwayat transaksi, semua data satu transaksi akan
di-pass kepada SingleHistoryComponent.js. Koleksi dari SingleHistoryComponent.js inilah yang ditampikan pada pengguna.

[ SCREENSHOT ]



[IF 3159 Dasar Pembangunan Perangkat Lunak]

1. CI/CD: 13517115, 13517070
2. Eksplorasi dan setup mesin deployment: 13517115, 13517070
3. Unit Test: 13517115

URL Deployment: engima.club:5000