import { Target, ArrowRight, Flame, Eye, Zap, AlertTriangle, ArrowUp, Bed } from 'lucide-react';
import OfferCard from '../components/OfferCard';
import Countdown from '../components/Countdown';
import YesNoCTAs from '../components/YesNoCTAs';
import Guarantee from '../components/Guarantee';
import StickyCTA from '../components/StickyCTA';

interface Downsell1Props {
  checkoutUrl: string;
  onNo: () => void;
}

export default function Downsell1({ checkoutUrl, onNo }: Downsell1Props) {
  return (
    <div className="fade-in pb-20">
      <section className="mx-auto max-w-3xl px-4 pb-12 pt-16 text-center">
        <div className="reveal inline-flex items-center gap-2.5 rounded-full border border-gold/40 bg-gold/10 px-5 py-2">
          <Target className="h-4 w-4 text-gold" />
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-gold">
            Última chance — só nesta tela
          </span>
        </div>

        <h1 className="reveal mt-8 font-serif text-4xl font-extrabold leading-[1.1] text-cream sm:text-5xl">
          Espera. Eu entendo por que você disse não.
        </h1>

        <p className="reveal mx-auto mt-6 max-w-2xl font-serif text-xl italic text-gold/90">
          Mas eu não vou te deixar sem o essencial. Porque sem o mapa da caçada, a
          aura que você acabou de comprar vai te deixar exatamente onde está hoje.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-4">
        <div className="prose-sales reveal">
          <p>
            Talvez R$ 97 tenha parecido muito agora. Talvez você esteja pensando
            "eu só quero a aura, já tá bom". <strong>Eu respeito isso.</strong>
          </p>
          <p>
            Mas preciso ser honesto com você — <strong>brutalmente honesto.</strong>
          </p>
          <p>
            A aura que você acabou de comprar vai funcionar. As mulheres vão te
            olhar. Os pescoços vão virar. Você vai sentir o poder. Mas sem saber o
            que fazer depois do olhar, você vai ser o cara mais magnético do bar...
            <em> que vai pra casa sozinho.</em>
          </p>
          <p>
            <strong>83% dos homens que compram produtos de atração nunca transam
            por causa deles.</strong> Não porque o produto não funciona. Porque
            ninguém te ensinou os 7 passos entre o olhar e a cama.
          </p>
          <p>
            Eu não vou deixar você ser mais um desses 83%.
          </p>
          <p>
            Então vou fazer o seguinte: <em>leve só o núcleo</em> — os 7 passos do
            olhar até a cama, sem os dois bônus de isolamento e beijo. O protocolo
            principal, enxuto, por <strong>menos da metade</strong> do preço
            anterior.
          </p>
          <p>
            <strong>Só nesta tela. Só agora.</strong> Se você sair, ela some. E você
            vai sentir o olhar delas — e não vai saber o que fazer. Igual a hoje.
          </p>
        </div>
      </section>

      <section className="mx-auto my-12 max-w-5xl px-4">
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            {
              icon: Eye,
              t: 'Sem o passo 1',
              d: 'Ela olha. Você congela. O momento passa. Ela volta pro celular. Você volta pra casa. Sozinho. Igual a ontem.',
            },
            {
              icon: Zap,
              t: 'Sem o passo 3',
              d: 'Vocês conversam. Mas você não sabe isolar. Ela vai embora com as amigas. "Foi legal conhecer você." Fim.',
            },
            {
              icon: Flame,
              t: 'Sem o passo 5',
              d: 'Vocês estão a sós. Mas você não sabe quando beijar. O clima esfria. A janela fecha. Ela vai embora.',
            },
            {
              icon: Bed,
              t: 'Sem o passo 7',
              d: 'O beijo aconteceu. Mas você não sabe conduzir. A noite termina ali. O desejo morre. Ela não volta.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="reveal rounded-2xl border border-gold/20 bg-ink-800/60 p-7"
            >
              <item.icon className="h-7 w-7 text-gold" />
              <h3 className="mt-3 font-serif text-2xl font-bold text-cream">{item.t}</h3>
              <p className="prose-sales mt-2 !text-[1.05rem] !leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-12">
        <OfferCard>
          <div className="text-center">
            <p className="font-serif text-lg italic text-cream/70">
              O Mapa Da Caçada — versão essencial (7 passos, sem bônus)
            </p>
            <p className="mt-3 font-serif text-sm text-cream/50">
              De <span className="line-through">R$ 197</span> por apenas
            </p>
            <p className="mt-1 font-serif text-6xl font-extrabold gold-text sm:text-7xl">
              R$ 47
            </p>
            <p className="mt-2 font-sans text-sm font-medium uppercase tracking-widest text-cream/60">
              Pagamento único · Acesso imediato · Vitalício
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <Countdown from={4 * 60 + 59} />
          </div>
        </OfferCard>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-8">
        <Guarantee />
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-12">
        <div className="prose-sales reveal mx-auto max-w-2xl text-center">
          <p>
            Você comprou a aura por R$ 37. Ela vai te fazer ser notado. Mas por
            <strong> mais R$ 47</strong> — menos que uma pizza — você aprende a
            transformar cada olhar em uma noite. A escolha é simples: ser olhado, ou
            <em> levar pra casa.</em>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-20">
        <YesNoCTAs
          checkoutUrl={checkoutUrl}
          onNo={onNo}
          yesLabel="Sim, Quero a Versão Essencial Por R$ 47"
          noLabel="Não, obrigado. Eu aceito que vou travar quando elas olharem — e vou pra casa sozinho. Igual a hoje."
        />

        <p className="reveal mt-8 flex items-center justify-center gap-2 text-center font-serif text-sm italic text-gold/70">
          <ArrowRight className="h-4 w-4" />
          Esta oferta não aparece de novo em nenhuma página do produto.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-20 text-center">
        <div className="reveal flex flex-col items-center gap-3 rounded-2xl border border-gold/20 bg-ink-800/40 p-8">
          <Flame className="h-6 w-6 text-gold" />
          <p className="font-serif text-xl italic text-gold/90">
            R$ 47 pra nunca mais travar. Ou R$ 0 pra continuar sendo olhado e ir
            dormir sozinho. A matemática é sua.
          </p>
          <div className="mt-4 flex items-center gap-2 text-cream/50">
            <ArrowUp className="h-4 w-4 animate-bounce" />
            <span className="font-sans text-xs uppercase tracking-widest">
              Role para cima e decida
            </span>
          </div>
        </div>
      </section>

    

      <StickyCTA checkoutUrl={checkoutUrl} label="Adicionar Por R$ 47" />
    </div>
  );
}
