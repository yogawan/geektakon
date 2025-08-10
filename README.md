# JawirAI

**Jawirai** adalah chatbot berbasis **Next.js** yang memanfaatkan **Groq Cloud API** untuk memberikan respons AI yang cepat dan efisien.  
Setup-nya sederhana, cukup beberapa langkah dan chatbot ini sudah bisa dijalankan di lokal Anda.

---

## 🚀 Instalasi

### 1️⃣ Clone Repository
```bash
git clone https://github.com/yogawan/jawiraiv3.1.1.git
```

```bash
cd jawirai
```

### 2️⃣ Buat API Key Groq Cloud
- Buka [Groq Cloud Console](https://console.groq.com/keys)
- Login / daftar akun
- Buat **API Key** baru dan salin nilainya

### 3️⃣ Konfigurasi Environment
Buat file `.env.local` di root project lalu isi:

```env
GROQ_API_KEY=YOUR_GROQ_API_KEY
NEXT_PUBLIC_SYSTEM_PROMPT=YOUR_BASE_PROMPT
NEXT_PUBLIC_URL_API=/api/chat/models/groq
```

> **Keterangan:**
> - `GROQ_API_KEY`: API key dari Groq Cloud  
> - `NEXT_PUBLIC_SYSTEM_PROMPT`: Prompt dasar untuk chatbot  
> - `NEXT_PUBLIC_URL_API`: Endpoint API chatbot  

### 4️⃣ Install Dependencies
```bash
npm install
```

### 5️⃣ Jalankan Project
```bash
npm run dev
```

Akses di browser:
```
http://localhost:3000
```

---

## 🛠 Tech Stack
- **Next.js** – Fullstack React Framework
- **Groq Cloud API** – Model AI performa tinggi
- **Node.js** – Runtime JavaScript server-side

---

## 💡 Tips Penggunaan
- Gunakan Node.js versi **18+**
- Simpan `.env.local` agar API key tetap aman
- Jangan commit `.env.local` ke repository publik

---

## 📜 Lisensi
Proyek ini menggunakan lisensi **MIT** – bebas digunakan dan dimodifikasi.
