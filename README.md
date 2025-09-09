# Create API Medication

API backend untuk manajemen data obat menggunakan Node.js, Express, dan Supabase.

## Prasyarat

- Node.js
- npm
- Akun Supabase dan project Supabase sudah dibuat

## Cara Install dan Menjalankan

1. **Clone repo**

```bash
git clone https://github.com/princeofverry/create-api-medication.git
cd create-api-medication
```

2. **Install dependencies**

```bash
npm install
```

3. **Buat file `.env`**

- Copy dari `.env.example`

```bash
cp .env.example .env
```

- Edit `.env` dan isi sesuai project Supabase kamu:

```
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_anon_key
PORT=3000
```

4. **Jalankan API**

```bash
npm run dev       # untuk development
npm start         # untuk production
```

5. **Tes endpoint**

- Buka di browser atau Postman:

```
GET http://localhost:3000/api/medications
```

## Deploy ke Vercel

1. Login Vercel

```bash
npm i -g vercel
vercel login
```

2. Deploy project

```bash
vercel
```

3. Tambahkan **Environment Variables** di Vercel:

- `SUPABASE_URL` → Supabase URL
- `SUPABASE_KEY` → Supabase anon key
- `PORT` → (opsional, default 3000)

Setelah deploy, API bisa diakses dari URL Vercel.

## Struktur Project

```
src/
  ├─ index.js        # Entry point API
  ├─ models/
  │    └─ medication.js
  └─ config/
       └─ supabaseClient.js
package.json
.env.example
```

## Catatan

- Jangan commit `.env` ke repo, gunakan `.env.example` sebagai template.
- Pastikan Supabase sudah memiliki tabel `medications` dan data sudah ada.
