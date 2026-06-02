import type { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Portfolio from '@/components/portfolio';

// ─────────────────────────────────────────────
// To add projects to this page, edit:
//   lib/portfolio-data.ts
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Portfolio — Jagadwira',
  description:
    'Jelajahi proyek-proyek terbaik yang telah kami kerjakan bersama klien kami — mulai dari company profile, e-commerce, hingga custom web application.',
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* ── Page hero banner ── */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#0052e0] font-black text-xs uppercase tracking-widest mb-4">
            PORTFOLIO
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
            Karya Terbaik Kami
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-slate-500 text-lg leading-relaxed">
            Setiap proyek mencerminkan dedikasi kami dalam menghadirkan solusi digital yang
            berdampak nyata bagi bisnis klien.
          </p>
        </div>
      </section>

      {/* ── Full grid portfolio — projects come from lib/portfolio-data.ts ── */}
      <Portfolio
        mode="grid"
        hideViewAll
        heading="Semua Proyek"
        eyebrow="KARYA KAMI"
        className="bg-white"
      />

      <Footer />
    </main>
  );
}
