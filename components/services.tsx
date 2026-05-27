'use client';

import { ShoppingCart, Code2, Search, Headphones, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// Custom Browser Icon for Website Company Profile
const BrowserIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="18" x="2" y="3" rx="2" />
    <path d="M2 9h20" />
    <path d="M6 6h.01" />
    <path d="M10 6h.01" />
  </svg>
);

const services = [
  {
    icon: BrowserIcon,
    title: 'Website Company Profile',
    description: 'Website profesional untuk meningkatkan kredibilitas dan kepercayaan bisnis Anda.',
  },
  {
    icon: ShoppingCart,
    title: 'Website E-Commerce',
    description: 'Toko online lengkap, aman, dan mudah dikelola untuk meningkatkan penjualan.',
  },
  {
    icon: Code2,
    title: 'Custom Development',
    description: 'Sistem web custom sesuai kebutuhan bisnis dengan fitur yang fleksibel.',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Optimasi website agar mudah ditemukan di mesin pencari dan menjangkau lebih banyak pelanggan.',
  },
  {
    icon: Headphones,
    title: 'Maintenance & Support',
    description: 'Perawatan website secara berkala agar tetap optimal, aman, dan selalu up-to-date.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-Column Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-7">
            <p className="text-[#0052e0] font-black text-xs uppercase tracking-widest mb-3">
              LAYANAN KAMI
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.15]">
              Layanan Digital untuk
              <br />
              Kebutuhan Bisnis Anda
            </h2>
          </div>
          <div className="lg:col-span-5 flex flex-col items-start lg:items-end space-y-4">
            <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed lg:text-right max-w-lg">
              Kami menyediakan berbagai layanan digital untuk membantu bisnis Anda tampil lebih profesional, modern, dan kompetitif.
            </p>
            <Button
              variant="outline"
              className="rounded-full border-slate-200 text-slate-700 hover:bg-slate-50 font-bold px-6 py-5 flex items-center gap-2 transition duration-300"
            >
              Lihat Semua Layanan
              <ArrowRight className="w-4 h-4 text-[#0052e0]" />
            </Button>
          </div>
        </div>

        {/* Services Grid (5 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={index}
                href="#"
                className="group flex flex-col justify-between p-6 rounded-2xl bg-white border border-slate-100 hover:border-primary/20 hover:shadow-xl transition-all duration-300"
              >
                <div>
                  {/* Icon Block */}
                  <div className="w-12 h-12 rounded-xl bg-blue-500/5 border border-blue-500/10 flex items-center justify-center mb-6 text-[#0052e0] group-hover:bg-[#0052e0] group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-base font-bold text-slate-900 mb-3 group-hover:text-[#0052e0] transition-colors leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Arrow Link */}
                <div className="flex items-center gap-1.5 text-[#0052e0] font-bold text-xs group-hover:translate-x-1 transition-transform">
                  Selengkapnya
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

