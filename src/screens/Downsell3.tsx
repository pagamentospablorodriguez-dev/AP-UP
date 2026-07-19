import { Crown, ArrowRight } from 'lucide-react';
import OfferCard from '../components/OfferCard';
import Countdown from '../components/Countdown';
import YesNoCTAs from '../components/YesNoCTAs';

interface Downsell3Props {
  checkoutUrl: string;
  onNo: () => void;
}

export default function Downsell3({ checkoutUrl, onNo }: Downsell3Props) {
  return (
    <div className="fade-in">
      <section className="mx-auto max-w-3xl px-4 pb-16 pt-16 text-center">
        <div className="reveal inline-flex items-center gap-2.5 rounded-full border border-gold/40 bg-gold/10 px-5 py-2">
          <Crown className="h-4 w-4 text-gold" />
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-gold">
            Última chance — versão simples
          </span>
        </div>

        <h1 className="reveal mt-8 font-serif text-4xl font-extrabold leading-[1.1] text-cream sm:text-5xl">
          Sem os bônus extras. Mas com os 3 mantras.
        </h1>

        <div className="prose-sales reveal mx-auto mt-6 max-w-2xl text-left">
          <p>
            Eu entendo se R$ 197 foi demais agora. <strong>Eu respeito.</strong>{' '}
            Então vou fazer a última versão — a mais enxuta que existe.
          </p>
          <p>
            <em>Os 3 mantras principais</em> — o sacral, o Chamado de Asmodeus, e
            o Mantra da Dominância Silenciosa — <strong>sem os bônus extras</strong>{' '}
            (sem a versão noturna, sem o Campo Energético, sem o Selo estendido,
            sem o Ritual de 7 Dias).
          </p>
          <p>
            Sozinhos, esses 3 mantras já mudam tudo. É a versão enxuta pra quem quer
            o arsenal sem o preço cheio. <strong>Só nesta tela. Só agora.</strong>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-12">
        <OfferCard>
          <div className="text-center">
            <p className="font-serif text-lg italic text-cream/70">
              Arsenal Predador — versão digital simples (3 mantras, sem bônus extras)
            </p>
            <p className="mt-3 font-serif text-sm text-cream/50">
              De <span className="line-through">R$ 197</span> por apenas
            </p>
            <p className="mt-1 font-serif text-6xl font-extrabold gold-text sm:text-7xl">
              R$ 147
            </p>
            <p className="mt-3 font-sans text-base font-semibold text-cream/75">
              ou 12x de R$ 14,70
            </p>
            <p className="mt-2 font-sans text-sm font-medium uppercase tracking-widest text-cream/60">
              Acesso imediato · Vitalício
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <Countdown from={4 * 60 + 59} />
          </div>
        </OfferCard>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-20">
        <YesNoCTAs
          checkoutUrl={checkoutUrl}
          onNo={onNo}
          yesLabel="Sim, Quero a versão simples por R$ 147"
          noLabel="Não, obrigado. Vou seguir só com o que já tenho."
        />

        <p className="reveal mt-8 flex items-center justify-center gap-2 text-center font-serif text-sm italic text-gold/70">
          <ArrowRight className="h-4 w-4" />
          Esta é a última tela de oferta. Depois dela, o arsenal some para sempre.
        </p>
      </section>
    </div>
  );
}
