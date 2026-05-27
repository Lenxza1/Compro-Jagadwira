'use client';

import { MessageSquare, ClipboardList, Code2, Check, Rocket } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Konsultasi',
    description: 'Diskusi kebutuhan dan tujuan bisnis Anda.',
  },
  {
    icon: ClipboardList,
    title: 'Perencanaan',
    description: 'Perencanaan solusi dan strategi yang tepat.',
  },
  {
    icon: Code2,
    title: 'Pengembangan',
    description: 'Pembuatan website dengan teknologi terbaik.',
  },
  {
    icon: Check,
    title: 'Pengujian',
    description: 'Testing menyeluruh untuk memastikan kualitas.',
  },
  {
    icon: Rocket,
    title: 'Go Live & Support',
    description: 'Website live dan kami siap mendukung penuh.',
  },
];

export default function Process() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Two Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-7">
            <p className="text-[#0052e0] font-black text-xs uppercase tracking-widest mb-3">
              ALUR KERJA KAMI
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
              Proses Mudah & Efektif
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed max-w-lg">
              Kami memiliki proses kerja yang terstruktur untuk memastikan hasil terbaik untuk setiap proyek.
            </p>
          </div>
        </div>

        {/* Process Steps Timeline */}
        <div className="relative mt-12">
          {/* Main Connector Line */}
          <div className="absolute top-8 left-[10%] right-[10%] h-[1px] bg-slate-100 hidden lg:block" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative flex flex-col items-center text-center px-4">
                  
                  {/* Bubble Icon */}
                  <div className="w-16 h-16 rounded-full border border-slate-200 text-[#0052e0] bg-white flex items-center justify-center relative z-10 shadow-sm group hover:border-[#0052e0] transition-colors duration-300">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>

                  {/* Mid-point Step Number between columns */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-6 left-[100%] text-xs font-bold text-[#0052e0] bg-white px-3 py-0.5 rounded transform -translate-x-1/2 z-20 select-none">
                      {index === 0 && "01"}
                      {index === 1 && "02"}
                      {index === 2 && "03"}
                      {index === 3 && "05"}
                    </div>
                  )}

                  {/* Step Content */}
                  <h3 className="text-base font-bold text-slate-900 mt-6 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed max-w-[200px]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

