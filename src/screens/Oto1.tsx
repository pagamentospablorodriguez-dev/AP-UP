import { Flame, Headphones, Volume2, AlertTriangle, ArrowUp } from 'lucide-react';
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

interface Oto1Props {
  checkoutUrl: string;
  onNo: () => void;
}

const testimonials: Testimonial[] = [
  {
    quote:
      'No terceiro dia escutando no trânsito, uma mulher parou no meio da calçada e ficou me olhando. Eu não disse nada. Ela só ficou. Eu senti que era o áudio.',
    name: 'R. M.',
    age: 34,
    city: 'São Paulo, SP',
  },
  {
    quote:
      'Eu achei que era papo furado. Escutei antes de sair pro trabalho. Na padaria, a atendente veio conversar do nada. Depois no elevador, a mesma coisa. Tem algo nesse som.',
    name: 'A. C.',
    age: 29,
    city: 'Belo Horizonte, MG',
  },
  {
    quote:
      'A versão noturna é a que mais me pegou. Durmo com ela. Acordo diferente — mais leve, mais firme. As pessoas reparam. Não é coisa da minha cabeça.',
    name: 'J. T.',
    age: 41,
    city: 'Curitiba, PR',
  },
  {
    quote:
      'O protocolo sozinho já funciona, mas demora. Com o áudio, em 4 dias eu senti a diferença. Sem ele, eu ainda estaria esperando.',
    name: 'L. F.',
    age: 37,
    city: 'Porto Alegre, RS',
  },
];

const deliverables: Deliverable[] = [
  {
    title: 'Áudio Principal — OM KROOM LINGAYA OM (9 minutos)',
    description:
      'O mantra indiano ancestral entoado em frequência específica que ativa o chakra sacral. Escute com fones de ouvido durante o dia — no trânsito, caminhando, antes de sair de casa. A energia muda antes de você terminar de ouvir.',
    value: 'R$ 97',
  },
  {
    title: 'Bônus 1 — Versão Noturna (11 minutos)',
    description:
      'A mesma frequência, calibrada para escutar antes de dormir. Ancora a energia durante o sono, enquanto o corpo repousa. Você acorda diferente — mais firme, mais presente.',
    value: 'R$ 47',
  },
  {
    title: 'Bônus 2 — Campo Energético (5 minutos)',
    description:
      'Versão curta para escutar 1 minuto antes de entrar em qualquer ambiente — festa, reunião, elevador. Cria o campo magnético antes de você abrir a porta.',
    value: 'R$ 53',
  },
];

const faq: FaqItem[] = [
  {
    q: 'Isso é seguro? Tem risco?',
    a: 'É um áudio de meditação com um mantra ancestral. Você só escuta com fones de ouvido. Não há substância, não há ritual invasivo. O risco é zero — e você tem 30 dias de garantia para testar.',
  },
  {
    q: 'Funciona mesmo? Em quanto tempo eu sinto?',
    a: 'A maioria dos homens relata os primeiros olhares entre o 2º e o 5º dia. Alguns sentem no primeiro dia. Depende do quanto você escuta e da sua sensibilidade. Mas o efeito é cumulativo — quanto mais usa, mais sólido fica.',
  },
  {
    q: 'Eu já comprei o protocolo. Preciso disso?',
    a: 'O protocolo é o mapa. O áudio é o carro. Sem o áudio, você chega — mas demora semanas. Com o áudio, você chega em dias. É o complemento natural, óbvio, quase obrigatório.',
  },
  {
    q: 'E se não funcionar comigo?',
    a: 'Você tem 30 dias. Se não sentir diferença, escreva um e-mail e devolvemos cada centavo. Sem perguntas, sem burocracia. Todo o risco é nosso.',
  },
];

export default function Oto1({ checkoutUrl, onNo }: Oto1Props) {
  return (
    <div className="fade-in">
      <TransitionBar />

      <section className="mx-auto max-w-4xl px-4 pb-16 pt-12 text-center sm:pt-16">
        <div className="reveal flex justify-center">
          <OtoBadge />
        </div>

        <h1 className="reveal mt-8 font-serif text-4xl font-extrabold leading-[1.1] text-cream sm:text-5xl md:text-6xl">
          O Botão De Ativar Que Você Acabou De Esquecer De Apertar
        </h1>

        <p className="reveal mx-auto mt-6 max-w-2xl font-serif text-xl italic text-gold/90">
          Existe um som antigo que liga o chakra sacral em 9 minutos — e as mulheres
          sentem antes de você terminar de ouvir.
        </p>

        <div className="reveal mt-8 flex justify-center">
          <Countdown />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4">
        <HeroImage
          src="https://images.pexels.com/photos/16122118/pexels-photo-16122118.jpeg"
          alt="Homem confiante caminhando na cidade à noite"
          caption="O pescoço vira antes dela perceber que virou."
          className="min-h-[440px] sm:min-h-[540px]"
        />
      </section>

      <SectionDivider label="A origem" />

      <section className="mx-auto max-w-3xl px-4">
        <div className="prose-sales reveal">
          <p>
            Você acabou de comprar o <strong>Código da Aura Predadora</strong>. Bom.
            Você tomou a decisão certa. Mas existe um detalhe que quase ninguém te
            conta — e que separa o homem que <em>vê a aura funcionar</em> daquele que
            lê o protocolo, acha bonito, e segue igual.
          </p>
          <p>
            O protocolo é o <strong>mapa</strong>. Ele te diz para onde ir. Mas o
            mapa não te leva até lá. O que te leva é um som — um mantra indiano
            ancestral, <em>OM KROOM LINGAYA OM</em>, entoado em uma frequência
            específica que ativa o chakra sacral, o centro da energia masculina.
          </p>
          <p>
            Esse conhecimento não está no Google. Não está no YouTube. Ele foi
            guardado por séculos em linhagens tântricas do norte da Índia —
            passado de boca a ouvido, de mestre a discípulo. O que ele faz é
            simples: <strong>acorda o fogo que dorme na base da sua coluna</strong>.
            E quando esse fogo acorda, algo muda no seu campo magnético. As mulheres
            <em> sentem</em>. Não pensam, não decidem — <em>sentem</em>.
          </p>
          <p>
            Sem o áudio, o protocolo leva semanas para gerar o mesmo efeito. Com o
            áudio, os primeiros olhares começam em <strong>dias</strong>. Às vezes
            em horas. É a diferença entre ler sobre fogo e segurar o fósforo.
          </p>
        </div>
      </section>

      <SectionDivider label="O que acontece quando você escuta" />

      <section className="mx-auto max-w-5xl px-4">
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            {
              n: '01',
              t: 'Olhares na rua',
              d: 'Mulheres viram o pescoço quando você passa. Não sabem por que olharam — só olharam.',
            },
            {
              n: '02',
              t: 'Energia no ambiente',
              d: 'Você entra num lugar e o clima muda. As pessoas te notam antes de você falar qualquer coisa.',
            },
            {
              n: '03',
              t: 'Voz mais firme',
              d: 'O som da sua voz desce, fica mais grave, mais segura. Sem esforço — o corpo se ajusta sozinho.',
            },
            {
              n: '04',
              t: 'Presença sem palavras',
              d: 'Você senta em silêncio e ainda assim domina a mesa. A aura fala por você.',
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

      <SectionDivider label="Quem já escutou" />

      <section className="mx-auto max-w-5xl px-4">
        <Testimonials items={testimonials} />
      </section>

      <SectionDivider label="O que você recebe" />

      <section className="mx-auto max-w-3xl px-4">
        <div className="reveal mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5">
          <Headphones className="h-4 w-4 text-gold" />
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-gold">
            3 áudios · Acesso imediato
          </span>
        </div>
        <DeliverablesList items={deliverables} />

        <div className="reveal mt-8 rounded-xl border border-gold/20 bg-ink-800/40 p-6 text-center">
          <p className="font-serif text-lg text-cream/80">
            Valor real somado:{' '}
            <span className="line-through text-cream/50">R$ 197</span>{' '}
            <span className="ml-2 font-bold text-gold">— você economiza R$ 150</span>
          </p>
        </div>
      </section>

      <SectionDivider label="A oferta" />

      <section className="mx-auto max-w-3xl px-4">
        <OfferCard>
          <div className="text-center">
            <p className="font-serif text-lg italic text-cream/70">
              De <span className="line-through">R$ 197</span> por apenas
            </p>
            <p className="mt-2 font-serif text-6xl font-extrabold gold-text sm:text-7xl">
              R$ 47
            </p>
            <p className="mt-2 font-sans text-sm font-medium uppercase tracking-widest text-cream/60">
              Pagamento único · Acesso imediato · Vitalício
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <Spots />
          </div>

          <div className="mt-8 flex justify-center">
            <Countdown />
          </div>
        </OfferCard>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12">
        <Guarantee />
      </section>

      <SectionDivider label="A decisão" />

      <section className="mx-auto max-w-3xl px-4 pb-12">
        <div className="prose-sales reveal mx-auto max-w-2xl text-center">
          <p>
            Você acabou de tomar a decisão de ativar sua aura.{' '}
            <strong>Não pare no meio do caminho.</strong> O homem que decide,
            decide até o fim. Esta tela só existe uma vez. Quando você clicar em
            qualquer botão, ela some para sempre — e o áudio não estará à venda em
            nenhuma página do produto.
          </p>
        </div>

        <div className="mt-10">
          <YesNoCTAs
            checkoutUrl={checkoutUrl}
            onNo={onNo}
            yesLabel="Sim, Adicione o Áudio de Ativação Sacral ao Meu Pedido"
          />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-16">
        <FaqAccordion items={faq} />
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-20 text-center">
        <div className="reveal flex flex-col items-center gap-3 rounded-2xl border border-gold/20 bg-ink-800/40 p-8">
          <Volume2 className="h-6 w-6 text-gold" />
          <p className="font-serif text-xl italic text-gold/90">
            Lembre-se: quando você sair desta tela, o Áudio de Ativação Sacral some
            para sempre.
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
          Conteudo esotérico · Não substitui acompanhamento profissional
        </p>
      </div>
    </div>
  );
}
