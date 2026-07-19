import { Star } from 'lucide-react';

export interface Testimonial {
  quote: string;
  name: string;
  age: number;
  city: string;
}

interface TestimonialsProps {
  items: Testimonial[];
}

export default function Testimonials({ items }: TestimonialsProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((t, i) => (
        <figure
          key={i}
          className="reveal flex flex-col gap-4 rounded-2xl border border-gold/20 bg-ink-800/70 p-6"
        >
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, s) => (
              <Star key={s} className="h-4 w-4 fill-gold text-gold" />
            ))}
          </div>
          <blockquote className="prose-sales flex-1 !text-[1.02rem] !leading-relaxed">
            "{t.quote}"
          </blockquote>
          <figcaption className="font-sans text-sm font-semibold text-cream/70">
            <span className="text-gold">{t.name}</span>, {t.age} anos — {t.city}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
