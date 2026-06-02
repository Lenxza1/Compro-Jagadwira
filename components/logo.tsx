'use client';

import Image from 'next/image';

interface LogoProps {
  className?: string;
  imageClassName?: string;
  lightText?: boolean;
}

export default function Logo({ className = '', imageClassName = 'h-20 w-auto object-contain' }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/Light theme.png"
        alt="Jagadwira Tech"
        width={240}
        height={240}
        className={imageClassName}
        priority
      />
    </div>
  );
}
