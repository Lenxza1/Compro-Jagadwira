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
    slug: 'arsitek-nusantara',
    title: 'PT. Arsitek Nusantara',
    category: 'Website Company Profile',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
    description:
      'Website company profile modern untuk firma arsitektur terkemuka di Jakarta. Menampilkan portofolio proyek, tim, dan layanan dengan desain minimalis bertekstur.',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Figma'],
    year: '2024',
    client: 'PT. Arsitek Nusantara',
    liveUrl: 'https://example.com',
  },
  {
    slug: 'urban-store',
    title: 'Urban Store',
    category: 'Website E-Commerce',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=600&fit=crop',
    description:
      'Platform e-commerce fashion urban dengan pengalaman belanja seamless, filter produk dinamis, wishlist, dan integrasi payment gateway Midtrans.',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Midtrans', 'Tailwind CSS'],
    year: '2024',
    client: 'Urban Store Indonesia',
    liveUrl: 'https://example.com',
    badge: 'New',
  },
  {
    slug: 'inventori-pro',
    title: 'InventoriPro',
    category: 'Custom Web Application',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    description:
      'Sistem manajemen inventori real-time untuk jaringan gudang multi-lokasi. Dilengkapi dashboard analitik, laporan otomatis PDF, dan notifikasi stok kritis.',
    tags: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'Socket.io'],
    year: '2023',
    client: 'CV. Logistik Makmur',
    liveUrl: 'https://example.com',
  },
  {
    slug: 'eco-harvest',
    title: 'Eco Harvest Farm',
    category: 'Website E-Commerce',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=600&fit=crop',
    description:
      'Marketplace produk organik lokal dengan fitur subscription mingguan, peta persebaran petani mitra, dan sistem tracking pengiriman terintegrasi.',
    tags: ['Next.js', 'Supabase', 'Stripe', 'Mapbox', 'Tailwind CSS'],
    year: '2024',
    client: 'Eco Harvest Indonesia',
    liveUrl: 'https://example.com',
  },
  {
    slug: 'prime-finance',
    title: 'Prime Finance Dashboard',
    category: 'Custom Web Application',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    description:
      'Dashboard keuangan interaktif untuk manajemen portofolio investasi. Menampilkan data saham live, rekap P&L harian, dan analisis risiko visual.',
    tags: ['React', 'TypeScript', 'Recharts', 'REST API', 'WebSocket'],
    year: '2023',
    client: 'Prime Capital Indonesia',
    liveUrl: 'https://example.com',
  },

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
