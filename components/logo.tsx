'use client';

import Image from 'next/image';

interface LogoProps {
  className?: string;
  lightText?: boolean;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/Light theme.png"
        alt="Jagadwira Tech"
        width={160}
        height={48}
        className="h-10 w-auto object-contain"
        priority
      />
    </div>
  );
}
