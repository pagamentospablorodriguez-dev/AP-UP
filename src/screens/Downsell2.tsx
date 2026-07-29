import { Crown, ArrowRight, Zap, Flame, Star, AlertTriangle, ArrowUp, Bed } from 'lucide-react';
import OfferCard from '../components/OfferCard';
import Countdown from '../components/Countdown';
import YesNoCTAs from '../components/YesNoCTAs';
import Guarantee from '../components/Guarantee';
import StickyCTA from '../components/StickyCTA';

interface Downsell2Props {
  checkoutUrl: string;
  onNo: () => void;
}

export default function Downsell2({ checkoutUrl, onNo }: Downsell2Props) {
  return (
    <div className="fade-in pb-20">
      <section className="mx-auto max-w-3xl px-4 pb-12 pt-16 text-center">
        <div className="reveal inline-flex items-center gap-2.5 rounded-full border border-gold/40 bg-gold/10 px-5 py-2">
          <Crown className="h-4 w-4 text-gold" />
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-gold">
            Última chance — versão enxuta
          </span>
        </div>

        <h1 className="reveal mt-8 font-serif text-4xl font-extrabold leading-[1.1] text-cream sm:text-5xl">
          Se R$ 197 foi demais agora, eu entendo.
        </h1>

        <p className="reveal mx-auto mt-6 max-w-2xl font-serif text-xl italic text-gold/90">
          Mas a cama é o exame final. E eu não vou te deixar chegar lá pra ser
          medíocre — igual aos outros 97%.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-4">
        <div className="prose-sales reveal">
          <p>
            Eu respeito. R$ 197 é um valor real. Talvez não seja o momento.
            <strong> Eu entendo.</strong>
          </p>
          <p>
            Mas preciso ser brutalmente honesto: <strong>70% das mulheres já
            fingiram um orgasmo.</strong> E a maioria finge porque o homem na cama
            é medíocre — e ela quer acabar logo.
          </p>
          <p>
            Você pode ter a aura. Pode ter o mapa da caçada. Pode levar a mulher pra
            cama. Mas se na hora H você for como os outros 97% — <em>rápido, sem
            técnica, sem controle</em> — ela vai fingir que foi bom, ir pra casa, e
            <strong> nunca mais responder sua mensagem.</strong>
          </p>
          <p>
            E o pior: ela vai contar pra amigas. O nome que você construiu vai
            ser destruído em uma noite.
          </p>
          <p>
            Eu não vou deixar isso acontecer com você. Então vou fazer a última
            versão: <em>leve só o manual principal da Hora H</em> — o protocolo de
            dominação, sem os dois bônus. O núcleo, enxuto, em parcelas que cabem no
            bolso.
          </p>
          <p>
            <strong>Só nesta tela. Só agora.</strong> Se você sair, ela some. E a
            próxima vez que você estiver na cama com uma mulher, você vai desejar
            ter ficado.
          </p>
        </div>
      </section>

      <section className="mx-auto my-12 max-w-5xl px-4">
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            {
              icon: Zap,
              t: 'Sem controle',
              d: 'Você termina em 3 minutos. Ela finge que foi bom. Você sabe que não foi. Ela também sabe. E conta pra amigas.',
            },
            {
              icon: Flame,
              t: 'Sem técnica',
              d: 'Você faz o que todo mundo faz. Ela sente o que todo mundo faz. Nenhum orgasmo. Nenhum motivo pra voltar. Mais um cara medíocre.',
            },
            {
              icon: Star,
              t: 'Sem ser inesquecível',
              d: 'Você é "ok". Ela te esquece em uma semana. O próximo cara que for melhor te apaga da memória dela completamente.',
            },
            {
              icon: Bed,
              t: 'Sem o manual',
              d: 'Você chega na cama preparado pela aura — e falha quando mais importa. A porta abriu. Você tropeçou na soleira.',
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
              O Predador Domina — versão essencial (manual da Hora H, sem bônus)
            </p>
            <p className="mt-3 font-serif text-sm text-cream/50">
              De <span className="line-through">R$ 297</span> por apenas
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

      <section className="mx-auto max-w-3xl px-4 py-8">
        <Guarantee />
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-12">
        <div className="prose-sales reveal mx-auto max-w-2xl text-center">
          <p>
            Você já investiu na aura. Já investiu na caçada. Por <strong>mais
            R$ 67</strong> — menos que um jantar — você garante que quando chegar a
            hora H, você não seja mais um cara medíocre. Você seja o cara que ela
            <em> não consegue esquecer.</em>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-20">
        <YesNoCTAs
          checkoutUrl={checkoutUrl}
          onNo={onNo}
          yesLabel="Sim, Quero a Versão Essencial Por R$ 67"
          noLabel="Não, obrigado. Eu aceito que na hora H vou ser como os outros 97% — e ela vai fingir que foi bom."
        />

        <p className="reveal mt-8 flex items-center justify-center gap-2 text-center font-serif text-sm italic text-gold/70">
          <ArrowRight className="h-4 w-4" />
          Esta é a última tela de oferta. Depois dela, o funil acaba.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-20 text-center">
        <div className="reveal flex flex-col items-center gap-3 rounded-2xl border border-gold/20 bg-ink-800/40 p-8">
          <Crown className="h-6 w-6 text-gold" />
          <p className="font-serif text-xl italic text-gold/90">
            R$ 67 pra ser inesquecível na cama. Ou R$ 0 pra ser mais um cara
            medíocre que ela esquece em uma semana. A escolha é sua.
          </p>
          <div className="mt-4 flex items-center gap-2 text-cream/50">
            <ArrowUp className="h-4 w-4 animate-bounce" />
            <span className="font-sans text-xs uppercase tracking-widest">
              Role para cima e decida
            </span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 pb-10 text-center">
        <p className="reveal flex items-center justify-center gap-2 font-sans text-xs uppercase tracking-widest text-cream/40">
          <AlertTriangle className="h-3.5 w-3.5 text-gold/60" />
          Material educacional · Não substitui acompanhamento profissional
        </p>
      </div>

      <StickyCTA checkoutUrl={checkoutUrl} label="Adicionar Por R$ 67" />
    </div>
  );
}
