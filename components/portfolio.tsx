'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';

const projects = [
  {
    title: 'PT. Arsitek Nusantara',
    category: 'Website Company Profile',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop',
  },
  {
    title: 'Urban Store',
    category: 'Website E-Commerce',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=400&fit=crop',
  },
  {
    title: 'Sistem Manajemen Inventori',
    category: 'Custom Web Application',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
  },
  {
    title: 'Eco Harvest Farm',
    category: 'Website E-Commerce',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=400&fit=crop',
  },
  {
    title: 'Prime Finance Dashboard',
    category: 'Custom Web Application',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
  },
  {
    title: 'Velo City Fitness',
    category: 'Website Company Profile',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop',
  },
];

export default function Portfolio() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    slidesToScroll: 1
  });
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    
    onSelect(emblaApi);
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12">
          <div>
            <p className="text-[#0052e0] font-black text-xs uppercase tracking-widest mb-3">
              PORTFOLIO
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
              Proyek Terbaru Kami
            </h2>
          </div>
          
          {/* Controls & CTA button wrapper */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            {/* Arrow Nav Buttons */}
            <div className="flex gap-2">
              <button
                onClick={scrollPrev}
                className="w-10 h-10 rounded-full border border-slate-200 hover:border-slate-300 active:bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-slate-50 transition duration-300 shadow-sm"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={scrollNext}
                className="w-10 h-10 rounded-full border border-slate-200 hover:border-slate-300 active:bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-slate-50 transition duration-300 shadow-sm"
                aria-label="Next project"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            
            <Link
              href="#"
              className="border border-slate-200 hover:border-slate-300 rounded-full px-5 py-2.5 text-slate-700 hover:bg-slate-50 font-bold text-xs sm:text-sm flex items-center gap-2 transition duration-300 shadow-sm whitespace-nowrap"
            >
              Lihat Semua Proyek
              <ArrowRight className="w-4 h-4 text-[#0052e0]" />
            </Link>
          </div>
        </div>

        {/* Embla Slider Window */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing px-1" ref={emblaRef}>
          <div className="flex -ml-6">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="flex-[0_0_100%] min-w-0 pl-6 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pb-2"
              >
                <Link
                  href="#"
                  className="group cursor-pointer block overflow-hidden rounded-2xl bg-white border border-slate-100 hover:border-primary/20 hover:shadow-xl transition-all duration-300 h-full"
                >
                  {/* Image Block */}
                  <div className="relative aspect-[4/3] bg-slate-100 rounded-2xl overflow-hidden shadow-sm">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 transition-all duration-300 flex items-center justify-center">
                      <div className="bg-white text-slate-900 rounded-full p-3 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 shadow-md">
                        <ArrowUpRight className="w-5 h-5 text-[#0052e0]" />
                      </div>
                    </div>
                  </div>

                  {/* Project Info Block */}
                  <div className="p-4 flex justify-between items-start">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0052e0] transition-colors leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-slate-400 text-xs font-semibold mt-1.5">
                        {project.category}
                      </p>
                    </div>
                    <div className="bg-slate-50 text-slate-400 group-hover:bg-blue-50 group-hover:text-[#0052e0] p-1.5 rounded-full transition-all duration-300 flex-shrink-0">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Navigation / Pagination */}
        <div className="flex justify-center items-center gap-2.5 mt-10">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                selectedIndex === index 
                  ? 'w-7 bg-[#0052e0]' 
                  : 'w-2.5 bg-slate-200 hover:bg-slate-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}


