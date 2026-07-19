import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

interface CTAButtonProps {
  children: ReactNode;
  href?: string;
  microcopy?: string;
  onClick?: () => void;
  className?: string;
}

export default function CTAButton({
  children,
  href = '#',
  microcopy,
  onClick,
  className = '',
}: CTAButtonProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <a
        href={href}
        onClick={(e) => {
          if (onClick) {
            e.preventDefault();
            onClick();
          }
        }}
        className={`group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-b from-[#e6c178] to-[#c8a35c] px-8 py-5 text-center font-sans text-base font-extrabold uppercase tracking-wide text-ink-900 shadow-[0_18px_40px_-12px_rgba(200,163,92,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-12px_rgba(200,163,92,0.7)] cta-pulse sm:text-lg ${className}`}
      >
        <span className="leading-tight">{children}</span>
        <ArrowRight className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1.5" />
      </a>
      {microcopy && (
        <p className="text-[11px] font-medium uppercase tracking-widest text-cream/50">
          {microcopy}
        </p>
      )}
    </div>
  );
}
