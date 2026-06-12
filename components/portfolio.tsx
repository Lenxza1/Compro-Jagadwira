'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { portfolioProjects } from '@/lib/portfolio-data';
import { resolvePublicPath } from '@/lib/utils';

// ─────────────────────────────────────────────
//  Types
// ─────────────────────────────────────────────

export interface PortfolioProject {
  /** URL-friendly identifier, e.g. "urban-store" → /portfolio/urban-store */
  slug: string;
  /** Display title of the project */
  title: string;
  /** Category label (also used for tab filtering) */
  category: string;
  /** Absolute URL or /public-relative path to the project thumbnail */
  image: string;
  /** Optional short description shown in grid and detail pages */
  description?: string;
  /** Optional badge text, e.g. "New" */
  badge?: string;
  /** Technologies / tools used */
  tags?: string[];
  /** Year the project was completed */
  year?: string;
  /** Client name */
  client?: string;
  /** Link to the live website */
  liveUrl?: string;
}

export interface PortfolioProps {
  /** Override the eyebrow label above the heading */
  eyebrow?: string;
  /** Override the section heading */
  heading?: string;
  /** Override the "View all" button label */
  viewAllLabel?: string;
  /** Override the "View all" button href */
  viewAllHref?: string;
  /** Array of projects to display */
  projects?: PortfolioProject[];
  /**
   * Display mode:
   * - "carousel" — horizontal embla slider (default, ideal for homepage sections)
   * - "grid"     — static grid with category filter tabs
   */
  mode?: 'carousel' | 'grid';
  /** Brand accent colour hex. Default: #0052e0 */
  accentColor?: string;
  /** Hide the "View all" CTA button */
  hideViewAll?: boolean;
  /** Hide the eyebrow label */
  hideEyebrow?: boolean;
  /** Additional className for the outermost <section> */
  className?: string;
}



// ─────────────────────────────────────────────
//  Sub-component: Project Card
// ─────────────────────────────────────────────

interface ProjectCardProps {
  project: PortfolioProject;
  accentColor: string;
}

function ProjectCard({ project, accentColor }: ProjectCardProps) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group cursor-pointer block overflow-hidden rounded-2xl bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 h-full"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] bg-slate-950 md:bg-slate-100 overflow-hidden rounded-2xl">
        <Image
          src={resolvePublicPath(project.image)}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain md:object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Badge */}
        {project.badge && (
          <span
            className="absolute top-3 left-3 text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full z-10"
            style={{ backgroundColor: accentColor }}
          >
            {project.badge}
          </span>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 transition-all duration-300 flex items-center justify-center">
          <div className="bg-white rounded-full p-3 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 shadow-md">
            <ArrowUpRight className="w-5 h-5" style={{ color: accentColor }} />
          </div>
        </div>
      </div>

      {/* Info below image */}
      <div className="pt-4 pb-1 flex justify-between items-start">
        <div className="flex-1 min-w-0 pr-2">
          <h3 className="text-base font-bold text-slate-900 leading-tight">
            <span
              className="group-hover:transition-colors duration-200"
              style={{ ['--tw-prose-links' as string]: accentColor }}
            >
              {project.title}
            </span>
          </h3>
          <p className="text-xs font-semibold mt-1.5" style={{ color: accentColor }}>
            {project.category}
          </p>
          {project.description && (
            <p className="text-slate-500 text-xs mt-2 line-clamp-2">{project.description}</p>
          )}
        </div>
        <div className="flex-shrink-0 mt-0.5">
          <ArrowUpRight
            className="w-4 h-4 text-slate-400 group-hover:transition-colors duration-200"
          />
        </div>
      </div>
    </Link>
  );
}

// ─────────────────────────────────────────────
//  Sub-component: Grid Mode (with filter tabs)
// ─────────────────────────────────────────────

interface GridViewProps {
  projects: PortfolioProject[];
  accentColor: string;
}

function GridView({ projects, accentColor }: GridViewProps) {
  const ALL_LABEL = 'Semua';
  const categories = [ALL_LABEL, ...Array.from(new Set(projects.map((p) => p.category)))];
  const [active, setActive] = useState(ALL_LABEL);
  const filtered = active === ALL_LABEL ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-200 border ${
              active === cat
                ? 'text-white border-transparent shadow'
                : 'text-slate-500 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
            }`}
            style={active === cat ? { backgroundColor: accentColor, borderColor: accentColor } : {}}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project, index) => (
          <div
            key={`${project.title}-${index}`}
            className="animate-in fade-in-0 slide-in-from-bottom-4 duration-300"
          >
            <ProjectCard project={project} accentColor={accentColor} />
          </div>
        ))}
      </div>
    </>
  );
}

// ─────────────────────────────────────────────
//  Main Export: Portfolio
//  Embla state is owned here so the header controls
//  and the slider below are siblings — not nested.
// ─────────────────────────────────────────────

export default function Portfolio({
  eyebrow = 'PORTFOLIO',
  heading = 'Proyek Terbaru Kami',
  viewAllLabel = 'Lihat Semua Proyek',
  viewAllHref = '#',
  projects = portfolioProjects,
  mode = 'carousel',
  accentColor = '#0052e0',
  hideViewAll = false,
  hideEyebrow = false,
  className = '',
}: PortfolioProps) {
  // ── Carousel state lives at this level ──
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  const onSelect = useCallback((api: typeof emblaApi) => {
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="portfolio" className={`py-16 md:py-24 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header row: heading LEFT, controls RIGHT ── */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-10">
          {/* Left: eyebrow + heading */}
          <div>
            {!hideEyebrow && (
              <p
                className="font-black text-xs uppercase tracking-widest mb-3"
                style={{ color: accentColor }}
              >
                {eyebrow}
              </p>
            )}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
              {heading}
            </h2>
          </div>

          {/* Right: nav arrows + CTA (carousel) or just CTA (grid) */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {mode === 'carousel' && (
              <div className="flex gap-2">
                <button
                  id="portfolio-prev"
                  onClick={scrollPrev}
                  className="w-10 h-10 rounded-full border border-slate-200 hover:border-slate-300 active:bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-slate-50 transition duration-300 shadow-sm"
                  aria-label="Previous project"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  id="portfolio-next"
                  onClick={scrollNext}
                  className="w-10 h-10 rounded-full border border-slate-200 hover:border-slate-300 active:bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-slate-50 transition duration-300 shadow-sm"
                  aria-label="Next project"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {!hideViewAll && (
              <Link
                id="portfolio-view-all"
                href={viewAllHref}
                className="border border-slate-200 hover:border-slate-300 rounded-full px-5 py-2.5 text-slate-700 hover:bg-slate-50 font-bold text-xs sm:text-sm flex items-center gap-2 transition duration-300 shadow-sm whitespace-nowrap"
              >
                {viewAllLabel}
                <ArrowRight className="w-4 h-4" style={{ color: accentColor }} />
              </Link>
            )}
          </div>
        </div>

        {/* ── Carousel Mode ── */}
        {mode === 'carousel' && (
          <>
            {/* Slider — full width, below the header row */}
            <div
              className="overflow-hidden cursor-grab active:cursor-grabbing"
              ref={emblaRef}
            >
              <div className="flex gap-6">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)]"
                  >
                    <ProjectCard project={project} accentColor={accentColor} />
                  </div>
                ))}
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center items-center gap-2.5 mt-8">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className="h-2.5 rounded-full transition-all duration-300"
                  style={
                    selectedIndex === index
                      ? { backgroundColor: accentColor, width: '1.75rem' }
                      : { backgroundColor: '#e2e8f0', width: '0.625rem' }
                  }
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}

        {/* ── Grid Mode ── */}
        {mode === 'grid' && (
          <GridView projects={projects} accentColor={accentColor} />
        )}

      </div>
    </section>
  );
}
