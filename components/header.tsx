'use client';

import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-semibold text-slate-700 text-sm">
            <Link href="#" className="text-primary relative py-2 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:bg-primary after:rounded-full transition">
              Beranda
            </Link>
            <Link href="#" className="hover:text-primary transition py-2">
              Tentang Kami
            </Link>
            <Link href="#services" className="hover:text-primary transition py-2">
              Layanan
            </Link>
            <Link href="#portfolio" className="hover:text-primary transition py-2">
              Portofolio
            </Link>
            <Link href="#" className="hover:text-primary transition py-2">
              Blog
            </Link>
            <Link href="#" className="hover:text-primary transition py-2">
              Kontak
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-[#0052e0] hover:bg-[#0041b3] text-white rounded-full pl-6 pr-2 py-5 font-bold flex items-center gap-3 transition duration-300">
              Konsultasi Gratis
              <div className="bg-white text-[#0052e0] p-1.5 rounded-full flex items-center justify-center">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} className="text-slate-900" />
            ) : (
              <Menu size={24} className="text-slate-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 pb-4 border-t border-slate-100 pt-4">
            <Link href="#" className="block py-2 text-slate-700 hover:text-primary transition font-semibold">
              Beranda
            </Link>
            <Link href="#" className="block py-2 text-slate-700 hover:text-primary transition font-semibold">
              Tentang Kami
            </Link>
            <Link href="#services" className="block py-2 text-slate-700 hover:text-primary transition font-semibold">
              Layanan
            </Link>
            <Link href="#portfolio" className="block py-2 text-slate-700 hover:text-primary transition font-semibold">
              Portofolio
            </Link>
            <Link href="#" className="block py-2 text-slate-700 hover:text-primary transition font-semibold">
              Blog
            </Link>
            <Link href="#" className="block py-2 text-slate-700 hover:text-primary transition font-semibold">
              Kontak
            </Link>
            <Button className="w-full bg-[#0052e0] hover:bg-[#0041b3] text-white rounded-full py-6 font-bold flex items-center justify-center gap-3 mt-4">
              Konsultasi Gratis
              <div className="bg-white text-[#0052e0] p-1.5 rounded-full flex items-center justify-center">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}

