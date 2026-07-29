import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ArrowRight, Lock } from 'lucide-react';

interface StickyCTAProps {
  checkoutUrl: string;
  label: string;
}

export default function StickyCTA({ checkoutUrl, label }: StickyCTAProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 700);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return createPortal(
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-gold/30 bg-ink-900/95 backdrop-blur transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-3">
        <div className="hidden sm:block">
          <p className="font-sans text-[11px] uppercase tracking-widest text-cream/50">
            <Lock className="mr-1 inline h-3 w-3 text-gold/70" />
            Garantia de 30 dias · Acesso imediato
          </p>
        </div>
        
          href={checkoutUrl}
          className="group flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-[#e6c178] to-[#c8a35c] px-6 py-3.5 font-sans text-sm font-extrabold uppercase tracking-wide text-ink-900 shadow-[0_12px_30px_-8px_rgba(200,163,92,0.55)] transition-all hover:-translate-y-0.5 sm:flex-none sm:px-10"
        >
          {label}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>,
    document.body
  );
}
