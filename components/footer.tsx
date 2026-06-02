'use client';

import Link from 'next/link';
import { Instagram, Linkedin, Facebook, Youtube, Phone, Globe, Mail } from 'lucide-react';
import Logo from '@/components/logo';

export default function Footer() {
  return (
    <footer className="bg-[#040814] text-white py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">
          
          {/* Company Info (4 cols) */}
          <div className="space-y-6 lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="flex items-center">
              <Logo
                variant="dark"
                imageClassName="h-24 w-auto min-w-[260px] max-w-[400px] object-contain object-left sm:h-28 sm:min-w-[300px] sm:max-w-[460px] md:h-32 md:min-w-[320px] md:max-w-[500px]"
              />
            </Link>
            <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-xs">
              Jagadwira Tech adalah penyedia solusi digital profesional untuk membantu bisnis Anda berkembang di era digital dengan teknologi terbaik.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              <Link 
                href="#" 
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:border-white hover:text-white transition duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </Link>
              <Link 
                href="#" 
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:border-white hover:text-white transition duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link 
                href="#" 
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:border-white hover:text-white transition duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </Link>
              <Link 
                href="#" 
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:border-white hover:text-white transition duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Spacer for lg */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Layanan (3 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-bold text-sm tracking-wider uppercase text-white">Layanan</h3>
            <ul className="space-y-3 text-slate-400 font-medium text-sm">
              <li>
                <Link href="/#services" className="hover:text-white transition">
                  Website Company Profile
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition">
                  Website E-Commerce
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition">
                  Custom Development
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition">
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition">
                  Maintenance & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Perusahaan (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-bold text-sm tracking-wider uppercase text-white">Perusahaan</h3>
            <ul className="space-y-3 text-slate-400 font-medium text-sm">
              <li>
                <Link href="/#about" className="hover:text-white transition">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/#portfolio" className="hover:text-white transition">
                  Portofolio
                </Link>
              </li>
              <li>
                <Link href="/#careers" className="hover:text-white transition">
                  Karir
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Hubungi Kami (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-bold text-sm tracking-wider uppercase text-white">Hubungi Kami</h3>
            <ul className="space-y-3.5 text-slate-400 font-medium text-sm">
              <li className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-slate-400">
                  <Phone className="w-4 h-4" />
                </div>
                <Link href="tel:+6281316635670" className="hover:text-white transition">
                  0813-1663-5670
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-slate-400">
                  <Globe className="w-4 h-4" />
                </div>
                <Link href="https://jagadwiratech.id" className="hover:text-white transition">
                  jagadwiratech.id
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-slate-400">
                  <Mail className="w-4 h-4" />
                </div>
                <Link href="mailto:jagadwiratech@gmail.com" className="hover:text-white transition">
                  jagadwiratech@gmail.com
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8">
          {/* Copyright */}
          <div className="text-center text-slate-500 text-xs sm:text-sm font-medium">
            <p>&copy; 2026 Jagadwira Tech. All Rights Reserved.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}

