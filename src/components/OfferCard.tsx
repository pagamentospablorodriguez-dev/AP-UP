import type { ReactNode } from 'react';

interface OfferCardProps {
  children: ReactNode;
  className?: string;
}

export default function OfferCard({ children, className = '' }: OfferCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-gold/40 bg-ink-800 p-8 shadow-[0_30px_80px_-20px_rgba(200,163,92,0.35)] sm:p-12 ${className}`}
    >
      <div className="shimmer-line absolute inset-x-0 top-0 h-px" />
      {children}
    </div>
  );
}
