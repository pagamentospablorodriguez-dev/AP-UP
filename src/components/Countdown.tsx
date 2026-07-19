import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';

interface CountdownProps {
  /** Total seconds to count down from. */
  from?: number;
  className?: string;
}

function format(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

export default function Countdown({ from = 14 * 60 + 59, className = '' }: CountdownProps) {
  const [seconds, setSeconds] = useState(from);

  useEffect(() => {
    setSeconds(from);
    const id = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(id);
  }, [from]);

  return (
    <div
      className={`inline-flex items-center gap-3 rounded-full border border-gold/40 bg-ink-900/80 px-5 py-2.5 ${className}`}
    >
      <Clock className="h-4 w-4 blink text-gold" />
      <span className="font-sans text-xs font-bold uppercase tracking-widest text-cream/70">
        Esta tela expira em
      </span>
      <span className="font-serif text-lg font-bold tabular-nums text-gold">
        {format(seconds)}
      </span>
    </div>
  );
}
