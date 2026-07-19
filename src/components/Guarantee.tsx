import { Shield } from 'lucide-react';

export default function Guarantee() {
  return (
    <div className="reveal mx-auto max-w-3xl rounded-2xl border border-gold/30 bg-ink-800/60 p-8 text-center">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
        <Shield className="h-8 w-8 text-gold" />
      </div>
      <h3 className="font-serif text-2xl font-bold text-cream">
        Garantia Incondicional de 30 Dias
      </h3>
      <p className="prose-sales mt-3 !text-center !text-[1.05rem]">
        Use, escute, sinta. Se em <strong>30 dias</strong> você não perceber a
        diferença na forma como as mulheres te olham, escreva um e-mail e devolvemos
        <em> cada centavo</em>. Sem perguntas, sem burocracia. Todo o risco é nosso.
      </p>
    </div>
  );
}
