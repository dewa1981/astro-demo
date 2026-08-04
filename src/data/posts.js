// Data post demo
export const posts = [
  {
    slug: 'hello-astro',
    title: 'Hello Astro!',
    emoji: '👋',
    date: '04 Aug 2026',
    excerpt: 'Astro itu static site generator modern — hasilnya super ringan, gak ada JavaScript yang gak perlu.',
    url: '/artikel/hello-astro',
    content: `
## Kenapa Astro?

Astro itu **static site generator** modern yang hasilnya sangat ringan. Bedanya dengan Hugo:

- **0 JavaScript by default** — halaman murni HTML+CSS, super cepat
- **Islands architecture** — tambah komponen interaktif cuma di tempat yang perlu
- **Komponen modern** — pakai sintaks mirip JSX/HTML

### Perbandingan singkat

| Aspek | Hugo | Astro |
|---|---|---|
| Bahasa | Go | JavaScript/TypeScript |
| Build | 🚀 Tercepat | Cepat |
| Komponen interaktif | Terbatas | ✅ Islands |
| Ekosistem | Tema Go | npm (besar!) |

Jadi kalau mau blog yang **modern + interaktif**, Astro pilihan bagus!
    `,
  },
  {
    slug: 'hugo-vs-astro',
    title: 'Hugo vs Astro: Pilih Mana?',
    emoji: '⚔️',
    date: '04 Aug 2026',
    excerpt: 'Dua-duanya static site generator keren. Ini perbandingan jujur dari pengalaman pakai dua-duanya.',
    url: '/artikel/hugo-vs-astro',
    content: `
## Hugo vs Astro

Saya udah pakai **Hugo** untuk blog utama (chokdi-blog) dan sekarang coba **Astro**.

### Hugo 🏆
- Build TERCEPAT (Go!) — ribuan halaman dalam detik
- Satu binary, gak perlu Node
- Tema klasik yang matang

### Astro 🚀
- Lebih modern, styling fleksibel (CSS/SCSS/Tailwind)
- Islands: bikin kalkulator/chart interaktif gampang
- Ekosistem npm — komponen React/Vue/Svelte bisa dipakai

### Kesimpulan
Hugo buat **speed + simpel**, Astro buat **modern + interaktif**. Keduanya top!
    `,
  },
  {
    slug: 'astronaut-guide',
    title: 'Panduan Cepat Astronaut',
    emoji: '🚀',
    date: '03 Aug 2026',
    excerpt: 'Mau mulai pakai Astro? Ini langkah-langkah dasar biar langsung jalan.',
    url: '/artikel/astronaut-guide',
    content: `
## Panduan Cepat Astro

1. **Buat project**: \`npm create astro@latest\`
2. **Tambah halaman**: file di \`src/pages/*.astro\`
3. **Layout**: komponen di \`src/layouts/\`
4. **Build**: \`npm run build\` → hasil di \`dist/\`
5. **Deploy**: CF Pages / GitHub Pages / Vercel — tinggal pilih!

### Tips
- Gunakan \`Astro.props\` untuk data antar komponen
- Content Collections untuk blog posts yang rapi
- Deploy ke Cloudflare Pages gratis kayak Hugo!
    `,
  },
];
