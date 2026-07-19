import { Check } from 'lucide-react';

export interface Deliverable {
  title: string;
  description: string;
  value?: string;
}

interface DeliverablesListProps {
  items: Deliverable[];
}

export default function DeliverablesList({ items }: DeliverablesListProps) {
  return (
    <ul className="space-y-4">
      {items.map((item, i) => (
        <li key={i} className="reveal flex gap-4">
          <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
            <Check className="h-4 w-4 text-gold" />
          </div>
          <div>
            <p className="font-sans text-lg font-bold text-cream">{item.title}</p>
            <p className="prose-sales !text-[1.05rem] !leading-relaxed">
              {item.description}
            </p>
            {item.value && (
              <p className="mt-1 font-serif text-sm italic text-gold/70">
                Valor real: <span className="line-through">{item.value}</span>
              </p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
