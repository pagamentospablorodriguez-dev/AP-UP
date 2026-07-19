import type { ReactNode } from 'react';
import { Lock, Check } from 'lucide-react';
import CTAButton from './CTAButton';

interface YesNoCTAsProps {
  /** URL de checkout para onde o SIM leva. */
  checkoutUrl: string;
  yesLabel: ReactNode;
  yesMicrocopy?: string;
  noLabel?: string;
  onNo: () => void;
}

export default function YesNoCTAs({
  checkoutUrl,
  yesLabel,
  yesMicrocopy = 'Acesso imediato · Garantia de 30 dias',
  noLabel = 'Não, obrigado. Prefiro ficar só com o que já comprei e entendo que esta oferta não vai aparecer de novo.',
  onNo,
}: YesNoCTAsProps) {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center gap-6">
      <CTAButton href={checkoutUrl} microcopy={yesMicrocopy} className="!text-base sm:!text-lg">
        {yesLabel}
      </CTAButton>

      <div className="flex flex-col items-center gap-2">
        <button
          onClick={onNo}
          className="max-w-md text-center font-sans text-sm font-medium text-cream/40 underline-offset-4 transition-colors hover:text-cream/70 hover:underline"
        >
          {noLabel}
        </button>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] font-medium uppercase tracking-widest text-cream/45">
        <span className="inline-flex items-center gap-1.5">
          <Lock className="h-3.5 w-3.5 text-gold/70" /> Compra 100% segura
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Check className="h-3.5 w-3.5 text-gold/70" /> Pix, cartão e boleto
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Check className="h-3.5 w-3.5 text-gold/70" /> Acesso imediato
        </span>
      </div>
    </div>
  );
}
