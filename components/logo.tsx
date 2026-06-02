'use client';

import Image from 'next/image';

interface LogoProps {
  className?: string;
  imageClassName?: string;
  variant?: 'light' | 'dark';
}

const LOGO_SRC = {
  light: '/LOGO MANJANG light JAGADWIRA.png',
  dark: '/LOGO MANJANG DARK JAGADWIRA.png',
} as const;

export default function Logo({
  className = '',
  imageClassName = 'h-24 w-auto min-w-[260px] max-w-[400px] object-contain object-left sm:h-28 sm:min-w-[300px] sm:max-w-[460px] md:h-32 md:min-w-[340px] md:max-w-[520px]',
  variant = 'light',
}: LogoProps) {
  return (
    <div className={`flex items-center shrink-0 ${className}`}>
      <Image
        src={LOGO_SRC[variant]}
        alt="Jagadwira Tech"
        width={560}
        height={140}
        className={imageClassName}
        priority={variant === 'light'}
      />
    </div>
  );
}
