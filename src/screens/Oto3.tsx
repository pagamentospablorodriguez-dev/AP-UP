import { Crown, Flame, Volume2, AlertTriangle, ArrowDown, Check } from 'lucide-react';
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

interface Oto3Props {
  checkoutUrl: string;
  onNo: () => void;
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Eu tinha dito não pros dois upsells. Quando vi o bundle com o mantra da dominância silenciosa, eu não pensei duas vezes. Os 3 mantras juntos mudaram tudo em uma semana.',
    name: 'G. L.',
    age: 36,
    city: 'Campinas, SP',
  },
  {
    quote:
      'O ritual de 7 dias foi o que sustentou. Sem ele, a energia ia e voltava. Com ele, ficou. Hoje eu entro em qualquer ambiente e sinto o clima mudar. Não é sorte — é o arsenal.',
    name: 'E. N.',
    age: 39,
    city: 'Recife, PE',
  },
  {
    quote:
      'Eu economizei quase 700 reais pegando tudo junto. E ganhei 2 bônus que não existem separado. Melhor decisão que tomei no funil inteiro.',
    name: 'D. M.',
    age: 31,
    city: 'Fortaleza, CE',
  },
  {
    quote:
      'A dominância silenciosa é o mais sutil dos três, mas é o que mais me impressionou. Eu sento, não falo, e as pessoas me tratam diferente. Coisa de outro nível.',
    name: 'F. B.',
    age: 42,
    city: 'Curitiba, PR',
  },
];

const deliverables: Deliverable[] = [
  {
    title: 'Áudio OM KROOM LINGAYA OM (sacral) + seus 2 bônus',
    description:
      'O áudio principal de 9 minutos + a versão noturna de 11 minutos + o Campo Energético de 5 minutos. Tudo do OTO 1, completo.',
    value: 'R$ 197',
  },
  {
    title: 'Áudio O Chamado de Asmodeus + seus 2 bônus',
    description:
      'O áudio principal de 7 minutos + o Selo de Asmodeus de 21 minutos + o Livro de Asmodeus (PDF com o ritual de 3 dias). Tudo do OTO 2, completo.',
    value: 'R$ 397',
  },
  {
    title: 'BÔNUS EXCLUSIVO — Mantra da Dominância Silenciosa (8 minutos)',
    description:
      'Áudio que ativa a presença de quem comanda um ambiente sem falar nada. Não vendido separadamente em nenhuma tela anterior. Só existe aqui, no bundle.',
    value: 'R$ 147',
  },
  {
    title: 'BÔNUS EXCLUSIVO — Ritual de 7 Dias para a Aura Magnética (PDF)',
    description:
      'Guia passo a dia que integra os 3 mantras em uma sequência de 7 dias. Sustenta a energia para além do pico. Só existe aqui.',
    value: 'R$ 150',
  },
];

const faq: FaqItem[] = [
  {
    q: 'Eu já comprei os outros. O que muda com o bundle?',
    a: 'Se você já comprou o sacral e/ou o Asmodeus, o bundle te dá o que faltava — incluindo 2 bônus exclusivos que não existem separado: o Mantra da Dominância Silenciosa e o Ritual de 7 Dias. É o que transforma os áudios isolados em um sistema completo.',
  },
  {
    q: 'É muito dinheiro de uma vez.',
    a: 'Por isso parcelamos em 12x de R$ 19,70 — menos que uma pizza por mês. E você leva tudo, de uma vez, com os 2 bônus exclusivos. Comprar separado custaria R$ 891.',
  },
  {
    q: 'Funciona mesmo? Em quanto tempo sinto?',
    a: 'A maioria relata mudança na primeira semana seguindo o Ritual de 7 Dias. Os 3 mantras combinados criam um efeito que nenhum deles gera sozinho — é o sistema completo.',
  },
  {
    q: 'E se não funcionar comigo?',
    a: '30 dias de garantia incondicional. Se não sentir diferença, devolvemos cada centavo. Sem perguntas, sem burocracia. Todo o risco é nosso.',
  },
];

export default function Oto3({ checkoutUrl, onNo }: Oto3Props) {
  return (
    <div className="fade-in">
      <TransitionBar message="Esta é a última tela de oferta. O bundle completo não existe fora daqui — e ele some quando você sair." />

      <section className="mx-auto max-w-4xl px-4 pb-16 pt-12 text-center sm:pt-16">
        <div className="reveal flex justify-center">
          <OtoBadge label="Bundle Exclusivo — Não Existe Fora Daqui" />
        </div>

        <h1 className="reveal mt-8 font-serif text-4xl font-extrabold leading-[1.1] text-cream sm:text-5xl md:text-6xl">
          Você Está A 1 Decisão De Ter O{' '}
          <span className="gold-text">Arsenal Predador Completo</span>
          <br />
          Por Menos De Um Terço Do Preço
        </h1>

        <p className="reveal mx-auto mt-6 max-w-2xl font-serif text-xl italic text-gold/90">
          Todos os mantras juntos — mais 2 bônus exclusivos que não são vendidos
          separadamente em nenhuma tela anterior.
        </p>

        <div className="reveal mt-8 flex justify-center">
          <Countdown />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4">
        <HeroImage
          src="https://images.pexels.com/photos/12306262/pexels-photo-12306262.jpeg"
          alt="Homem de terno escuro em ambiente urbano noturno"
          caption="O homem que tem o arsenal não precisa escolher. Ele carrega tudo."
          className="min-h-[440px] sm:min-h-[540px]"
        />
      </section>

      <SectionDivider label="A matemática" />

      <section className="mx-auto max-w-3xl px-4">
        <div className="prose-sales reveal">
          <p>
            Se você comprasse cada mantra separado — o sacral, o Asmodeus, e todos
            os bônus — você pagaria <strong>R$ 891</strong>. É a soma real de tudo,
            sem desconto.
          </p>
          <p>
            Aqui, nesta única tela, você leva <em>tudo junto</em> por{' '}
            <strong>R$ 197</strong>. Você economiza <strong>R$ 694</strong> — e
            ainda ganha <em>2 bônus que não existem fora daqui</em>: o Mantra da
            Dominância Silenciosa e o Ritual de 7 Dias para a Aura Magnética.
          </p>
          <p>
            Este bundle <strong>não existe fora desta tela</strong>. Se você sair,
            ele some. Não estará à venda em nenhuma página do produto. É a última
            chance de pegar tudo, com desconto, e com os exclusivos.
          </p>
        </div>
      </section>

      <SectionDivider label="O que vem no arsenal" />

      <section className="mx-auto max-w-3xl px-4">
        <div className="reveal mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5">
          <Crown className="h-4 w-4 text-gold" />
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-gold">
            3 mantras + 4 bônus · Acesso imediato
          </span>
        </div>
        <DeliverablesList items={deliverables} />

        <div className="reveal mt-8 rounded-xl border border-gold/20 bg-ink-800/40 p-6 text-center">
          <p className="font-serif text-lg text-cream/80">
            Comprando separado:{' '}
            <span className="line-through text-cream/50">R$ 891</span>
          </p>
          <p className="mt-2 font-serif text-2xl font-bold text-gold">
            Aqui, tudo junto: R$ 197 · Você economiza R$ 694
          </p>
        </div>
      </section>

      <SectionDivider label="Por que o bundle converte mais" />

      <section className="mx-auto max-w-5xl px-4">
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            {
              n: '01',
              t: 'Efeito sistema, não pico',
              d: 'Os 3 mantras combinados criam uma presença que nenhum deles gera sozinho. O sacral acende, Asmodeus explode, a dominância silenciosa sustenta.',
            },
            {
              n: '02',
              t: 'O ritual de 7 dias muda tudo',
              d: 'Sem ele, a energia vai e volta. Com ele, fica. É o guia que integra os 3 mantras em uma sequência que sustenta o resultado.',
            },
            {
              n: '03',
              t: '2 bônus que não existem fora',
              d: 'O Mantra da Dominância Silenciosa e o Ritual de 7 Dias não são vendidos separados em nenhuma tela. Só aqui.',
            },
            {
              n: '04',
              t: 'Economia de R$ 694',
              d: 'Comprar separado custa R$ 891. Aqui, R$ 197. É menos da terça parte — e você leva mais.',
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

      <SectionDivider label="Quem pegou o arsenal" />

      <section className="mx-auto max-w-5xl px-4">
        <Testimonials items={testimonials} />
      </section>

      <SectionDivider label="A oferta" />

      <section className="mx-auto max-w-3xl px-4">
        <OfferCard>
          <div className="text-center">
            <p className="font-serif text-lg italic text-cream/70">
              De <span className="line-through">R$ 891</span> por apenas
            </p>
            <p className="mt-2 font-serif text-6xl font-extrabold gold-text sm:text-7xl">
              R$ 197
            </p>
            <p className="mt-3 font-sans text-base font-semibold text-cream/75">
              ou 12x de R$ 19,70
            </p>
            <p className="mt-2 font-sans text-sm font-medium uppercase tracking-widest text-cream/60">
              Acesso imediato · Vitalício · Todos os mantras + 4 bônus
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <Spots from={6} floor={2} />
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
            Daqui a 30 dias você pode estar com o arsenal completo — ou pode estar do
            mesmo jeito que está hoje, só tendo perdido esta tela.{' '}
            <strong>Esta é a última oferta do funil.</strong> O bundle não existe fora
            daqui. Quando você clicar em qualquer botão, ele some para sempre.
          </p>
        </div>

        <div className="mt-10">
          <YesNoCTAs
            checkoutUrl={checkoutUrl}
            onNo={onNo}
            yesLabel="Sim, Quero o Arsenal Predador Completo por R$ 197"
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
            Lembre-se: este bundle NÃO existe fora desta tela. Se você sair, ele
            some para sempre.
          </p>
          <div className="mt-4 flex items-center gap-2 text-cream/50">
            <ArrowDown className="h-4 w-4 animate-bounce" />
            <span className="font-sans text-xs uppercase tracking-widest">
              Role para cima e decida
            </span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 pb-10 text-center">
        <p className="reveal flex items-center justify-center gap-2 font-sans text-xs uppercase tracking-widest text-cream/40">
          <AlertTriangle className="h-3.5 w-3.5 text-gold/60" />
          Conteúdo esotérico · Não substitui acompanhamento profissional
        </p>
      </div>
    </div>
  );
}
