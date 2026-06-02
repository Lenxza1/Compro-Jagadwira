'use client';

import React, { useState } from 'react';
import { ShoppingCart, Code2, Search, Headphones, ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog';

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
    detailedDescription: 'Website Company Profile adalah instrumen utama dalam membangun branding digital yang kuat. Kami merancang website profil perusahaan dengan desain modern, navigasi intuitif, dan performa tinggi untuk menceritakan kisah bisnis Anda dan menarik klien potensial.',
    features: [
      'Desain Premium & Kustom (Sesuai Merek)',
      'Optimasi SEO Dasar & Kecepatan Akses',
      'Responsif di Semua Perangkat (Mobile, Tablet, Desktop)',
      'Integrasi Whatsapp Chat & Formulir Kontak',
      'Sistem Kelola Konten Mandiri (CMS Admin Panel)',
    ],
  },
  {
    icon: ShoppingCart,
    title: 'Website E-Commerce',
    description: 'Toko online lengkap, aman, dan mudah dikelola untuk meningkatkan penjualan.',
    detailedDescription: 'Miliki platform e-commerce yang tangguh, aman, dan siap pakai untuk menjual produk Anda langsung ke pelanggan. Kami membuat sistem toko online dengan UI/UX yang dioptimalkan untuk meningkatkan konversi dan memudahkan pembeli bertransaksi.',
    features: [
      'Sistem Manajemen Produk & Inventori Terintegrasi',
      'Metode Pembayaran Otomatis (E-Wallet, Transfer Bank, QRIS)',
      'Kalkulator Ongkos Kirim Otomatis (JNE, J&T, SiCepat, dll.)',
      'Halaman Akun Pembeli & Riwayat Transaksi',
      'Keamanan SSL & Backup Data Berkala',
    ],
  },
  {
    icon: Code2,
    title: 'Custom Development',
    description: 'Sistem web custom sesuai kebutuhan bisnis dengan fitur yang fleksibel.',
    detailedDescription: 'Jika bisnis Anda membutuhkan alur kerja atau fitur yang unik dan tidak dapat diakomodasi oleh sistem standard, layanan Custom Web Development kami adalah jawabannya. Kami membangun sistem aplikasi web dari awal sesuai spesifikasi kebutuhan bisnis Anda.',
    features: [
      'Pengembangan Sistem Berbasis Kebutuhan Khusus (Tailor-made)',
      'Teknologi Modern (React, Next.js, Node.js, dll.)',
      'Integrasi API Pihak Ketiga (Logistik, Finance, CRM)',
      'Arsitektur Database Terstruktur & Skalabel',
      'Hak Kepemilikan Kode Sumber Sepenuhnya',
    ],
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Optimasi website agar mudah ditemukan di mesin pencari dan menjangkau lebih banyak pelanggan.',
    detailedDescription: 'Website hebat tidak ada artinya jika tidak ditemukan oleh target pasar Anda. Layanan SEO kami membantu menaikkan peringkat situs Anda di Google secara organik, mendatangkan trafik tertarget, dan mengungguli kompetitor bisnis Anda.',
    features: [
      'Riset Kata Kunci & Analisis Kompetitor mendalam',
      'Audit SEO On-Page (Meta tags, Alt tags, Struktur URL)',
      'Optimasi SEO Teknikal (Kecepatan Situs, Sitemap, Robots.txt)',
      'Strategi Off-Page & Pembuatan Backlink Berkualitas',
      'Laporan Bulanan Peringkat & Trafik Google Search Console',
    ],
  },
  {
    icon: Headphones,
    title: 'Maintenance & Support',
    description: 'Perawatan website secara berkala agar tetap optimal, aman, dan selalu up-to-date.',
    detailedDescription: 'Hindari downtime, kebocoran keamanan, dan error teknis dengan mempercayakan pemeliharaan website Anda kepada kami. Kami memastikan situs Anda selalu dalam kondisi terbaik, terlindungi dari ancaman siber, dan diperbarui secara berkala.',
    features: [
      'Monitoring Uptime & Keamanan 24/7',
      'Pembaruan Sistem, Framework, & Plugin Berkala',
      'Pencadangan (Backup) Data Mingguan/Bulanan',
      'Bantuan Teknis Cepat (Priority Support)',
      'Optimasi Kecepatan & Pembersihan File Sampah',
    ],
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[number] | null>(null);

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
          </div>
        </div>

        {/* Services Grid (5 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <button
                key={index}
                onClick={() => setSelectedService(service)}
                className="group text-left flex flex-col justify-between p-6 rounded-2xl bg-white border border-slate-100 hover:border-[#0052e0]/20 hover:shadow-xl transition-all duration-300 w-full h-full cursor-pointer focus:outline-hidden"
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
              </button>
            );
          })}
        </div>
      </div>

      {/* Modal / Dialog detail layanan */}
      <Dialog open={!!selectedService} onOpenChange={(open) => !open && setSelectedService(null)}>
        {selectedService && (
          <DialogContent className="sm:max-w-md p-0 overflow-hidden rounded-2xl border-none bg-white">
            {/* Header */}
            <div className="p-5 sm:p-6 bg-gradient-to-br from-slate-50 to-white border-b border-slate-100 relative">
              <div className="w-12 h-12 rounded-xl bg-blue-500/5 border border-blue-500/10 flex items-center justify-center mb-4 text-[#0052e0]">
                {React.createElement(selectedService.icon, { className: 'w-6 h-6' })}
              </div>
              <DialogTitle className="text-lg sm:text-xl font-black text-slate-900 leading-tight">
                {selectedService.title}
              </DialogTitle>
            </div>
            
            {/* Body */}
            <div className="p-5 sm:p-6 space-y-5 max-h-[60vh] overflow-y-auto">
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-widest text-[#0052e0] mb-1.5">Deskripsi Layanan</h4>
                <DialogDescription className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                  {selectedService.detailedDescription}
                </DialogDescription>
              </div>

              <div>
                <h4 className="text-[10px] font-black uppercase tracking-widest text-[#0052e0] mb-2.5">Apa Yang Anda Dapatkan</h4>
                <ul className="space-y-2">
                  {selectedService.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-slate-700 text-xs sm:text-sm font-semibold">
                      <div className="flex-shrink-0 w-4 h-4 rounded-full bg-blue-500/5 border border-blue-500/10 flex items-center justify-center text-[#0052e0] mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer */}
            <div className="p-5 sm:p-6 bg-slate-50 border-t border-slate-100 flex flex-col-reverse sm:flex-row gap-2.5 justify-end">
              <Button
                variant="outline"
                onClick={() => setSelectedService(null)}
                className="rounded-full border-slate-200 text-slate-700 hover:bg-slate-100 font-bold px-5 py-2 text-xs sm:text-sm cursor-pointer"
              >
                Tutup
              </Button>
              <Link
                href={`/contact?service=${encodeURIComponent(selectedService.title)}`}
                className="inline-flex items-center justify-center rounded-full bg-[#0052e0] hover:bg-blue-700 text-white font-bold px-5 py-2 text-xs sm:text-sm gap-2 transition duration-300 shadow-md hover:shadow-lg cursor-pointer"
              >
                Konsultasi Sekarang
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </Link>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}


