'use client';

import { Star, Code2, Shield, Headphones } from 'lucide-react';

const features = [
  {
    icon: Star,
    title: 'Kualitas Premium',
    description: 'Hasil terbaik dengan standar kualitas tinggi.',
  },
  {
    icon: Code2,
    title: 'Teknologi Terbaru',
    description: 'Menggunakan teknologi terkini dan terdepan.',
  },
  {
    icon: Shield,
    title: 'Aman & Terpercaya',
    description: 'Website aman, stabil, dan dapat diandalkan.',
  },
  {
    icon: Headphones,
    title: 'Support Profesional',
    description: 'Tim support siap membantu kapan saja.',
  },
];

export default function Features() {
  return (
    <section className="pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#040814] rounded-2xl p-8 md:p-10 border border-white/5 shadow-2xl relative overflow-hidden">
          {/* Subtle glowing backgrounds */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 md:gap-y-8 lg:gap-y-0 lg:divide-x lg:divide-white/10">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center px-4 first:lg:pl-0 last:lg:pr-0 lg:px-6"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4 text-[#3b82f6]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-400 text-xs sm:text-sm font-medium leading-relaxed max-w-[200px]">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

