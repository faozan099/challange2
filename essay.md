1. Apa itu React?
2. Apa keunggulan React?
3. Apa itu SPA pada React?
4. Apa itu state dan props? Apa perbedaannya?
5. Kapan harus menggunakan state dan props? Berikan contoh studi kasus
6. Apa itu state management dan kapan harus menggunakannya?
7. Apa itu ORM/ODM?
8. Apa perbedaan SQL dan NoSQL?

---

1. React.js adalah sebuah perpustakaan (library) JavaScript yang digunakan
   untuk membangun antarmuka pengguna (UI) berbasis component yang reusable
   dan declarative.
2. react mempunyai keunggulan dimana ketika suatu perubahan di dalam component
   maka akan merender yang di update saja tanpa merender semuanya atau disebut
   dengan Virtual DOM, react berbasis component maksudnya setiap coomponent
   yang telah di buat dapat diapakai dimana saja dengan dibantu syntax file JSX
   memudahkan kita menulis tag html di dalam javascript
3. SPA (Single Page Application) adalah jenis aplikasi web yang beroperasi di
   satu halaman tanpa memuat ulang halaman utama secara keseluruhan. Dalam konteks
   React, SPA dapat dibuat dengan menggunakan React Router, yang memungkinkan
   navigasi antar komponen tanpa harus melakukan pembaruan halaman secara keseluruhan
4. state addalah suatu tempat penampungan data apa saja dan hanya bersifat sementara
   jika di refresh akan menghilang atau kembali ke nilai default nya. props adalah
   cara agar data dapat mengirim data dari suatu component ke component lain jika
   dilihat dari fungsi state adalah tempat untuk menampung data maupun menginilisiasi
   data sedangkan props mengirimkan data ke component lain
5. kapan harus memakai state dan props yaitu ketika kmemiliki component yang reusable
   contoh jika ingin menbgirim nama maka value nama akan di tampung dalam state
   menggunakan useState dan dikirimkan melalui propertie yang sebelumnya sudah
   mengimport component reusablenya ke parent component
6. State management adalah konsep untuk mengelola dan menyimpan data di dalam aplikasi
   tanpa melakukan props drilling untuk digunakan ke component lain, terdapat 2 state
   management yaitu redux toolkit dan bawaan dari react sendiri context.
7. ORM adalah teknik yang memungkinkan pengembang untuk berinteraksi dengan basis data
   relasional menggunakan objek dan kelas dalam bahasa pemrograman. ODM adalah konsep
   yang mirip dengan ORM, tetapi digunakan untuk basis data dokumen, Ini memetakan
   struktur data dan dokumen dalam basis data dokumen ke dalam representasi objek dalam
   kode.
8. Basis data SQL bersifat relasional dan terstruktur. Data disimpan dalam tabel yang
   terhubung melalui relasi. Data harus mengikuti skema yang telah ditentukan sebelumnya
   sedangakan noSQL bersifat non-relasional dan dapat memiliki struktur yang lebih fleksibel.
   Data dapat disimpan dalam bentuk dokumen, grafik, kolom, atau bentuk lainnya tanpa 
   skema yang tetap.
