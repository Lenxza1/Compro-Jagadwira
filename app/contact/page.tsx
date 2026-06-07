'use client';

import React, { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import { 
  Instagram, 
  Linkedin, 
  Facebook, 
  Youtube, 
  Phone, 
  Globe, 
  Mail, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  ClipboardCheck,
  Copy
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Tiktok = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" />
  </svg>
);

const Threads = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M19 7.5c-1.333 -3 -3.667 -4.5 -7 -4.5c-5 0 -8 2.5 -8 9s3.5 9 8 9s7 -3 7 -5s-1 -5 -7 -5c-2.5 0 -3 1.25 -3 2.5c0 1.5 1 2.5 2.5 2.5c2.5 0 3.5 -1.5 3.5 -5s-2 -4 -3 -4s-1.833 .333 -2.5 1" />
  </svg>
);

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Website Company Profile',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `[Kontak Website] ${formData.subject}`;
    const body = [
      `Nama: ${formData.name}`,
      `Email: ${formData.email}`,
      `Layanan: ${formData.service}`,
      '',
      'Pesan:',
      formData.message,
    ].join('\n');

    const mailtoUrl = `mailto:jagadwiratech@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;

    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      service: 'Website Company Profile',
      subject: '',
      message: '',
    });
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#080d1a] transition-colors duration-300">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-28 bg-[#040814] text-white">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl opacity-50" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">Hubungi Kami</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            Mulai Proyek Digital Anda
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-400 font-medium max-w-3xl mx-auto leading-relaxed">
            Jagadwira Tech siap membantu mewujudkan solusi digital profesional, modern, dan responsif untuk mengembangkan bisnis Anda di era digital.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Cards & Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <Card className="border-slate-200/50 dark:border-slate-800/80 bg-white/70 dark:bg-[#0b1329]/80 backdrop-blur-md shadow-xl overflow-hidden">
              <CardContent className="p-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Informasi Kontak</h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                    Gunakan salah satu kontak di bawah ini untuk terhubung langsung dengan tim kami.
                  </p>
                </div>
                
                {/* Contact Items */}
                <div className="space-y-4">
                  {/* Phone */}
                  <div className="flex items-center justify-between p-4 rounded-xl bg-slate-100/50 dark:bg-slate-900/40 border border-slate-200/30 dark:border-slate-800/40 group hover:border-primary/30 transition duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#0052e0]/10 flex items-center justify-center text-[#0052e0] dark:text-[#3b82f6]">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">Telepon / WhatsApp</span>
                        <Link href="tel:+6285716688814" className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200 hover:text-primary transition">
                          +62 857-1668-8814
                        </Link>
                      </div>
                    </div>
                    <button 
                      onClick={() => handleCopy('0857-1668-8814', 'phone')}
                      className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition"
                      title="Salin nomor"
                    >
                      {copiedText === 'phone' ? <ClipboardCheck className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Email */}
                  <div className="flex items-center justify-between p-4 rounded-xl bg-slate-100/50 dark:bg-slate-900/40 border border-slate-200/30 dark:border-slate-800/40 group hover:border-primary/30 transition duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#0052e0]/10 flex items-center justify-center text-[#0052e0] dark:text-[#3b82f6]">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">Email Resmi</span>
                        <Link href="mailto:jagadwiratech@gmail.com" className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200 hover:text-primary transition break-all">
                          jagadwiratech@gmail.com
                        </Link>
                      </div>
                    </div>
                    <button 
                      onClick={() => handleCopy('jagadwiratech@gmail.com', 'email')}
                      className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition"
                      title="Salin email"
                    >
                      {copiedText === 'email' ? <ClipboardCheck className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Website */}
                  <div className="flex items-center justify-between p-4 rounded-xl bg-slate-100/50 dark:bg-slate-900/40 border border-slate-200/30 dark:border-slate-800/40 group hover:border-primary/30 transition duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#0052e0]/10 flex items-center justify-center text-[#0052e0] dark:text-[#3b82f6]">
                        <Globe className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">Situs Web</span>
                        <Link href="https://jagadwiratech.id" target="_blank" className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200 hover:text-primary transition">
                          jagadwiratech.id
                        </Link>
                      </div>
                    </div>
                    <button 
                      onClick={() => handleCopy('https://jagadwiratech.id', 'website')}
                      className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition"
                      title="Salin URL"
                    >
                      {copiedText === 'website' ? <ClipboardCheck className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Social Connect */}
                <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800/80">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-4">Ikuti Media Sosial Kami</h4>
                  <div className="flex gap-3">
                    <Link 
                      href="https://www.instagram.com/jagadwiratech/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200/30 dark:border-slate-800/40 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-[#0052e0] hover:text-white dark:hover:bg-primary transition duration-300"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-5 h-5" />
                    </Link>
                    <Link 
                      href="https://www.tiktok.com/@jagadwiratech.id" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200/30 dark:border-slate-800/40 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-[#0052e0] hover:text-white dark:hover:bg-primary transition duration-300"
                      aria-label="Tiktok"
                    >
                      <Tiktok className="w-5 h-5" />
                    </Link>
                    <Link 
                      href="https://www.threads.com/@jagadwiratech" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200/30 dark:border-slate-800/40 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-[#0052e0] hover:text-white dark:hover:bg-primary transition duration-300"
                      aria-label="Threads"
                    >
                      <Threads className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Services & Company Lists from Footer */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white/40 dark:bg-[#0b1329]/40 border border-slate-200/30 dark:border-slate-800/40">
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400 mb-3">Layanan Kami</h4>
                <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-350 font-medium">
                  <li>Website Company Profile</li>
                  <li>Website E-Commerce</li>
                  <li>Custom Development</li>
                  <li>SEO Optimization</li>
                  <li>Maintenance & Support</li>
                </ul>
              </div>
              <div className="p-5 rounded-2xl bg-white/40 dark:bg-[#0b1329]/40 border border-slate-200/30 dark:border-slate-800/40">
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400 mb-3">Perusahaan</h4>
                <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-350 font-medium">
                  <li>Tentang Kami</li>
                  <li>Portofolio</li>
                  <li>Karir</li>
                  <li>Kontak</li>
                </ul>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="lg:col-span-7">
            <Card className="border-slate-200/50 dark:border-slate-800/80 bg-white dark:bg-[#0b1329] shadow-xl relative overflow-hidden">
              {/* Highlight lines */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-violet-600 to-indigo-600" />
              
              <CardContent className="p-8 sm:p-10">
                {isSubmitted ? (
                  <div className="text-center py-12 space-y-5">
                    <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/50 rounded-full flex items-center justify-center mx-auto text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Buka Aplikasi Email</h3>
                      <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                        Klien email Anda telah dibuka dengan pesan yang sudah diisi. Silakan tekan kirim dari aplikasi email Anda untuk mengirim pesan ke Jagadwira Tech.
                      </p>
                    </div>
                    <Button 
                      onClick={() => setIsSubmitted(false)}
                      variant="outline" 
                      className="rounded-full px-6"
                    >
                      Kirim Pesan Lain
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Kirim Pesan Langsung</h2>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Isi formulir di bawah ini untuk konsultasi gratis mengenai proyek digital Anda.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-2">
                        <Label htmlFor="name">Nama Lengkap</Label>
                        <Input 
                          id="name" 
                          placeholder="Masukkan nama Anda"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full bg-slate-50/50 dark:bg-slate-900/50 py-5 rounded-lg border-slate-200 dark:border-slate-800 focus-visible:ring-primary"
                        />
                      </div>
                      
                      {/* Email */}
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          type="email"
                          placeholder="nama@email.com"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full bg-slate-50/50 dark:bg-slate-900/50 py-5 rounded-lg border-slate-200 dark:border-slate-800 focus-visible:ring-primary"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Service Select */}
                      <div className="space-y-2">
                        <Label htmlFor="service">Layanan yang Diperlukan</Label>
                        <select 
                          id="service"
                          value={formData.service}
                          onChange={(e) => setFormData({...formData, service: e.target.value})}
                          className="w-full bg-slate-50/50 dark:bg-[#131d36]/50 rounded-lg border border-slate-200 dark:border-slate-850 px-3 py-2.5 text-slate-800 dark:text-slate-200 text-sm focus-visible:ring-primary focus-visible:outline-none"
                        >
                          <option value="Website Company Profile">Website Company Profile</option>
                          <option value="Website E-Commerce">Website E-Commerce</option>
                          <option value="Custom Development">Custom Development</option>
                          <option value="SEO Optimization">SEO Optimization</option>
                          <option value="Maintenance & Support">Maintenance & Support</option>
                        </select>
                      </div>

                      {/* Subject */}
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subjek</Label>
                        <Input 
                          id="subject" 
                          placeholder="Subjek pesan"
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({...formData, subject: e.target.value})}
                          className="w-full bg-slate-50/50 dark:bg-slate-900/50 py-5 rounded-lg border-slate-200 dark:border-slate-800 focus-visible:ring-primary"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message">Pesan</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tuliskan detail kebutuhan proyek digital Anda di sini..."
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full bg-slate-50/50 dark:bg-slate-900/50 rounded-lg border-slate-200 dark:border-slate-800 focus-visible:ring-primary min-h-[120px]"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-[#0052e0] hover:bg-[#0041b3] text-white py-6 rounded-full font-bold transition duration-300 flex items-center justify-center gap-2 group"
                    >
                      Kirim Pesan
                      <Send className="w-4 h-4 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
