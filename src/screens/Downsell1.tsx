import { Headphones, ArrowRight } from 'lucide-react';
import OfferCard from '../components/OfferCard';
import Countdown from '../components/Countdown';
import YesNoCTAs from '../components/YesNoCTAs';

interface Downsell1Props {
  checkoutUrl: string;
  onNo: () => void;
}

export default function Downsell1({ checkoutUrl, onNo }: Downsell1Props) {
  return (
    <div className="fade-in">
      <section className="mx-auto max-w-3xl px-4 pb-16 pt-16 text-center">
        <div className="reveal inline-flex items-center gap-2.5 rounded-full border border-gold/40 bg-gold/10 px-5 py-2">
          <Headphones className="h-4 w-4 text-gold" />
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-gold">
            Última chance — só nesta tela
          </span>
        </div>

        <h1 className="reveal mt-8 font-serif text-4xl font-extrabold leading-[1.1] text-cream sm:text-5xl">
          Espera. Eu entendo por que você disse não.
        </h1>

        <div className="prose-sales reveal mx-auto mt-6 max-w-2xl text-left">
          <p>
            Talvez os bônus não sejam pra você agora. Talvez o preço tenha parecido
            alto demais pra um complemento. <strong>Eu respeito isso.</strong>
          </p>
          <p>
            Mas eu não quero te deixar sem o áudio que ativa tudo. Sem ele, o
            protocolo que você acabou de comprar leva semanas pra gerar o efeito.
            Com ele, começa em dias. Então vou fazer o seguinte:
          </p>
          <p>
            <em>Leve só o essencial</em> — o áudio principal de 9 minutos, sem os
            bônus, por <strong>menos da metade</strong> do preço anterior. Só nesta
            tela. Só agora. Se você sair, ela some.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-12">
        <OfferCard>
          <div className="text-center">
            <p className="font-serif text-lg italic text-cream/70">
              Áudio OM KROOM LINGAYA OM — versão essencial (9 minutos, sem bônus)
            </p>
            <p className="mt-3 font-serif text-sm text-cream/50">
              De <span className="line-through">R$ 47</span> por apenas
            </p>
            <p className="mt-1 font-serif text-6xl font-extrabold gold-text sm:text-7xl">
              R$ 27
            </p>
            <p className="mt-2 font-sans text-sm font-medium uppercase tracking-widest text-cream/60">
              Pagamento único · Acesso imediato
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
          yesLabel="Sim, quero a versão essencial por R$ 27"
          noLabel="Não, obrigado. Vou seguir só com o protocolo que já comprei."
        />

        <p className="reveal mt-8 flex items-center justify-center gap-2 text-center font-serif text-sm italic text-gold/70">
          <ArrowRight className="h-4 w-4" />
          Esta oferta não aparece de novo em nenhuma página do produto.
        </p>
      </section>
    </div>
  );
}
