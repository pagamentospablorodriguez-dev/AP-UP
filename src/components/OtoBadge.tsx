import { Flame } from 'lucide-react';

interface OtoBadgeProps {
  label?: string;
}

export default function OtoBadge({
  label = 'Oferta Única — Só Aparece Uma Vez',
}: OtoBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2.5 rounded-full border border-gold/40 bg-gold/10 px-5 py-2">
      <Flame className="h-4 w-4 text-gold" />
      <span className="font-sans text-xs font-bold uppercase tracking-widest text-gold">
        {label}
      </span>
    </div>
  );
}
