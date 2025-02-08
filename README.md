<div align="center">
  <br />
    <a href="https://youtu.be/1pTkaNk66sQ?feature=shared" target="_blank">
      <img src="https://github.com/user-attachments/assets/bb5c9463-af5c-47f2-8422-a9d77ac260cc" alt="Project Banner">
    </a>
  <div>
    <img src="https://img.shields.io/badge/-Next_JS_15-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="next.js 15" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="TypeScript" />
    <img src="https://img.shields.io/badge/-Turso-black?style=for-the-badge&logoColor=black&logo=turso&color=4EF8D2" alt="Turso" />
    <img src="https://img.shields.io/badge/-Drizzle-black?style=for-the-badge&logoColor=black&logo=drizzle&color=C5F74E" alt="Drizzle ORM" />
    <img src="https://img.shields.io/badge/-Shadcn_UI-black?style=for-the-badge&logoColor=white&logo=shadcnui&color=000000" alt="Shadcn UI" />
    <img src="https://img.shields.io/badge/-Hugging_Face-black?style=for-the-badge&logoColor=white&logo=huggingface&color=FF9D00" alt="Hugging Face" />
    <img src="https://img.shields.io/badge/-Clerk-black?style=for-the-badge&logoColor=white&logo=clerk&color=1F0255" alt="Clerk" />
  </div>

  <h3 align="center">Logo Al - AI Logo Maker</h3>

   <div align="center">
     Bikin dan deploy project ini step by step dengan tutorial yang ada di YouTube saya <a href="https://www.youtube.com/@amalhanaja/" target="_blank"><b>amalhanaja</b></a>.
    </div>
</div>

## 📋 <a name="contents">Daftar Isi</a>

1. 🤝 [Pendahuluan](#intro)
2. 🛠️ [Tech Stack](#tech-stack)
3. 🚀 [Fitur](#features)
4. 🏃‍♂️ [Menjalankan Aplikasi](#run-application)
5. 🎨 [Lainnya](#others)

## 🎬 Tutorial

Repository ini berisikan code yang sesuai dengan tutorial yang ada di YouTube channel saya, <a href="https://www.youtube.com/@amalhanaja/videos" target="_blank"><b>amalhanaja</b></a>.

Ikuti tutorial step by step untuk membuat suatu project seperti ini mulai dari setup project sampai deployment. Jika menyukai project ini, beri dukungan ke saya dengan Subscribe dan Like video saya.

<a href="https://youtu.be/1pTkaNk66sQ" target="_blank"><img src="https://github.com/sujatagunale/EasyRead/assets/151519281/1736fca5-a031-4854-8c09-bc110e3bc16d" /></a>

## <a name="intro">🤝 Pendahuluan</a>

Bikin AI Logo Maker menggunakan Next.js 15, Clerk, Typescript, Turso, Hugging Face dan Drizzle ORM dari setup project, bug fixing, enhancement, dan deployment ke Vercel.

Logo Al adalah sebuah tools untuk membuat logo dalam hitungan detik dengan bantuan AI. Cukup dengan memasukkan nama logo nya, deskripsi logo, warna yang digunakan dan style yang disukai dan AI akan membuatkan logo yang unik dan sesuai untuk Anda.

## <a name="tech-stack">🛠️ Tech Stack</a>

- Next.js 15
- TypeScript
- Turso
- SQLite
- Drizzle ORM
- Hugging Face
- Together AI
- Clerk
- Shadcn UI

## <a name="features">🚀 Fitur</a>

👉 **Autentikasi**: Autentikas menggunakan Clerk untuk dapat melakukan Sign In dan Sign Up dengan Email, Password, dan Google dengan user manajemen sistem.

👉 **Halaman Home**: Menampilkan showcase logo-logo yang telah dibuat menggunakan Logo Al.

👉 **Halaman Dashboard**: Menampilkan logo-logo yang telah dibuat oleh AI dengan input dari user.

👉 **Download Logo**: Logo yang sudah dibuat bisa didownload untuk kebutuhan branding atau bisnis.

👉 **Middleware, API Actions, and Authorization**: Memanfaatkan middleware, API actions, and authorization keamanan aplikasi.

👉 **Server Side Rendering**: Menggunakan Next.js 15 dengan Server Side Rendering untuk meningkatkan performa aplikasi dan keunggulan dalam SEO.

👉 **Database ORM**: Drizzle ORM untuk lebih mempermudah dan mengefisiensikan proses interaksi dengan Database.  

dan masih banyak lagi, termasuk clean code, reusability code, dan architecture.

## <a name="run-application">🏃 Menjalankan Aplikasi</a>

Ikuti panduan dibawah untuk menjalankan aplikasi di komputer lokal Anda.

**Persyaratan**

Pastikan Komputer Anda telah terinstall aplikasi berikut:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [Bun](https://bun.sh/)

**Clone Repository**

```bash
git clone https://github.com/amalhanaja/Logo-Al.git
cd Logo-Al
```

**Installation**

Install dependencies menggunakan Bun:

```bash
bun install
```

**Set Up Environment Variables**

Buat file baru dengan nama `.env.local` atau `.env` di dalam root project dan tambahkan environment variable berikut:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/auth/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/auth/sign-up
TOGETHER_API_KEY=
HF_TOKEN=
TURSO_CONNECTION_URL=
TURSO_AUTH_TOKEN=
```

Isi environment variable dengan kredensial yang Anda miliki. 

Anda dapat mendapatkan kredensial dengan mendaftar terlebih dahulu di platform berikut:

- [Hugging Face](https://huggingface.co/)
- [Turso](https://turso.tech/)
- [Clerk](https://clerk.com/)
- [Together.ai](https://www.together.ai/)

**Menjalankan Project**

```bash
bun run dev
```

Buka [http://localhost:3000](http://localhost:3000) pada browser untuk melihat aplikasi.

## <a name="others">🎨 Lainnya</a>

**Terima Kasih**

Terima kasih telah mampir di GitHub dan YouTube saya. Jika menyukai tutorial yang saya buat mohon bantuannya untuk selalu likes, subscribe dan share video yang saya buat. 

**Donasi**

🧧 [Saweria](https://saweria.co/amalhanaja)