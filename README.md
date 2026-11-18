# 🎮 Galeri Karya Scratch Interaktif MTsN 10 Sleman

Platform web galeri sederhana dan interaktif untuk menampilkan, menyimpan, dan memainkan proyek game Scratch (`.sb3`) buatan para murid MTsN 10 Sleman secara online menggunakan backend **Supabase**.

---

## 🚀 Fitur Utama
* **Galeri Utama (`index.html`)**: Menampilkan daftar karya game murid lengkap dengan informasi judul, nama pembuat, kelas, dan tombol untuk langsung memainkan game secara interaktif menggunakan **TurboWarp Embed**.
* **Halaman Admin (`admin.html`)**: Portal khusus untuk mengupload file proyek Scratch (`.sb3`) beserta informasi detail pembuatnya ke database dan storage Supabase.
* **Penyimpanan Cloud**: Memanfaatkan Supabase Database dan Storage Bucket untuk pengelolaan data yang cepat dan efisien.

---

## 🛠️ Tech Stack
* **Frontend**: HTML5, CSS3, JavaScript (Modular)
* **Backend & Database**: Supabase (PostgreSQL & Storage Bucket)
* **Player**: TurboWarp Embed API

---

## 📁 Struktur File Proyek
Repository ini dirancang secara modular agar mudah dikembangkan:

```text
📦 galeri-scratch/
 ┣ 📜 index.html        # Halaman utama galeri game
 ┣ 📜 admin.html        # Halaman form upload game (admin)
 ┣ 📜 style.css         # Desain dan tata letak styling responsif
 ┣ 📜 config.js         # Konfigurasi koneksi Supabase (URL & Anon Key)
 ┗ 📜 app.js            # Logika interaksi, fetch data, dan proses upload
```

---

## ⚙️ Cara Menjalankan Secara Lokal (Local Development)

1. **Clone atau Download Repository ini**:
   ```bash
   git clone [https://github.com/username/repository-kamu.git](https://github.com/username/repository-kamu.git)
   ```
2. **Buka Project di VS Code**.
3. **Konfigurasi Supabase**:
   * Buka file `config.js`.
   * Masukkan URL dan Anon Key Supabase kamu:
     ```javascript
     const SUPABASE_URL = 'https://YOUR_SUPABASE_PROJECT.supabase.co';
     const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';
     ```
4. **Jalankan Live Server**:
   * Klik kanan pada `index.html` di VS Code, lalu pilih **Open with Live Server**.
   * Buka `http://127.0.0.1:5500` di browser kamu.

---

## 🗄️ Konfigurasi Database Supabase

Pastikan tabel dan storage bucket di Supabase kamu sudah disiapkan dengan ketentuan berikut:

1. **Tabel Database (`games`)**:
   * `id` (int8, Primary Key, Identity)
   * `game_title` (text)
   * `student_name` (text)
   * `class` (text)
   * `file_game_url` (text)
   * `created_at` (timestamp, default: `now()`)

2. **Storage Bucket**:
   * Buat bucket baru dengan nama: `scratch-file`
   * Pastikan *Policy* pada bucket tersebut mengizinkan akses publik (`SELECT` & `INSERT`) agar file `.sb3` bisa di-upload dan dibaca oleh TurboWarp.

---

## 💡 Kontribusi & Pengembangan
Project ini sangat terbuka jika ingin dikembangkan lebih lanjut, misalnya penambahan fitur hapus game, sistem pencarian (search), atau filter berdasarkan kelas. 

Dibuat dengan dedikasi dan semangat oleh **Saya Sendiri - Ilham Bagoes** 🚀
