import { Skull, ArrowRight } from 'lucide-react';
import OfferCard from '../components/OfferCard';
import Countdown from '../components/Countdown';
import YesNoCTAs from '../components/YesNoCTAs';

interface Downsell2Props {
  checkoutUrl: string;
  onNo: () => void;
}

export default function Downsell2({ checkoutUrl, onNo }: Downsell2Props) {
  return (
    <div className="fade-in">
      <section className="mx-auto max-w-3xl px-4 pb-16 pt-16 text-center">
        <div className="reveal inline-flex items-center gap-2.5 rounded-full border border-gold/40 bg-gold/10 px-5 py-2">
          <Skull className="h-4 w-4 text-gold" />
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-gold">
            Última chance — só nesta tela
          </span>
        </div>

        <h1 className="reveal mt-8 font-serif text-4xl font-extrabold leading-[1.1] text-cream sm:text-5xl">
          Se o preço te assustou, eu entendo.
        </h1>

        <div className="prose-sales reveal mx-auto mt-6 max-w-2xl text-left">
          <p>
            R$ 97 é um valor justo pelo que esse mantra faz — mas talvez não seja
            o momento pra você. <strong>Eu respeito.</strong>
          </p>
          <p>
            Então vou fazer o seguinte: <em>leve só o áudio</em> — o Chamado de
            Asmodeus principal de 7 minutos, sem o Selo estendido, sem o Livro de
            Asmodeus. <strong>Mesma energia, sem os complementos.</strong> E em
            parcelas que cabem no bolso.
          </p>
          <p>
            Só nesta tela. Só agora. Se você sair, ela some.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-12">
        <OfferCard>
          <div className="text-center">
            <p className="font-serif text-lg italic text-cream/70">
              O Chamado de Asmodeus — versão única (só o áudio de 7 minutos)
            </p>
            <p className="mt-3 font-serif text-sm text-cream/50">
              De <span className="line-through">R$ 97</span> por apenas
            </p>
            <p className="mt-1 font-serif text-6xl font-extrabold gold-text sm:text-7xl">
              R$ 67
            </p>
            <p className="mt-3 font-sans text-base font-semibold text-cream/75">
              ou 3x de R$ 23,80
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
          yesLabel="Sim, quero a versão única por R$ 67"
          noLabel="Não, obrigado. Vou seguir só com o que já tenho."
        />

        <p className="reveal mt-8 flex items-center justify-center gap-2 text-center font-serif text-sm italic text-gold/70">
          <ArrowRight className="h-4 w-4" />
          Esta oferta não aparece de novo em nenhuma página do produto.
        </p>
      </section>
    </div>
  );
}
