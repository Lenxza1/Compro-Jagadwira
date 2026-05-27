'use client';

import { Users, Folder, Smile, Trophy } from 'lucide-react';

const stats = [
  {
    icon: Users,
    number: '100+',
    label: 'Klien Puas',
  },
  {
    icon: Folder,
    number: '150+',
    label: 'Proyek Selesai',
  },
  {
    icon: Smile,
    number: '98%',
    label: 'Tingkat Kepuasan',
  },
  {
    icon: Trophy,
    number: '5+',
    label: 'Tahun Pengalaman',
  },
];

export default function Statistics() {
  return (
    <section className="py-16 bg-[#040814] border-y border-white/5 relative overflow-hidden">
      {/* Background cyber ambient lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-y-0 lg:divide-x lg:divide-white/10">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center px-4">
                {/* Blue Icon */}
                <div className="text-blue-500 mb-3 hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 stroke-[1.5]" />
                </div>
                
                {/* Big White Number */}
                <div className="text-4xl sm:text-5xl font-black text-white mb-2 tracking-tight">
                  {stat.number}
                </div>
                
                {/* Label */}
                <h3 className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-widest">
                  {stat.label}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

