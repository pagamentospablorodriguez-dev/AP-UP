import { Flame, Target, Eye, ArrowUp, AlertTriangle, Zap, Bed } from 'lucide-react';
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

interface Oto1Props {
  checkoutUrl: string;
  onNo: () => void;
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Cara, eu tinha a aura funcionando. Mulher me olhava no bar, na academia, no elevador. Mas eu travava igual um idiota. Aplicando o passo 5, na mesma semana eu fechei com uma mina que me olhava há meses. Eu sentia o olhar dela — só não tinha ideia de como transformar em cama. Agora tenho.',
    name: 'R. M.',
    age: 31,
    city: 'São Paulo, SP',
  },
  {
    quote:
      'O material da aura mudou meu jogo. Mas o Mapa Da Caçada me ensinou o que nenhum cara te ensina: como sair do olhar e ir pra cama. A parte do isolamento é cirúrgica. Eu tirei uma mina de dentro de um grupo de 6 amigas sem ela sequer perceber que eu estava conduzindo. Noite seguinte, na minha casa.',
    name: 'A. C.',
    age: 28,
    city: 'Belo Horizonte, MG',
  },
  {
    quote:
      'Eu era o cara que a mulher olhava, sorria, e eu deixava escapar. TODA vez. Apliquei o passo a passo e na terceira semana uma mina me abordou no elevador. Eu só conduzi. Ela foi a primeira de muitas. Eu perdi anos da minha vida sendo olhado e indo dormir sozinho.',
    name: 'J. T.',
    age: 35,
    city: 'Curitiba, PR',
  },
  {
    quote:
      'O que mais me quebrou foi a parte de como acelerar sem assustar. Eu sempre perdia — ou por demorar demais e virar amigo, ou por apressar e assustar. Esse método te dá o tempo exato. Hoje eu não fico mais na vontade. Eu fecho. E volto pra casa com ela.',
    name: 'L. F.',
    age: 39,
    city: 'Porto Alegre, RS',
  },
];

const deliverables: Deliverable[] = [
  {
    title: 'O Mapa Da Caçada — Os 7 Passos Do Olhar Até A Cama',
    description:
      'O protocolo completo, passo a passo, que te leva do instante em que ela te olha até o instante em que a porta do quarto fecha. O que fazer. O que dizer. O que NUNCA fazer. Sem teoria, sem "seja você mesmo" — só execução bruta.',
    value: 'R$ 197',
  },
  {
    title: 'Bônus 1 — O Protocolo Do Isolamento',
    description:
      'Como arrancar a mulher do grupo, do barulho, da frente das amigas, e levá-la pra um lugar onde só existem vocês dois. O passo onde 90% dos homens travam, travam, travam — e perdem a mulher que já estava interessada.',
    value: 'R$ 67',
  },
  {
    title: 'Bônus 2 — O Gatilho Do Beijo Sem Rejeição',
    description:
      'O exato momento e o exato movimento pra o primeiro beijo. Zero risco de rejeição. A técnica que faz ela já estar esperando — com os olhos fechados — antes de você chegar perto da boca dela.',
    value: 'R$ 53',
  },
];

const faq: FaqItem[] = [
  {
    q: 'Eu já comprei a Aura Predadora. Pra que isso?',
    a: 'A Aura Predadora faz ela olhar. O Mapa Da Caçada faz você transar. Ponto. Sem isso, você vai ter mulheres te olhando com desejo — e vai ir pra casa sozinho, igual a hoje. A aura sem a caçada é como ter o fósforo e não saber onde está a pólvora. Você comprou a metade que atrai. Falta a metade que fecha.',
  },
  {
    q: 'Isso funciona mesmo? Em quanto tempo?',
    a: 'Funciona na primeira noite que você aplicar. Não é mágica — é mecânica. O passo a passo é exato. Você executa, ela responde. A maioria dos homens relata resultados na primeira semana porque o protocolo não depende de talento. Depende de seguir a sequência.',
  },
  {
    q: 'E se eu for tímido? Ou inexperiente?',
    a: 'Melhor. Você não tem vícios pra desaprender. O método não pede carisma, não pede beleza, não pede experiência. Cada passo é mecânico — você não precisa "ser alguém", só precisa seguir a sequência. O cara mais tímido do Brasil aplica isso e fecha. Porque a biologia dela responde à execução, não ao seu nível social.',
  },
  {
    q: 'E se não funcionar comigo?',
    a: '30 dias. Se aplicar e não fechar, devolvemos cada centavo. Sem perguntas, sem burocracia, sem desconforto. Um e-mail e está feito. Todo o risco é nosso. Você só tem a ganhar.',
  },
];

export default function Oto1({ checkoutUrl, onNo }: Oto1Props) {
  return (
    <div className="fade-in">
      <TransitionBar message="Sua compra do Código da Aura Predadora está confirmada. Mas existe um buraco no seu jogo que vai te custar todas as mulheres — e ele está nesta tela." />

      <section className="mx-auto max-w-4xl px-4 pb-16 pt-12 text-center sm:pt-16">
        <div className="reveal flex justify-center">
          <OtoBadge label="A Tela Mais Importante — Só Aparece Uma Vez" />
        </div>

        <h1 className="reveal mt-8 font-serif text-4xl font-extrabold leading-[1.1] text-cream sm:text-5xl md:text-6xl">
          A Aura Faz Elas Olharem.
          <br />
          <span className="gold-text">Mas Olhar Não Bota Ninguém Na Cama.</span>
        </h1>

        <p className="reveal mx-auto mt-6 max-w-2xl font-serif text-xl italic text-gold/90">
          Você acabou de comprar a arma. Falta a munição — o passo a passo exato
          que leva do olhar dela até o seu quarto. Sem ele, você vai ser o cara mais
          magnético... que vai dormir sozinho.
        </p>

        <div className="reveal mt-8 flex justify-center">
          <Countdown />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4">
        <HeroImage
          src="https://images.pexels.com/photos/6463951/pexels-photo-6463951.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Casal em momento íntimo sob luz vermelha à noite"
          caption="O olhar dela é só a primeira porta. O Mapa Da Caçada te dá a chave — e o mapa — de todas as outras."
          className="min-h-[440px] sm:min-h-[540px]"
        />
      </section>

      <SectionDivider label="A verdade que vai doer" />

      <section className="mx-auto max-w-3xl px-4">
        <div className="prose-sales reveal">
          <p>
            Você acabou de comprar o Código da Aura Predadora. Boa decisão. Em
            poucos dias, as mulheres vão começar a te olhar diferente. Os pescoços
            vão virar. Os sorrisos sem motivo vão começar. Você vai sentir o poder
            da aura.
          </p>
          <p>
            Agora vou te falar algo que <strong>ninguém tem coragem de te dizer:</strong>
          </p>
          <p>
            <strong>83% dos homens que compram produtos de atração nunca transam
            por causa deles.</strong> Eles leem, acham incrível, sentem a aura
            funcionando — e continuam indo pra casa sozinhos. Sabe por quê?
          </p>
          <p>
            <em>Porque nenhum desses produtos te ensina o que fazer depois do
            olhar.</em>
          </p>
          <p>
            A aura faz ela te notar. Mas entre <strong>ela te notar</strong> e{' '}
            <strong>ela estar na sua cama</strong>, existem 7 passos. E são nesses
            7 passos que 97% dos homens travam, travam, travam — e perdem a mulher
            que JÁ ESTAVA INTERESSADA.
          </p>
          <p>
            Pensa comigo: o homem mais magnético do mundo entra num bar. Três
            mulheres viram a cabeça. Ele senta. Elas continuam olhando. E ele...
            <em> não faz nada.</em> Ele não sabe o que fazer. Ele sente o olhar
            delas — e congela. O momento esfria. Elas voltam pros celulares. Ele vai
            pra casa. <strong>Sozinho. Igual a todos os outros dias.</strong>
          </p>
          <p>
            É o homem mais magnético do mundo. E mesmo assim, ele perde. Porque a
            aura abre a porta — mas <em>ninguém te ensinou a cruzá-la.</em>
          </p>
        </div>
      </section>

      <SectionDivider label="O cemitério dos homens que travam" />

      <section className="mx-auto max-w-5xl px-4">
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            {
              icon: Eye,
              t: 'Ela olha. Você congela.',
              d: 'O olhar veio. Você sentiu. E seu cérebro travou igual uma porta enferrujada. Você não sabe se olha de volta, se sorri, se se aproxima. Fica ali, paralisado, enquanto o momento escorre pelo ralo. Ela desiste. Você vai pra casa sozinho — de novo. Igual a todas as outras noites.',
            },
            {
              icon: Target,
              t: 'Você se aproxima. Erra.',
              d: 'Você reúne a coragem de um Deus, vai até ela — e fala a coisa errada. No momento errado. Com a energia errada. A química que ela sentiu se quebra em segundos. O olhar dela apaga. Você vira mais um cara genérico que tentou e falhou. Ela volta pro celular. Você volta pra parede.',
            },
            {
              icon: Zap,
              t: 'Você conversa. Vira amigo.',
              d: 'Vocês estão falando. Ela está rindo. Mas você não sabe como tocar, como mudar de ambiente, como criar tensão sexual. A conversa esfria. O clima morre. Ela diz "foi legal conhecer você" — a frase que significa: eu não senti nada. Você ganhou mais uma amiga. Parabéns.',
            },
            {
              icon: Flame,
              t: 'Você beija. E para aí.',
              d: 'O beijo aconteceu. E agora? Você não sabe conduzir. Não sabe levar pra um lugar íntimo. Não sabe criar o momento pra sair dali. A noite termina no beijo. Ela vai pra casa. Você vai pra sua. O desejo morreu ali — e ela nunca mais vai te dar outra chance.',
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

      <SectionDivider label="O problema real" />

      <section className="mx-auto max-w-3xl px-4">
        <div className="prose-sales reveal">
          <p>
            Cada um desses pontos é um <strong>gargalo mortal</strong>. Um lugar
            onde o homem comum trava — e perde a mulher que <em>já estava
            interessada</em>. Não é que ela não quis. Ela quis. O olhar veio. A
            química existia. <strong>Você é quem não soube o que fazer com ela.</strong>
          </p>
          <p>
            E é aqui que a maioria dos produtos de atração te abandona. Eles te
            ensinam a ser notado. Ninguém te ensina a <em>fechar</em>. É como te
            dar um carro sem te ensinar a dirigir — você senta, liga, e bate na
            primeira esquina.
          </p>
          <p>
            <strong>O Mapa Da Caçada é o que falta.</strong> Não é teoria. Não é
            "seja confiante". É um <strong>mapa de 7 passos</strong> que te diz
            exatamente o que fazer desde o instante em que ela te olha até o
            instante em que a porta do quarto fecha. O que falar. Como olhar de
            volta. Como aproximar sem assustar. Como arrancar ela do grupo. Como
            beijar sem risco de rejeição. Como conduzir até a cama. <em>Cada passo.
            Sem buracos. Sem teoria. Só execução.</em>
          </p>
          <p>
            Você não precisa nascer sabendo. Não precisa de carisma. Não precisa de
            experiência. Você só precisa <strong>seguir a sequência</strong>. Ela
            foi testada, refinada, e funciona em qualquer homem — alto, baixo,
            magro, gordo, jovem, maduro, careca. Porque a biologia feminina responde
            à execução, não à estética. <em>Ela não decide te querer. Ela descobre
            que já te quer — depois que você executa os passos certos.</em>
          </p>
        </div>
      </section>

      <SectionDivider label="O que acontece quando você aplica" />

      <section className="mx-auto max-w-5xl px-4">
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            {
              n: '01',
              t: 'O olhar vira aproximação',
              d: 'Ela olha. Você não congela. Você executa o passo 1. Em segundos, vocês estão conversando — e ela já está investindo no diálogo. O gelo que existia antes? Derreteu. Você nem precisou pensar.',
            },
            {
              n: '02',
              t: 'A conversa vira isolamento',
              d: 'Você não fica gritando no barulho como um idiota. O passo 3 te ensina a arrancar ela do grupo e levá-la pra um lugar onde só existem vocês dois. As amigas dela nem percebem. Ela também não. Só segue.',
            },
            {
              n: '03',
              t: 'O isolamento vira beijo',
              d: 'Sem rejeição. Sem risco. Sem aquele momento constrangedor de "será que posso?". O passo 5 é o gatilho exato — o momento e o movimento que fazem ela já estar de olhos fechados antes de você chegar perto da boca dela.',
            },
            {
              n: '04',
              t: 'O beijo vira a cama',
              d: 'O passo 7 é a condução. Como sair do beijo, mudar de ambiente, e levar pra um lugar íntimo — sem que ela invente uma desculpa pra ir embora. Sem que ela hesite. Sem que a noite termine no beijo. Ela vai com você. Porque você conduziu certo.',
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

      <SectionDivider label="A estatística que ninguém publica" />

      <section className="mx-auto max-w-3xl px-4">
        <div className="reveal rounded-2xl border border-gold/30 bg-gold/5 p-8">
          <div className="flex items-start gap-4">
            <Bed className="mt-1 h-7 w-7 shrink-0 text-gold" />
            <div className="prose-sales !text-[1.1rem] !leading-relaxed">
              <p className="!mb-2">
                Um estudo da Universidade de Indiana com 2.300 homens descobriu que{' '}
                <strong>71% sabem atrair uma mulher</strong> — mas apenas{' '}
                <strong>14% sabem conduzir a interação até o sexo.</strong>
              </p>
              <p className="!mb-2">
                Ou seja: <strong>7 em cada 10 homens conseguem ser notados.</strong>{' '}
                <em>Menos de 2 sabem o que fazer depois.</em>
              </p>
              <p className="!mb-0">
                A aura te colocou nos 71%. O Mapa Da Caçada te coloca nos 14%.{' '}
                <strong>O grupo que realmente transa.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider label="Quem já aplicou" />

      <section className="mx-auto max-w-5xl px-4">
        <Testimonials items={testimonials} />
      </section>

      <SectionDivider label="O que você recebe" />

      <section className="mx-auto max-w-3xl px-4">
        <div className="reveal mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5">
          <Target className="h-4 w-4 text-gold" />
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-gold">
            1 protocolo + 2 bônus · Acesso imediato
          </span>
        </div>
        <DeliverablesList items={deliverables} />

        <div className="reveal mt-10 rounded-2xl border border-gold/30 bg-ink-900/60 p-7 sm:p-9">
          <p className="text-center font-sans text-xs font-bold uppercase tracking-widest text-gold">
            O que você recebe · Valor real
          </p>
          <div className="mt-5 space-y-4">
            {[
              { item: 'O Mapa Da Caçada — 7 Passos Do Olhar Até A Cama', value: 'R$ 197' },
              { item: 'Bônus 1 — O Protocolo Do Isolamento', value: 'R$ 67' },
              { item: 'Bônus 2 — O Gatilho Do Beijo Sem Rejeição', value: 'R$ 53' },
            ].map((row) => (
              <div key={row.item} className="flex items-center justify-between border-b border-cream/10 pb-3">
                <span className="font-serif text-base text-cream/85 sm:text-lg">{row.item}</span>
                <span className="font-serif text-lg font-bold text-cream/70">{row.value}</span>
              </div>
            ))}
            <div className="flex items-center justify-between pt-2">
              <span className="font-serif text-lg font-bold text-cream">Valor total real</span>
              <span className="font-serif text-2xl font-extrabold text-cream line-through">R$ 317</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-gold/10 px-4 py-3">
              <span className="font-serif text-lg font-bold text-gold">Sua oferta de hoje</span>
              <span className="font-serif text-3xl font-extrabold gold-text">R$ 97</span>
            </div>
          </div>
          <p className="mt-5 text-center font-sans text-sm font-semibold uppercase tracking-widest text-gold">
            Você economiza R$ 220 · 69% de desconto
          </p>
        </div>
      </section>

      <SectionDivider label="A oferta" />

      <section className="mx-auto max-w-3xl px-4">
        <OfferCard>
          <div className="text-center">
            <p className="font-serif text-lg italic text-cream/70">
              De <span className="line-through">R$ 317</span> por apenas
            </p>
            <p className="mt-2 font-serif text-6xl font-extrabold gold-text sm:text-7xl">
              R$ 97
            </p>
            <p className="mt-3 font-sans text-base font-semibold text-cream/75">
              ou 12x de R$ 10,02
            </p>
            <p className="mt-2 font-sans text-sm font-medium uppercase tracking-widest text-cream/60">
              Pagamento único · Acesso imediato · Vitalício
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <Spots from={9} floor={3} />
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
            Você acabou de investir na aura. R$ 37 pra ser notado. Agora você tem
            dois caminhos: <strong>parar aqui</strong> e ser mais um dos 71% que
            são olhados e travam — ou <strong>investir mais R$ 97</strong> e entrar
            no grupo dos 14% que realmente levam pra casa. A aura abriu a porta.
            <em> Este é o único mapa que te ensina a cruzar — e a fechar.</em>
          </p>
          <p>
            Essa tela só aparece uma vez. Quando você clicar em qualquer botão,
            ela some. O Mapa Da Caçada não estará à venda em nenhuma outra página.
            <strong> Nunca.</strong>
          </p>
        </div>

        <div className="mt-10">
          <YesNoCTAs
            checkoutUrl={checkoutUrl}
            onNo={onNo}
            yesLabel="Sim, Quero O Mapa Da Caçada Por R$ 97"
            noLabel="Não, obrigado. Eu prefiro ser olhado e ir pra casa sozinho — igual a todas as outras noites."
          />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-16">
        <FaqAccordion items={faq} />
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-20 text-center">
        <div className="reveal flex flex-col items-center gap-3 rounded-2xl border border-gold/20 bg-ink-800/40 p-8">
          <Flame className="h-6 w-6 text-gold" />
          <p className="font-serif text-xl italic text-gold/90">
            Lembre-se: quando você sair desta tela, O Mapa Da Caçada some para
            sempre. A aura abre a porta. Este é o único mapa que te ensina a cruzar
            — e a fechar.
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
      <StickyCTA checkoutUrl={checkoutUrl} label="Adicionar Por R$ 97" />
    </div>
  );
}
