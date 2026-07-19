import { useEffect, useState } from 'react';
import { Flame } from 'lucide-react';

interface SpotsProps {
  /** Initial spots count. */
  from?: number;
  /** Minimum floor it never goes below. */
  floor?: number;
  /** Interval in ms between decrements. */
  intervalMs?: number;
}

export default function Spots({
  from = 9,
  floor = 3,
  intervalMs = 42000,
}: SpotsProps) {
  const [spots, setSpots] = useState(from);

  useEffect(() => {
    setSpots(from);
    const id = setInterval(() => {
      setSpots((prev) => (prev > floor ? prev - 1 : floor));
    }, intervalMs);
    return () => clearInterval(id);
  }, [from, floor, intervalMs]);

  return (
    <div className="inline-flex items-center gap-2.5 rounded-full border border-gold/30 bg-gold/5 px-4 py-2">
      <Flame className="h-4 w-4 text-gold" />
      <span className="font-sans text-sm font-semibold text-cream/85">
        Restam <span className="font-serif text-base font-bold text-gold">{spots}</span> vagas com este valor.
      </span>
    </div>
  );
}
