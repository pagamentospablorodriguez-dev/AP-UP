import { Crown, Flame, Zap, ArrowUp, AlertTriangle, Star } from 'lucide-react';
import TransitionBar from '../components/TransitionBar';
import OtoBadge from '../components/OtoBadge';
import HeroImage from '../components/HeroImage';
import Countdown from '../components/Countdown';
import Spots from '../components/Spots';
import SectionDivider from '../components/SectionDivider';
import Testimonials, { type Testimonial } from '../components/Testimonials';
import DeliverablesList, { type Deliverable } from '../components/DeliverablesList';
import OfferCard from '../components/OfferCard';
import Guarantee from '../components/Guarantee';
import FaqAccordion, { type FaqItem } from '../components/FaqAccordion';
import YesNoCTAs from '../components/YesNoCTAs';
import StickyCTA from '../components/StickyCTA';

interface Oto2Props {
  checkoutUrl: string;
  onNo: () => void;
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Cara, eu já estava indo pra cama com mulheres por causa da aura. Mas eu era medíocre. Saiam satisfeitas? Não sei. Depois do Protocolo Da Dominação, uma me ligou no dia seguinte pedindo pra repetir. Isso nunca tinha acontecido.',
    name: 'P. H.',
    age: 33,
    city: 'Rio de Janeiro, RJ',
  },
  {
    quote:
      'A parte do orgasmo múltiplo é real. Eu achei que era exagero. Apliquei a técnica e a mina teve o primeiro orgasmo da vida dela com um homem. Ela chorou. Eu não sabia o que fazer. Hoje ela me procura toda semana.',
    name: 'M. S.',
    age: 37,
    city: 'Brasília, DF',
  },
  {
    quote:
      'Eu era o cara que terminava rápido e fingia que não era isso. Depois do protocolo de controle, eu durei 40 minutos na primeira vez que apliquei. Quarenta. Ela ficou em choque. Eu também.',
    name: 'C. R.',
    age: 29,
    city: 'Florianópolis, SC',
  },
  {
    quote:
      'O que mais me pegou foi a parte de ser inesquecível. Eu não queria só transar — queria ser o cara que elas não conseguem esquecer. E funcionou. Tenho uma ex que me liga até hoje, dois anos depois, dizendo que ninguém se compara.',
    name: 'T. A.',
    age: 41,
    city: 'Salvador, BA',
  },
];

const deliverables: Deliverable[] = [
  {
    title: 'O Protocolo Da Dominação — O Manual Da Hora H',
    description:
      'O guia completo de como ser absolutamente excepcional na cama. Técnicas de controle para durar o tempo que quiser. Posições que geram orgasmos em minutos. O mapa do corpo feminino que 97% dos homens desconhecem. Como sair de "ok" pra "inesquecível".',
    value: 'R$ 297',
  },
  {
    title: 'Bônus 1 — O Código Do Orgasmo Múltiplo',
    description:
      'A técnica exata que leva a mulher ao orgasmo — e depois a faz ter outro, e outro. O protocolo que a maioria das mulheres nunca experimentou porque a maioria dos homens não sabe. Depois disso, ela não esquece seu nome.',
    value: 'R$ 97',
  },
  {
    title: 'Bônus 2 — O Controle Predador (controle total da ejaculação)',
    description:
      'O método de 7 dias que reprograma seu corpo pra durar o tempo que você decidir. Sem remédio, sem pomada, sem truque. Controle real, natural, permanente. Acaba com o problema que destrói mais relações do que qualquer outro.',
    value: 'R$ 103',
  },
];

const faq: FaqItem[] = [
  {
    q: 'Eu já sei transar. Preciso disso?',
    a: 'Saber transar e ser excepcional são coisas diferentes. A maioria dos homens acha que é boa de cama. A maioria das mulheres finge orgasmo. Este protocolo te coloca no 3% que faz a mulher perder a noção do tempo. Se você quer ser "ok", não precisa. Se você quer ser inesquecível, precisa.',
  },
  {
    q: 'O controle da ejaculação funciona mesmo?',
    a: 'Funciona. É um método de reprogramação neuromuscular de 7 dias. Sem remédio, sem pomada anestésica, sem truque barato. Controle real, natural, permanente. A maioria dos homens resolve em uma semana.',
  },
  {
    q: 'E se eu for inexperiente?',
    a: 'Melhor. Você não tem vícios pra desaprender. O protocolo te ensina do zero — e te ensina certo desde o primeiro dia. Você nunca vai ser o homem medíocre que a maioria das mulheres já teve.',
  },
  {
    q: 'E se não funcionar comigo?',
    a: '30 dias de garantia incondicional. Se aplicar e não sentir diferença, devolvemos cada centavo. Sem perguntas. Todo o risco é nosso.',
  },
];

export default function Oto2({ checkoutUrl, onNo }: Oto2Props) {
  return (
    <div className="fade-in">
      <TransitionBar message="Você já tem a aura e o mapa da caçada. Mas existe um último segredo — e ele decide se ela volta ou não." />

      <section className="mx-auto max-w-4xl px-4 pb-16 pt-12 text-center sm:pt-16">
        <div className="reveal flex justify-center">
          <OtoBadge label="O Segredo Final — Só Aparece Uma Vez" />
        </div>

        <h1 className="reveal mt-8 font-serif text-4xl font-extrabold leading-[1.1] text-cream sm:text-5xl md:text-6xl">
          Você Conquistou Ela.
          <br />
          <span className="gold-text">Agora Vai Ser Bom O Suficiente Pra Ela Voltar?</span>
        </h1>

        <p className="reveal mx-auto mt-6 max-w-2xl font-serif text-xl italic text-gold/90">
          A aura faz ela olhar. O mapa faz ela ir pra cama. Mas o que acontece na
          cama decide se ela volta — ou se te esquece.
        </p>

        <div className="reveal mt-8 flex justify-center">
          <Countdown />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4">
        <HeroImage
          src="https://images.pexels.com/photos/6800034/pexels-photo-6800034.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Casal em momento íntimo deitado na cama"
          caption="O que você faz na cama não é detalhe. É a diferença entre ser o homem da vida dela e ser mais um."
          className="min-h-[440px] sm:min-h-[540px]"
        />
      </section>

      <SectionDivider label="A verdade brutal" />

      <section className="mx-auto max-w-3xl px-4">
        <div className="prose-sales reveal">
          <p>
            Vou te falar algo que nenhum homem gosta de ouvir. <strong>70% das
            mulheres já fingiram um orgasmo.</strong> E a maioria finge porque o
            homem na cama é <em>medíocre</em> — e ela quer acabar logo.
          </p>
          <p>
            Você pode ter a aura mais potente do mundo. Pode ter o mapa da caçada
            mais perfeito. Pode levar a mulher mais linda pra cama. Mas se na hora
            H você for como os outros 97% — <strong>rápido, sem técnica, sem
            controle, sem saber tocar</strong> — ela vai sair, fingir que foi bom,
            e <em>nunca mais responder sua mensagem.</em>
          </p>
          <p>
            E o pior: ela vai contar pra amigas. E as amigas vão saber. E o nome
            que você construiu com a aura vai ser destruído em uma noite.
          </p>
          <p>
            <strong>A cama é o exame final.</strong> Tudo o que você construiu —
            a aura, o olhar, a aproximação — converge pra esse momento. E é aqui
            que a maioria dos homens falha. Não por falta de vontade. Por falta de{' '}
            <em>conhecimento.</em>
          </p>
        </div>
      </section>

      <SectionDivider label="O que separa os 3% dos 97%" />

      <section className="mx-auto max-w-5xl px-4">
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            {
              icon: Zap,
              t: 'Controle total',
              d: 'Durar o tempo que você decidir. Não o tempo que seu corpo te impõe. O método de 7 dias que reprograma seu controle neuromuscular — sem remédio, sem pomada, sem truque.',
            },
            {
              icon: Flame,
              t: 'Orgasmos múltiplos nela',
              d: 'A técnica que a maioria das mulheres nunca experimentou. Porque a maioria dos homens não sabe. Depois do primeiro, você não para — e ela não consegue parar.',
            },
            {
              icon: Star,
              t: 'Inesquecível',
              d: 'Ser "bom" é fácil. Ser inesquecível é outra coisa. O protocolo te coloca no nível onde ela conta pra amigas — e as amigas ficam curiosas.',
            },
            {
              icon: Crown,
              t: 'Ela volta. Sempre.',
              d: 'O homem que é excepcível na cama não precisa caçar duas vezes. Ela volta. E traz amigas. A cama é o marketing mais poderoso que existe.',
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

      <SectionDivider label="O que acontece quando você aplica" />

      <section className="mx-auto max-w-5xl px-4">
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            {
              n: '01',
              t: 'Você dura o tempo que quer',
              d: 'Sem remédio, sem truque. Controle real. 30, 40, 60 minutos — o tempo que você decidir. Ela nunca mais vai perguntar "já acabou?".',
            },
            {
              n: '02',
              t: 'Ela tem orgasmos que não tinha',
              d: 'A técnica do orgasmo múltiplo faz o que 97% dos homens não conseguem. Ela vai olhar pra você diferente no dia seguinte.',
            },
            {
              n: '03',
              t: 'Ela te procura de novo',
              d: 'Sem você insistir. Sem você mandar mensagem. Ela volta porque a noite foi diferente de tudo que ela já teve. E ela quer de novo.',
            },
            {
              n: '04',
              t: 'O nome se espalha',
              d: 'Ela conta pra amigas. As amigas ficam curiosas. A aura abre a porta — a reputação na cama constrói o império.',
            },
          ].map((item) => (
            <div
              key={item.n}
              className="reveal rounded-2xl border border-gold/20 bg-ink-800/60 p-7"
            >
              <p className="font-serif text-4xl font-extrabold text-gold">{item.n}</p>
              <h3 className="mt-2 font-serif text-2xl font-bold text-cream">{item.t}</h3>
              <p className="prose-sales mt-2 !text-[1.05rem] !leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider label="Quem já dominou" />

      <section className="mx-auto max-w-5xl px-4">
        <Testimonials items={testimonials} />
      </section>

      <SectionDivider label="O que você recebe" />

      <section className="mx-auto max-w-3xl px-4">
        <div className="reveal mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5">
          <Crown className="h-4 w-4 text-gold" />
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-gold">
            1 protocolo + 2 bônus · Acesso imediato
          </span>
        </div>
        <DeliverablesList items={deliverables} />

        <div className="reveal mt-8 rounded-xl border border-gold/20 bg-ink-800/40 p-6 text-center">
          <p className="font-serif text-lg text-cream/80">
            Valor real somado:{' '}
            <span className="line-through text-cream/50">R$ 497</span>{' '}
            <span className="ml-2 font-bold text-gold">— você economiza R$ 300</span>
          </p>
        </div>
      </section>

      <SectionDivider label="A oferta" />

      <section className="mx-auto max-w-3xl px-4">
        <OfferCard>
          <div className="text-center">
            <p className="font-serif text-lg italic text-cream/70">
              De <span className="line-through">R$ 497</span> por apenas
            </p>
            <p className="mt-2 font-serif text-6xl font-extrabold gold-text sm:text-7xl">
              R$ 197
            </p>
            <p className="mt-3 font-sans text-base font-semibold text-cream/75">
              ou 12x de R$ 20,35
            </p>
            <p className="mt-2 font-sans text-sm font-medium uppercase tracking-widest text-cream/60">
              Pagamento único · Acesso imediato · Vitalício
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <Spots from={7} floor={2} />
          </div>

          <div className="mt-8 flex justify-center">
            <Countdown />
          </div>
        </OfferCard>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12">
        <Guarantee />
      </section>

      <SectionDivider label="A última decisão" />

      <section className="mx-auto max-w-3xl px-4 pb-12">
        <div className="prose-sales reveal mx-auto max-w-2xl text-center">
          <p>
            Você já tem a aura. Já tem o mapa da caçada.{' '}
            <strong>Falta o que decide tudo.</strong> A cama é onde o homem se
            prova ou se queima. Esta é a última tela de oferta do funil. Quando você
            clicar em qualquer botão, ela some. <em>O Protocolo Da Dominação</em> não
            estará à venda em nenhuma página do produto.
          </p>
        </div>

        <div className="mt-10">
          <YesNoCTAs
            checkoutUrl={checkoutUrl}
            onNo={onNo}
            yesLabel="Sim, Quero O Protocolo Da Dominação Por R$ 197"
          />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-16">
        <FaqAccordion items={faq} />
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-20 text-center">
        <div className="reveal flex flex-col items-center gap-3 rounded-2xl border border-gold/20 bg-ink-800/40 p-8">
          <Crown className="h-6 w-6 text-gold" />
          <p className="font-serif text-xl italic text-gold/90">
            Lembre-se: quando você sair desta tela, O Protocolo Da Dominação some para
            sempre. A aura faz ela olhar. O mapa faz ela ir. Isso faz ela voltar.
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
      <StickyCTA checkoutUrl={checkoutUrl} label="Adicionar Por R$ 197" />
    </div>
  );
}
