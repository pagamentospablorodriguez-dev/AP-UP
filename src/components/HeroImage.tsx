import type { ReactNode } from 'react';

interface HeroImageProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  children?: ReactNode;
}

export default function HeroImage({
  src,
  alt,
  caption,
  className = '',
  children,
}: HeroImageProps) {
  return (
    <div className={`reveal relative overflow-hidden rounded-2xl ${className}`}>
      <div className="absolute inset-0">
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/40 via-ink-900/55 to-ink-900" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-transparent" />
      </div>
      <div className="relative flex min-h-[360px] flex-col justify-end p-6 sm:min-h-[480px] sm:p-10">
        {children}
        {caption && (
          <p className="mt-4 max-w-xl font-serif text-lg italic text-gold/90 sm:text-xl">
            {caption}
          </p>
        )}
      </div>
    </div>
  );
}
