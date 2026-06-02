'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const clients = [
  { name: 'Bank Indonesia', logo: '/Logo/Logo BI.png' },
  { name: 'BRIN', logo: '/Logo/Logo BRIN.svg' },
  { name: 'Elnusa', logo: '/Logo/Logo Elnusa.png' },
  { name: 'Kemenkes', logo: '/Logo/Logo Kemenkes.png' },
  { name: 'WIKA', logo: '/Logo/Logo WIKA.png' },
  { name: 'Rumae', logo: '/Logo/logo-rumae.png' },
];

function ClientLogo({ client }: { client: (typeof clients)[0] }) {
  return (
    <div
      className="flex items-center opacity-50 hover:opacity-100 transition-opacity duration-300"
      title={client.name}
      style={{ padding: '8px 40px', flexShrink: 0 }}
    >
      <Image
        src={client.logo}
        alt={client.name}
        width={120}
        height={48}
        className="h-12 w-auto max-w-[140px] object-contain"
      />
    </div>
  );
}

export default function Statistics() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const styleId = 'marquee-keyframes';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        @keyframes scrollMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <section className="py-12 bg-[#040814] border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-6">
          <span className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-[0.25em]">
            Telah Dipercaya Oleh Mitra Bisnis Kami
          </span>
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#040814] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#040814] to-transparent z-10 pointer-events-none" />

          <div
            ref={trackRef}
            style={{
              display: 'flex',
              width: 'max-content',
              animation: 'scrollMarquee 25s linear infinite',
            }}
          >
            {clients.map((client, idx) => (
              <ClientLogo key={`a-${idx}`} client={client} />
            ))}
            {clients.map((client, idx) => (
              <ClientLogo key={`b-${idx}`} client={client} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
