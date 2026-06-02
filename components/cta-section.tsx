'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#040814] rounded-3xl p-8 md:p-12 border border-white/5 shadow-2xl relative overflow-hidden">
          
          {/* Futuristic circuit grid decoration */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-25 pointer-events-none hidden md:block">
            <svg viewBox="0 0 400 400" className="w-full h-full text-[#3b82f6]" fill="none" stroke="currentColor" strokeWidth="1.5">
              {/* Paths */}
              <path d="M120,200 H200 L250,150 H320" />
              <path d="M200,200 L230,230 H280" />
              <path d="M250,150 L280,120 H340" />
              <path d="M280,230 L310,260 V320" strokeDasharray="4 4" />
              <path d="M320,150 L340,170 H380" />
              {/* Nodes */}
              <circle cx="200" cy="200" r="4" fill="currentColor" />
              <circle cx="250" cy="150" r="4" fill="currentColor" />
              <circle cx="280" cy="230" r="3" fill="currentColor" />
              <circle cx="280" cy="120" r="3" fill="currentColor" />
              <circle cx="320" cy="150" r="3" fill="currentColor" />
              <circle cx="340" cy="120" r="4" fill="currentColor" />
              <circle cx="340" cy="170" r="3" fill="currentColor" />
              <circle cx="380" cy="170" r="5" fill="currentColor" />
            </svg>
          </div>

          {/* Glow backdrop */}
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                Siap Mewujudkan Ide Anda
                <br />
                Menjadi <span className="text-[#3b82f6]">Solusi Digital Nyata</span>?
              </h2>
              <p className="text-slate-400 font-medium text-xs sm:text-sm sm:text-base leading-relaxed max-w-xl">
                Konsultasikan kebutuhan bisnis Anda secara gratis bersama tim kami dan dapatkan solusi terbaik sekarang juga!
              </p>
            </div>

            {/* Right Action Button */}
            <div className="lg:col-span-4 flex lg:justify-end">
              <Button asChild className="bg-[#0052e0] hover:bg-[#0041b3] text-white rounded-full pl-6 pr-2 py-6 font-bold flex items-center gap-3 transition duration-300 shadow-lg shadow-blue-500/20">
                <Link href="/contact">
                  Konsultasi Gratis Sekarang
                  <div className="bg-white text-[#0052e0] p-1.5 rounded-full flex items-center justify-center inline-flex ml-2">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

