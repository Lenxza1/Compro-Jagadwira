'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Target, Award, ShieldCheck } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: Target,
      title: 'Visi Kami',
      description: 'Menjadi mitra teknologi terdepan yang mendampingi bisnis dalam melakukan transformasi digital secara berkelanjutan dan inovatif.',
    },
    {
      icon: Award,
      title: 'Misi Kami',
      description: 'Menghadirkan solusi website dan sistem digital kelas dunia dengan performa tinggi, desain premium, serta dukungan teknis profesional.',
    },
  ];

  const highlights = [
    'Pengembangan Website Kustom & Skalabel',
    'Desain Modern & UI/UX Berorientasi Konversi',
    'Keamanan Data Tingkat Tinggi',
    'Optimasi Performa & SEO Terarah',
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
      {/* Background shapes & glows */}
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-blue-50/60 rounded-full blur-3xl -z-10" />
      <div className="absolute right-0 top-10 w-[300px] h-[300px] bg-indigo-50/50 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Vision, Mission & Image/Visual Card */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            {/* Visual element representing technology and teamwork */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-slate-100 p-6 sm:p-8 space-y-6">
              {/* Decorative gradient corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#0052e0]/20 to-transparent rounded-tr-2xl -z-10" />
              
              <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-[#0052e0]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-black text-slate-900 text-lg leading-tight">Jagadwira Tech</h3>
                  <p className="text-xs text-slate-500 font-medium">Partner Teknologi Terpercaya Anda</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {pillars.map((pillar, index) => {
                  const Icon = pillar.icon;
                  return (
                    <div key={index} className="space-y-2.5">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/5 flex items-center justify-center text-[#0052e0]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm">{pillar.title}</h4>
                      <p className="text-slate-500 text-xs leading-relaxed font-medium">
                        {pillar.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Soft decorative shadow below the card */}
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-[#0052e0]/5 rounded-2xl -z-20 border border-[#0052e0]/10" />
          </div>

          {/* Right Column: Title, Intro text, highlights and CTA */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div>
              <p className="text-[#0052e0] font-black text-xs uppercase tracking-widest mb-3">
                TENTANG KAMI
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
                Membangun Solusi Digital Premium untuk Sukses Bisnis Anda
              </h2>
            </div>

            <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
              Jagadwira Tech adalah studio pengembangan web profesional dan solusi teknologi modern. Kami berdedikasi untuk membantu pelaku bisnis dan organisasi berkembang pesat dengan menghadirkan website profile, e-commerce, dan sistem custom berstandar tinggi.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 py-2">
              {highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-slate-700 text-xs sm:text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild className="bg-[#0052e0] hover:bg-[#0041b3] text-white rounded-full pl-6 pr-2 py-6 font-bold flex items-center gap-3 transition duration-300">
                <Link href="/contact">
                  Mulai Sekarang
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
