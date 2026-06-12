import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Calendar, Tag, User } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Portfolio from '@/components/portfolio';
import { portfolioProjects } from '@/lib/portfolio-data';
import { resolvePublicPath } from '@/lib/utils';

// ─────────────────────────────────────────────
//  Static params — tells Next.js which slugs exist
// ─────────────────────────────────────────────

export async function generateStaticParams() {
  return portfolioProjects.map((p) => ({ slug: p.slug }));
}

// ─────────────────────────────────────────────
//  Dynamic metadata per project
// ─────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);
  if (!project) return { title: 'Proyek Tidak Ditemukan' };

  return {
    title: `${project.title} — Portfolio Jagadwira`,
    description: project.description ?? `Detail proyek ${project.title} oleh Jagadwira.`,
  };
}

// ─────────────────────────────────────────────
//  Page
// ─────────────────────────────────────────────

const ACCENT = '#0052e0';

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);

  if (!project) notFound();

  // Related projects: same category, excluding current
  const related = portfolioProjects
    .filter((p) => p.slug !== slug && p.category === project.category)
    .slice(0, 3);

  // Fall back to any 3 projects if same-category is empty
  const relatedOrFallback =
    related.length > 0
      ? related
      : portfolioProjects.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* ── Hero image ── */}
      <div className="relative w-full h-[55vh] md:h-[65vh] mt-16 bg-slate-950 md:bg-slate-100">
        <Image
          src={resolvePublicPath(project.image)}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-contain md:object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

        {/* Back button */}
        <div className="absolute top-6 left-4 sm:left-8">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-semibold bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Semua Proyek
          </Link>
        </div>

        {/* Project title overlay */}
        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-8 pb-8 max-w-7xl mx-auto">
          <p
            className="text-xs font-black uppercase tracking-widest mb-2"
            style={{ color: '#93b4f8' }}
          >
            {project.category}
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            {project.title}
          </h1>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Left: description */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Tentang Proyek</h2>
            <p className="text-slate-600 text-base leading-relaxed">
              {project.description ?? 'Tidak ada deskripsi tersedia.'}
            </p>

            {/* Tags */}
            {project.tags && project.tags.length > 0 && (
              <div className="mt-8">
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <Tag className="w-4 h-4" style={{ color: ACCENT }} />
                  Teknologi
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-xs font-bold rounded-full border"
                      style={{ color: ACCENT, borderColor: `${ACCENT}40`, backgroundColor: `${ACCENT}08` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: meta card */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 space-y-5">

              {project.client && (
                <div className="flex items-start gap-3">
                  <User className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-0.5">
                      Klien
                    </p>
                    <p className="text-sm font-semibold text-slate-800">{project.client}</p>
                  </div>
                </div>
              )}

              {project.year && (
                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-0.5">
                      Tahun
                    </p>
                    <p className="text-sm font-semibold text-slate-800">{project.year}</p>
                  </div>
                </div>
              )}

              <div className="flex items-start gap-3">
                <ArrowUpRight className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                <div>
                  <p className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-0.5">
                    Kategori
                  </p>
                  <p className="text-sm font-semibold text-slate-800">{project.category}</p>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>

      {/* ── Related projects ── */}
      {relatedOrFallback.length > 0 && (
        <div className="border-t border-slate-100">
          <Portfolio
            projects={relatedOrFallback}
            heading="Proyek Lainnya"
            eyebrow="LIHAT JUGA"
            viewAllHref="/portfolio"
            viewAllLabel="Semua Proyek"
            mode="carousel"
            className="bg-white"
          />
        </div>
      )}

      <Footer />
    </main>
  );
}
