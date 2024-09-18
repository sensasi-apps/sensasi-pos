# 🚀 Berkontribusi ke Sensasi POS

Kami sangat senang Anda ingin berkontribusi pada **Sensasi POS**! 🎉 Baik Anda seorang developer berpengalaman atau baru di dunia _open source_, setiap kontribusi Anda akan membuat proyek ini lebih baik untuk semua orang.

## 📝 Selayang Pandang

**Sensasi POS** adalah aplikasi _Point of Sale_ (POS) berbasis web yang dirancang untuk membantu pengusaha kecil dan menengah dalam mengelola bisnis mereka. Aplikasi ini memiliki berbagai fitur yang memudahkan pengguna dalam melakukan transaksi, mengelola stok barang, dan melacak penjualan.

Aplikasi ini mendasarkan teknologi pengkodean pada _framework_ [**NextJS**](https://nextjs.org/) dan [**TypeScript**](https://www.typescriptlang.org/). Selain itu aplikasi ini juga menggunakan beberapa teknologi lain yang perlu Anda ketahui:

- 🎨 **NextUI** - Sistem desain modern untuk aplikasi web berbasis NextJS. [Pelajari lebih lanjut di sini](https://nextui.org/).
- ⛃ **Dexie.js** - Pustaka IndexedDB yang memudahkan penggunaan basis data berbasis browser. [Info lebih lanjut di sini](https://dexie.org/).

> Panjang umur untuk semua pengembang _open source_ di seluruh dunia! 🌍

Pemahaman dasar tentang teknologi-teknologi tersebut akan sangat dibutuhkan dalam pengembangan aplikasi ini. Jika Anda belum familiar dengan teknologi-teknologi tersebut, jangan khawatir! Kami siap membantu Anda dalam memahami aplikasi ini secara menyeluruh.

<!-- ## Prasyarat Sebelum Berkontribusi 📚

Sebelum Anda mulai menulis kode atau mengirimkan _pull request_, pastikan untuk mempelajari aplikasi ini secara mendalam dengan membaca dokumentasi yang terdapat di [**Wiki Sensasi POS**](https://github.com/sensasi-apps/sensasi-pos/wiki). Hal ini penting agar Anda memahami struktur aplikasi, fitur-fitur yang ada, serta alur kerjanya secara menyeluruh. -->

## 🤝 Bagaimana Anda Dapat Berkontribusi

Ada banyak cara di mana Anda dapat membantu proyek ini menjadi lebih baik:

- **Menemukan bug?** Anda bisa [melaporkannya di sini](https://github.com/sensasi-apps/sensasi-pos/issues/new/choose). Laporan bug dari Anda membantu kami memperbaiki masalah dan membuat aplikasi lebih stabil.
- **Punya ide brilian?** Jangan ragu untuk [mengusulkan fitur baru](https://github.com/sensasi-apps/sensasi-pos/issues/new/choose). Kami sangat terbuka untuk ide-ide inovatif Anda!
- **Ingin menyelesaikan masalah?** Anda bisa melihat [daftar issue yang ada](https://github.com/sensasi-apps/sensasi-pos/issues) dan mulai menyelesaikan yang Anda minati.
- **Ingin memperbaiki dokumentasi?** Dokumentasi selalu bisa ditingkatkan! Kontribusi Anda di bagian ini akan sangat membantu pengguna lain memahami aplikasi.
- **Tertarik menulis tes?** Anda bisa menulis tes untuk meningkatkan cakupan dan keandalan aplikasi.

> [!TIP]
> Anda dapat mempelajari cetak biru aplikasi Sensasi POS melalui Figma Jam pada gambar-tautan di bawah atau berdiskusi pada [#119](https://github.com/sensasi-apps/sensasi-pos/discussions/119).
> 
> <a href="https://www.figma.com/board/iLD0Lbbac8VpH72KaF9iHC/Cetak-Biru---Sensasi-POS?node-id=0-1&t=mKrQZFZs45r2KC0L-1"><img src="https://github.com/user-attachments/assets/9391214d-f5ac-48d2-895f-239727f93f11" width="350" /></a>

## 💻 Persiapan Pengembangan

1. **_Fork_ repositori ini** ke akun GitHub Anda.

2. **_Clone_ repositori** hasil _fork_ Anda ke komputer lokal:

   ```bash
   git clone https://github.com/username-anda/sensasi-pos.git
   cd sensasi-pos
   ```

3. **Instal dependensi** yang dibutuhkan untuk menjalankan proyek:

   ```bash
   npm install
   ```

## </> Mulai Koding

Anda sekarang dapat mulai menulis kode! Jika Anda memperbaiki _bug_ atau menambahkan fitur baru, mohon sertakan referensi _issue_ terkait di pesan _commit_ Anda.

> [!NOTE]
> Alur kerja pada proyek ini mengadaptasi alur kerja yang ditulis oleh [@sensasi-delight](https://sensasi-delight.medium.com) pada tautan berikut: https://medium.com/@sensasi-delight/mulailah-menata-alur-kerja-di-github-d7af4f7968cf.

Adapun alur kerja yang diterapkan untuk berkontribusi adalah sebagai berikut:

1. **Buat cabang (_branch_)** baru untuk perubahan yang ingin Anda buat:

   ```bash
   git checkout -b nama-fitur-anda
   ```

2. **Tulis kode** yang diperlukan untuk menyelesaikan fitur atau memperbaiki _bug_ yang Anda kerjakan. Jangan lupa untuk menambahkan tes jika diperlukan.

> [!IMPORTANT]
> Kami menggunakan **ESLint** dan **Prettier** untuk menjaga kualitas kode. Sebelum membuat _commit_, pastikan kode Anda telah lolos aturan _lint_ dengan menjalankan perintah `npm run lint`. Jika _lint_ menunjukkan kesalahan, harap perbaiki sebelum mengajukan _pull request_.

3. Setelah perubahan selesai, **_commit_ perubahan** Anda menggunakan pesan yang jelas dan deskriptif menggunakan kalimat berbentuk imperatif:

   ```bash
   git add .
   git commit -m "Menambahkan fitur X"
   ```

4. **Dorong (_push_)** perubahan Anda ke cabang yang Anda buat ke repositori yang telah Anda _fork_ sebelumnya:

   ```bash
   git push origin nama-fitur-anda
   ```

5. Setelah semua langkah di atas selesai, **ajukan _pull request_ (PR)** dari cabang Anda ke cabang `main` repositori ini dengan deskripsi yang jelas terkait perubahan yang Anda buat. Jangan lupa untuk menyertakan _issue_ yang relevan jika ada.

> [!TIP]
> Lakukanlah sinkronisasi pada repositori _fork_ Anda secara berkala untuk meminimalisir konflik kode yang dapat terjadi selama masa pengembangan.
> 
> [<img src="https://github.com/user-attachments/assets/2b6c0ad5-cf28-4661-9cd8-2f2246378a9a" width="350" alt="Contoh repositori fork yang telah sinkron" />](https://github.com/user-attachments/assets/2b6c0ad5-cf28-4661-9cd8-2f2246378a9a)


<!-- ## 🧪 Menjalankan Tes

Jika Anda menambahkan fitur baru atau memperbaiki bug, mohon tambahkan tes yang relevan. Tes dapat dijalankan dengan perintah berikut:

```bash
npm test
``` -->

## 🤝 Diskusi dan Bantuan

Jika Anda memiliki pertanyaan, ide, atau butuh panduan, jangan sungkan untuk menyampaikannya melalui jalur-jalur komunikasi berikut:

<!-- - Forum Diskusi: https://github.com/sensasi-apps/sensasi-pos/discussions -->

- Email: zainadam.id@gmail.com

---

Terima kasih telah berkontribusi pada **Sensasi POS**! Kami sangat tidak sabar melihat kontribusi luar biasa dari Anda! Kontribusi Anda akan membantu menjadikan proyek ini lebih baik untuk semua orang. 🎉
