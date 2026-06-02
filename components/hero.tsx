'use client';

import { Button } from '@/components/ui/button';
import { Play, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative py-12 md:py-20 lg:py-24 overflow-hidden bg-white">
      {/* Background glow effects */}
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-blue-50/55 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content (5 cols on lg) */}
          <div className="space-y-6 lg:col-span-5">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] text-balance">
              Solusi Digital
              <br />
              Profesional untuk
              <br />
              Bisnis yang <span className="text-[#0052e0]">Lebih Maju</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-xl">
              Kami membantu bisnis Anda berkembang dengan website profesional, modern, dan responsif yang dirancang untuk hasil terbaik.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild className="bg-[#0052e0] hover:bg-[#0041b3] text-white rounded-full pl-6 pr-2 py-6 font-bold flex items-center gap-3 transition duration-300">
                <Link href="/contact">
                  Mulai Sekarang
                  <div className="bg-white text-[#0052e0] p-1.5 rounded-full flex items-center justify-center inline-flex ml-2">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              </Button>
              
              <Button
                asChild
                variant="outline"
                className="rounded-full pl-3 pr-6 py-6 font-bold border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-black flex items-center gap-3 transition duration-300"
              >
                <Link href="/#portfolio">
                  <div className="bg-[#0052e0]/10 text-[#0052e0] p-2 rounded-full flex items-center justify-center">
                    <Play className="w-3.5 h-3.5 fill-[#0052e0]" />
                  </div>
                  Lihat Portofolio
                </Link>
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
              <div className="flex -space-x-3">
                <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-white">
                  <Image 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=faces" 
                    alt="User 1" 
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-white">
                  <Image 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces" 
                    alt="User 2" 
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-white">
                  <Image 
                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=80&h=80&fit=crop&crop=faces" 
                    alt="User 3" 
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                Telah dipercaya <span className="text-[#0052e0] font-bold">100+ klien</span> di berbagai industri
              </p>
            </div>
          </div>

          {/* Right Side - Realistic Device Mockups (7 cols on lg) */}
          {/* Right Side - Hero Image (7 cols on lg) */}
          <div className="lg:col-span-7 relative flex justify-center items-center w-full">
            {/* Background cyber grid & glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08)_0%,transparent_70%)] rounded-3xl -z-10" />
            
            {/* Image Container */}
            <div className="relative w-full aspect-[1535/1024]">
              <Image
                src="/hero.png"
                alt="Solusi Digital Jagadwira"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

