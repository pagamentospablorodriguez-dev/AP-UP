import { Lock } from 'lucide-react';

interface TransitionBarProps {
  message?: string;
}

export default function TransitionBar({
  message = 'Sua compra do Código da Aura Predadora está confirmada. Mas espere — antes de você acessar, leia isto com atenção.',
}: TransitionBarProps) {
  return (
    <div className="border-b border-gold/20 bg-ink-900/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center gap-3 px-4 py-3 text-center sm:text-left">
        <Lock className="hidden h-4 w-4 shrink-0 text-gold sm:block" />
        <p className="font-sans text-sm text-cream/75">
          <span className="font-bold text-gold">Compra confirmada.</span>{' '}
          {message}
        </p>
      </div>
    </div>
  );
}
