import { Check, Mail, Lock, ArrowRight } from 'lucide-react';

interface ObrigadoProps {
  purchased?: string[];
}

export default function Obrigado({ purchased = [] }: ObrigadoProps) {
  return (
    <div className="fade-in">
      <section className="mx-auto max-w-3xl px-4 pb-24 pt-20 text-center">
        <div className="reveal mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
          <Check className="h-10 w-10 text-gold" />
        </div>

        <h1 className="reveal font-serif text-4xl font-extrabold leading-[1.1] text-cream sm:text-5xl md:text-6xl">
          Pedido Concluído.
          <br />
          <span className="gold-text">Você tomou a decisão certa.</span>
        </h1>

        <p className="reveal mx-auto mt-6 max-w-2xl font-serif text-xl italic text-gold/90">
          Sua compra está confirmada. O protocolo — e tudo o que você adicionou —
          já está sendo preparado para você.
        </p>

        <div className="reveal mx-auto mt-12 max-w-xl rounded-2xl border border-gold/30 bg-ink-800/60 p-8 text-left">
          <h2 className="font-serif text-2xl font-bold text-cream">
            Resumo do seu pedido
          </h2>
          <ul className="mt-5 space-y-3">
            <li className="flex items-start gap-3">
              <Check className="mt-1 h-5 w-5 shrink-0 text-gold" />
              <span className="prose-sales !text-[1.05rem] !leading-relaxed">
                <strong>Código da Aura Predadora</strong> — protocolo digital
                completo (PDF + áudios bônus)
              </span>
            </li>
            {purchased.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-gold" />
                <span className="prose-sales !text-[1.05rem] !leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal mx-auto mt-10 max-w-xl rounded-2xl border border-gold/20 bg-ink-800/40 p-8 text-left">
          <div className="flex items-start gap-3">
            <Mail className="mt-1 h-6 w-6 shrink-0 text-gold" />
            <div>
              <h3 className="font-serif text-xl font-bold text-cream">
                Como acessar
              </h3>
              <p className="prose-sales mt-2 !text-[1.05rem] !leading-relaxed">
                Enviamos todos os links de acesso para o seu{' '}
                <strong>e-mail de compra</strong>. Verifique a caixa de entrada
                (e a pasta de spam, caso não encontre em 5 minutos). O acesso é{' '}
                <em>imediato</em> e <em>vitalício</em> — você baixa, escuta e usa
                quantas vezes quiser.
              </p>
            </div>
          </div>
        </div>

        <div className="reveal mt-12">
          <a
            href="#"
            className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-b from-[#e6c178] to-[#c8a35c] px-10 py-5 font-sans text-base font-extrabold uppercase tracking-wide text-ink-900 shadow-[0_18px_40px_-12px_rgba(200,163,92,0.55)] transition-all duration-300 hover:-translate-y-0.5"
          >
            Acessar Meu Produto
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
          </a>
          <p className="mt-3 font-sans text-[11px] uppercase tracking-widest text-cream/50">
            Acesso imediato · Vitalício
          </p>
        </div>

        <div className="reveal mx-auto mt-12 flex max-w-md flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] font-medium uppercase tracking-widest text-cream/45">
          <span className="inline-flex items-center gap-1.5">
            <Lock className="h-3.5 w-3.5 text-gold/70" /> Compra 100% segura
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Check className="h-3.5 w-3.5 text-gold/70" /> Garantia de 30 dias
          </span>
        </div>

        <p className="reveal mx-auto mt-16 max-w-2xl font-serif text-lg italic text-cream/60">
          Bem-vindo ao outro lado. Você não comprou um produto — você ativou uma
          versão de si mesmo que estava dormindo. Agora é escutar, sentir, e deixar
          a aura fazer o resto.
        </p>
      </section>
    </div>
  );
}
