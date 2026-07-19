import { Flame, Skull, Volume2, AlertTriangle, Zap, ArrowDown } from 'lucide-react';
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

interface Oto2Props {
  checkoutUrl: string;
  onNo: () => void;
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Eu já tinha o sacral. Funcionou. Mas quando escutei o Asmodeus, foi outro nível. Na mesma semana uma vizinha que nunca me deu bola me chamou pra tomar um vinho. Sem eu fazer nada.',
    name: 'P. H.',
    age: 32,
    city: 'Rio de Janeiro, RJ',
  },
  {
    quote:
      'O ritual de 3 dias do manual é real. No segundo dia eu senti uma pressão no peito, uma energia que eu nunca tinha sentido. As mulheres reparam diferente. É mais pesado, mais direto.',
    name: 'M. S.',
    age: 38,
    city: 'Brasília, DF',
  },
  {
    quote:
      'Usei a versão estendida de 21 minutos antes de uma festa. Eu não precisei abordar ninguém. Elas vinham. Isso nunca tinha acontecido comigo. Tem algo nesse mantra que não é normal.',
    name: 'C. R.',
    age: 27,
    city: 'Florianópolis, SC',
  },
  {
    quote:
      'O sacral é a vela. Asmodeus é o incêndio. Eu senti a diferença em horas, não dias. Mas é forte mesmo — tem que respeitar o que diz no manual.',
    name: 'T. A.',
    age: 44,
    city: 'Salvador, BA',
  },
];

const deliverables: Deliverable[] = [
  {
    title: 'Áudio Principal — O Chamado de Asmodeus (7 minutos)',
    description:
      'O mantra de invocação da energia de Asmodeus, o demônio da luxúria na demonologia clássica. Explosão da energia sexual predadora. Muito mais potente que o sacral — é o nuclear.',
    value: 'R$ 197',
  },
  {
    title: 'Bônus 1 — Selo de Asmodeus (21 minutos)',
    description:
      'Versão estendida para sessões profundas. Escute quando quiser carregar o campo por horas — antes de um evento, de um encontro, de uma noite inteira.',
    value: 'R$ 97',
  },
  {
    title: 'Bônus 2 — O Livro de Asmodeus (PDF, ritual de 3 dias)',
    description:
      'Manual de uso responsável com o ritual completo de 3 dias. O que fazer, quando fazer, o que esperar. Sem ele, o áudio é forte demais para uso sem orientação.',
    value: 'R$ 103',
  },
];

const faq: FaqItem[] = [
  {
    q: 'Isso é seguro? Tem algum risco?',
    a: 'É um áudio de meditação com um mantra de tradição esotérica. Não há substância, não há ritual invasivo. Mas a energia é forte — por isso o manual vem junto, com o ritual de 3 dias. Use como está descrito. E você tem 30 dias de garantia.',
  },
  {
    q: 'Funciona mesmo? Em quanto tempo sinto?',
    a: 'A maioria sente nas primeiras 48 horas. É mais rápido que o sacral — é uma frequência mais densa, mais direta. Mas o efeito só se sustenta com o uso correto descrito no manual.',
  },
  {
    q: 'Eu já comprei o sacral. Preciso deste também?',
    a: 'O OM KROOM acende. Asmodeus explode. São níveis diferentes. Se você quer o máximo, é este. O sacral prepara o terreno; o Asmodeus é o que faz as mulheres reagirem sem você precisar fazer nada.',
  },
  {
    q: 'E se não funcionar comigo?',
    a: 'Você tem 30 dias. Se não sentir a diferença, escreva um e-mail e devolvemos cada centavo. Sem perguntas. Todo o risco é nosso.',
  },
];

export default function Oto2({ checkoutUrl, onNo }: Oto2Props) {
  return (
    <div className="fade-in">
      <TransitionBar message="Você já ativou o sacral. Mas existe um nível acima — e ele só aparece nesta tela." />

      <section className="mx-auto max-w-4xl px-4 pb-16 pt-12 text-center sm:pt-16">
        <div className="reveal flex justify-center">
          <OtoBadge label="Nível Avançado — Só Aparece Uma Vez" />
        </div>

        <h1 className="reveal mt-8 font-serif text-4xl font-extrabold leading-[1.1] text-cream sm:text-5xl md:text-6xl">
          O Protocolo Que Você Comprou Acende A Aura.
          <br />
          <span className="gold-text">Isto Aqui É O Combustível Que Faz Ela Explodir.</span>
        </h1>

        <p className="reveal mx-auto mt-6 max-w-2xl font-serif text-xl italic text-gold/90">
          O Chamado de Asmodeus — a energia mais predadora que um homem pode carregar.
        </p>

        <div className="reveal mt-8 flex justify-center">
          <Countdown />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4">
        <HeroImage
          src="https://images.pexels.com/photos/1755385/pexels-photo-1755385.jpeg"
          alt="Mulher elegante de vestido preto olhando à noite"
          caption="Ela não decide te olhar. Ela só te olha. E não sabe explicar por quê."
          className="min-h-[440px] sm:min-h-[540px]"
        />
      </section>

      <SectionDivider label="A origem" />

      <section className="mx-auto max-w-3xl px-4">
        <div className="prose-sales reveal">
          <p>
            Asmodeus não é invenção. Ele aparece na demonologia clássica há séculos —
            descrito como a encarnação da luxúria, a força que <em>distorce o desejo
            feminino</em>. O que poucos sabem é que essa mesma força pode ser{' '}
            <strong>invocada, e não para dominar ninguém</strong> — mas para acender,
            dentro de você, a energia que faz as mulheres virem até você.
          </p>
          <p>
            O mantra do Chamado de Asmodeus é diferente do OM KROOM. Ele não acorda
            o fogo devagar. Ele <em>explode</em>. É uma frequência mais densa, mais
            direta, mais antiga. Quando você escuta, sente no corpo — uma pressão no
            peito, um calor na base da coluna, uma firmeza que não estava ali antes.
          </p>
          <p>
            <strong>Esse conhecimento não está no Google.</strong> Não está em
            canal nenhum. Ele foi extraído de textos esotéricos raros e calibrado
            em uma frequência audível que qualquer homem pode usar — com fones de
            ouvido, 7 minutos por dia, durante 3 dias seguidos.
          </p>
          <p>
            O resultado é o seguinte: você não precisa abordar, não precisa forçar,
            não precisa jogar conversa. As mulheres <em>reagem</em>. Elas olham,
            se aproximam, procuram conversa. Sem você fazer nada além de estar no
            ambiente. É a diferença entre caçar e ser o ímã.
          </p>
        </div>
      </section>

      <SectionDivider label="Aviso" />

      <section className="mx-auto max-w-3xl px-4">
        <div className="reveal flex items-start gap-4 rounded-2xl border border-gold/30 bg-gold/5 p-6">
          <AlertTriangle className="mt-1 h-6 w-6 shrink-0 text-gold" />
          <p className="prose-sales !text-[1.05rem] !leading-relaxed">
            <strong>Conteúdo avançado.</strong> Use com responsável — a energia é
            forte demais para uso indiscriminado. Por isso o{' '}
            <em>Manual de Uso Responsável</em> vem incluso. Sem ele, o áudio é
            como um motor potente sem volante.
          </p>
        </div>
      </section>

      <SectionDivider label="O que acontece quando você escuta" />

      <section className="mx-auto max-w-5xl px-4">
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            {
              n: '01',
              t: 'Aproximação sem esforço',
              d: 'Elas vêm até você. Sem você abordar, sem você insistir. A energia faz o trabalho que a palavra faria.',
            },
            {
              n: '02',
              t: 'Desejo no olhar',
              d: 'Não é curiosidade — é desejo. O olhar muda. A pupilinha dilata. Você reconhece quando vê.',
            },
            {
              n: '03',
              t: 'Autoridade natural',
              d: 'Você fala e as pessoas escutam. Você pede e as pessoas atendem. Sem gritar, sem forçar.',
            },
            {
              n: '04',
              t: 'Magnetismo sexual',
              d: 'O campo magnético ao seu redor muda. As mulheres sentem antes de você abrir a boca.',
            },
            {
              n: '05',
              t: 'Efeito cumulativo',
              d: 'Quanto mais você escuta (com o ritual), mais sólida a presença fica. Não é pico — é base.',
            },
            {
              n: '06',
              t: 'Sustentação por horas',
              d: 'Com a versão estendida de 21 minutos, o campo dura a noite inteira. Uma festa, um evento, um encontro.',
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

      <SectionDivider label="Quem já chamou Asmodeus" />

      <section className="mx-auto max-w-5xl px-4">
        <Testimonials items={testimonials} />
      </section>

      <SectionDivider label="O que você recebe" />

      <section className="mx-auto max-w-3xl px-4">
        <div className="reveal mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5">
          <Skull className="h-4 w-4 text-gold" />
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-gold">
            1 áudio + 1 áudio bônus + 1 PDF · Acesso imediato
          </span>
        </div>
        <DeliverablesList items={deliverables} />

        <div className="reveal mt-8 rounded-xl border border-gold/20 bg-ink-800/40 p-6 text-center">
          <p className="font-serif text-lg text-cream/80">
            Valor real somado:{' '}
            <span className="line-through text-cream/50">R$ 397</span>{' '}
            <span className="ml-2 font-bold text-gold">— você economiza R$ 300</span>
          </p>
        </div>
      </section>

      <SectionDivider label="A oferta" />

      <section className="mx-auto max-w-3xl px-4">
        <OfferCard>
          <div className="text-center">
            <p className="font-serif text-lg italic text-cream/70">
              De <span className="line-through">R$ 397</span> por apenas
            </p>
            <p className="mt-2 font-serif text-6xl font-extrabold gold-text sm:text-7xl">
              R$ 97
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

      <SectionDivider label="A decisão" />

      <section className="mx-auto max-w-3xl px-4 pb-12">
        <div className="prose-sales reveal mx-auto max-w-2xl text-center">
          <p>
            O OM KROOM acende. Asmodeus explode. <strong>São níveis diferentes.</strong>{' '}
            Se você quer o máximo, é este. Esta tela só aparece uma vez — quando
            você clicar em qualquer botão, ela some. O Chamado de Asmodeus não
            estará à venda em nenhuma página do produto.
          </p>
        </div>

        <div className="mt-10">
          <YesNoCTAs
            checkoutUrl={checkoutUrl}
            onNo={onNo}
            yesLabel="Sim, Adicione o Chamado de Asmodeus ao Meu Pedido"
          />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-16">
        <FaqAccordion items={faq} />
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-20 text-center">
        <div className="reveal flex flex-col items-center gap-3 rounded-2xl border border-gold/20 bg-ink-800/40 p-8">
          <Zap className="h-6 w-6 text-gold" />
          <p className="font-serif text-xl italic text-gold/90">
            Lembre-se: quando você sair desta tela, o Chamado de Asmodeus some para
            sempre.
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
