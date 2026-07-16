# Senibina Projek (Project Architecture) Portfolio Anda

Dokumen ini direka untuk membantu bro faham sepenuhnya bagaimana projek Next.js ini disusun (dari segi struktur folder, aliran data, dan pengurusan komponen UI). 

Ia menggunakan konsep **Pemisahan Tugas (Separation of Concerns)** – setiap fail ada fungsi khususnya sendiri supaya kod tak berserabut dan mudah diselenggara.

---

## 1. Struktur Folder Utama (Folder Tree)

Berikut adalah struktur bagaimana fail akan disusun dalam projek kita:

```text
/home/azam05/Documents/portFolio_Website_Azam/
├── src/
│   ├── app/                    # Routing utama Next.js
│   │   ├── favicon.ico
│   │   ├── globals.css         # FAIL UTAMA CSS (Semua warna hex ada di sini)
│   │   ├── layout.jsx          # KULIT LUAR (Mengandungi Navbar & Footer)
│   │   └── page.jsx            # KANDUNGAN UTAMA (Susunan Seksyen Portfolio)
│   │
│   ├── components/             # Semua fail rekaan UI disimpan di sini
│   │   ├── ui/                 # Kepingan asas kecil (Butang, Kad, Teks)
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   └── Badge.jsx
│   │   │
│   │   └── sections/           # Kepingan besar gabungan UI
│   │       ├── Hero.jsx
│   │       ├── About.jsx
│   │       ├── Skills.jsx
│   │       ├── Experience.jsx
│   │       ├── Projects.jsx
│   │       └── Contact.jsx
│   │
│   ├── data/                   # Pangkalan data statik
│   │   └── portfolioData.js    # Tulis semua maklumat anda (kemahiran, projek) di sini
│   │
│   └── lib/                    # Fungsi bantuan tambahan
│       └── utils.js            # Fungsi utiliti (contoh: menggabungkan class CSS)
│
├── tailwind.config.ts          # Konfigurasi jika diperlukan
├── package.json                # Senarai library (Framer Motion, Lucide)
└── next.config.js              # Setting sistem Next.js
```

---

## 2. Bagaimana Next.js "App Router" Berfungsi?

Next.js menggunakan sistem fail untuk menentukan halaman.

1. **`src/app/layout.jsx`**: Ini adalah "bingkai" atau "rangka" utama website anda. 
   - Di sinilah terletaknya **Navbar** (di bahagian atas) dan **Footer** (di bahagian bawah). 
   - Apa-apa halaman yang ditukar, Navbar dan Footer ini akan sentiasa kekal (tidak akan *loading* semula).
2. **`src/app/page.jsx`**: Ini adalah kandungan "Home Page". 
   - Di sini, kita **TIDAK** menulis kod HTML yang panjang meleret. Sebaliknya, kita panggil komponen seperti "LEGO" block.
   - Contoh isi kandungan fail `page.jsx`:
     ```jsx
     export default function Home() {
       return (
         <main>
           <Hero />
           <About />
           <Skills />
           <Experience />
           <Projects />
           <Contact />
         </main>
       )
     }
     ```

---

## 3. Strategi Pemisahan Komponen

Untuk mengekalkan gaya premium, kita pisahkan komponen kepada DUA (2) jenis:

### A. Komponen UI Asas (`src/components/ui/`)
Komponen kecil dan bodoh (*dumb components*). Ia tak fikir pasal data, ia cuma tahu bagaimana untuk nampak cantik.
*   **Button.jsx:** Kita letak animasi *Framer Motion* di sini sekali sahaja. Kalau bro guna `<Button>` di seksyen Contact atau Hero, efek animasi (*bounce/hover*) adalah sama dan konsisten.
*   **Card.jsx:** Kepingan berkotak dengan efek kaca (glassmorphism) latar belakang yang akan memegang senarai projek atau senarai kemahiran.

### B. Komponen Seksyen (`src/components/sections/`)
Komponen pintar (*smart components*). Ia mengambil data dari fail `portfolioData.js` dan memaparkannya ke skrin menggunakan komponen UI Asas di atas.
*   **Hero.jsx:** Menyambut pelawat dengan teks besar dan gambar.
*   **Projects.jsx:** Akan buat proses "mapping" (perulangan) pada data projek bro dan memaparkannya menggunakan `Card.jsx`.

---

## 4. Pengurusan Maklumat (Data Management)

Untuk mengelakkan bro daripada pening kepala mencari teks di celah-celah kod UI kalau nak kemas kini *resume*, kita asingkan datanya.

Semua teks, ayat *About Me*, senarai kepakaran (React, Node.js), dan maklumat projek akan disimpan dalam **Satu Fail Sahaja**, iaitu `src/data/portfolioData.js`.

Contoh struktur data:
```javascript
export const portfolioData = {
  hero: {
    title: "Full Stack Developer",
    subtitle: "Membina pengalaman digital yang premium dan berprestasi tinggi.",
  },
  skills: [ "React", "Next.js", "Tailwind CSS", "Node.js" ],
  projects: [
    { name: "MovieVerse", tech: ["React", "API"], link: "github.com/..." }
  ]
}
```
*Bila bro nak tambah projek baru atau tukar jawatan 5 tahun lagi, bro HANYA perlu edit fail `portfolioData.js` ini tanpa perlu menyentuh fail reka bentuk (design file) langsung!*

---

## 5. Strategi Animasi

Kita panggil **Framer Motion** hanya di peringkat komponen `ui`.
Bagi menampakkan gaya mewah tanpa serabut:
1. **Scroll Reveal:** Kita letakkan pemerhati jarak pandangan (Intersection Observer). Bila pengguna *scroll* skrin sampai ke bahagian *Projects*, baru projek itu muncul (*Fade Up*).
2. **Stagger Children:** Kalau ada 5 kad kemahiran, ia tak akan muncul serentak. Ia akan muncul satu per satu dengan lengah (*delay*) `0.1s` (Ini trik utama Apple/Stripe untuk website dorang).

---
*Dokumen ini adalah rujukan mental (mental model) untuk bro. Jika faham konsep "LEGO block" dan pengasingan fail Data vs UI ini, projek sebesar apa pun akan jadi mudah diuruskan.*
