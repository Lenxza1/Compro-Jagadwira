/**
 * portfolio-data.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Single source of truth for all portfolio projects.
 *
 * HOW TO ADD A PROJECT
 * ────────────────────
 * 1. Add a new object to `portfolioProjects` below.
 * 2. Use a unique `slug` (URL-friendly, no spaces — use hyphens).
 *    The slug becomes the page URL: /portfolio/your-slug
 * 3. Place the project image in /public/projects/ and reference it as
 *    "/projects/filename.jpg", or use an external URL.
 * 4. Save — the card on the homepage and the detail page appear automatically.
 *
 * FIELD REFERENCE
 * ───────────────
 * slug         (required) — Unique URL identifier, e.g. "urban-store"
 * title        (required) — Project display name
 * category     (required) — Used for filter tabs. Keep names consistent.
 * image        (required) — Thumbnail URL or /public path
 * description  (optional) — Short blurb on cards and detail page
 * tags         (optional) — Tech/tools list shown on detail page
 * year         (optional) — Year completed
 * client       (optional) — Client name
 * liveUrl      (optional) — Link to live site
 * badge        (optional) — Small label on thumbnail, e.g. "New"
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { PortfolioProject } from '@/components/portfolio';

export const portfolioProjects: PortfolioProject[] = [
  // ── EDIT OR ADD PROJECTS BELOW ───────────────────────────────────────────

  {
    slug: 'hcmgo',
    title: 'HCMGO',
    category: 'Website Human Capital Management',
    image: 'Projects/HCMGO.jpeg',
    description:
      'HCMGO adalah sistem manajemen sumber daya manusia terintegrasi yang dirancang untuk menyederhanakan dan mengotomatisasi proses HRD. Solusi ini mencakup manajemen data kepegawaian, pemantauan kinerja, hingga pengelolaan administrasi secara real-time. Dipercaya oleh berbagai instansi pemerintahan dan BUMN berskala besar, HCMGO terbukti skalabel, aman, dan mampu meningkatkan efisiensi operasional organisasi secara signifikan.',
    tags: ['Next.js', 'Tailwind CSS', 'Laravel', 'MySQL', 'Shadcn UI'],
    year: '2025',
    client: 'Bank Indonesia (BI), PT Elnusa Tbk, Badan Riset dan Inovasi Nasional (BRIN), PT. Trans Dana Profitri, Kementerian Kesehatan Republik Indonesia (Kemenkes)',
  },
  {
    slug: 'customer-satisfaction-web',
    title: 'Portal Web Indeks Kepuasan Pelanggan',
    category: 'Website KPI & Dashboard',
    image: 'Projects/TDP PERFORMANCE REVIEW.png',
    description:
      'Sebuah platform digital interaktif yang dikembangkan untuk mengukur, melacak, dan menganalisis tingkat kepuasan pelanggan atau stakeholder. Web ini dilengkapi dengan fitur survei yang user-friendly, visualisasi data yang komprehensif, dan sistem pelaporan real-time untuk membantu manajemen mengambil keputusan yang berbasis data (data-driven decision making).',
    tags: ['Next.js', 'Laravel', 'MySQL', 'Tailwind CSS', 'Shadcn UI'],
    year: '2025',
    client: 'Bank Indonesia (BI), PT. Trans Dana Profitri',
  },
  {
    slug: 'mantra-rental-mobil',
    title: 'Mantra Rental Mobil',
    category: 'Website E-Commerce',
    image: 'Projects/Mantra Mob.png',
    description:
      'Platform manajemen bisnis terpadu yang khusus dikembangkan untuk kebutuhan industri penyewaan kendaraan. Sistem ini memfasilitasi proses booking (pemesanan), pelacakan ketersediaan armada, manajemen penjadwalan, hingga rekapan transaksi keuangan, sehingga operasional bisnis rental mobil menjadi lebih terstruktur dan transparan.',
    tags: ['Next.js'],
    year: '2025',
    client: 'Mantra',
  },
  {
    slug: 'mantra-security-devices',
    title: 'Mantra Security Devices',
    category: 'Website E-Commerce',
    image: 'Projects/Mantra Sec.png',
    description:
      'Sebuah platform digital komprehensif yang dirancang khusus untuk memfasilitasi transaksi penjualan dan penyewaan berbagai perangkat keamanan (security devices). Sistem ini mengintegrasikan fitur katalog produk yang informatif, manajemen stok dan inventaris barang, pelacakan masa sewa secara otomatis, hingga alur pemesanan dan pembayaran yang efisien. Dengan sistem ini, pengelolaan operasional bisnis menjadi lebih terorganisir dan Sebuah platform digital komprehensif yang dirancang khusus untuk memfasilitasi transaksi penjualan dan penyewaan berbagai perangkat keamanan (security devices). Sistem ini mengintegrasikan fitur katalog produk yang informatif, manajemen stok dan inventaris barang, pelacakan masa sewa secara otomatis, hingga alur pemesanan dan pembayaran yang efisien. Dengan sistem ini, pengelolaan operasional bisnis menjadi lebih terorganisir dan memberikan pengalaman bertransaksi yang mudah bagi pelanggan dalam memenuhi kebutuhan perangkat keamanan mereka.',
    tags: ['Laravel', 'MySQL'],
    year: '2025',
    client: 'Mantra',
  },
  {
    slug: 'anggara-treasure',
    title: 'Anggara Treasure',
    category: 'Landing Page',
    image: 'Projects/Anggara Treasure.png',
    description:
      'Proyek pembuatan landing page profesional yang dirancang untuk merepresentasikan identitas merek Anggara secara elegan di dunia digital. Website ini dibangun dengan performa tinggi, waktu muat (loading time) yang cepat, serta tata letak informasi yang komunikatif untuk menarik minat calon pelanggan.',
    tags: ['Next.js', 'Tailwind CSS'],
    year: '2026',
    client: 'Anggara Treasure',
  },
  {
    slug: 'rumae',
    title: 'Rumae',
    category: 'Landing Page',
    image: 'Projects/Home Rumaé.png',
    description:
      'Pengembangan halaman promosi digital (landing page) yang modern, estetis, dan sangat responsif. Didesain dengan mengedepankan prinsip UI/UX terbaik untuk memaksimalkan user experience, memperkuat brand awareness, dan dioptimalkan secara khusus untuk mendorong tingkat konversi pengunjung (SEO & Conversion Rate Optimization friendly).',
    tags: ['HTML', 'CSS'],
    year: '2024',
    client: 'Rumae',
  }

  // ── TEMPLATE: copy and fill in to add a new project ──────────────────────
  // {
  //   slug: 'nama-proyek',              // unique URL: /portfolio/nama-proyek
  //   title: 'Nama Proyek',
  //   category: 'Website Company Profile',
  //   image: '/projects/nama-proyek.jpg',
  //   description: 'Deskripsi singkat proyek ini.',
  //   tags: ['Next.js', 'Tailwind CSS'],
  //   year: '2025',
  //   client: 'Nama Klien',
  //   liveUrl: 'https://example.com',
  //   badge: 'New',                     // optional
  // },
];
