import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImage from "@/assets/consorcio-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Consórcio Inteligente | Casa e Carro sem Juros" },
      {
        name: "description",
        content:
          "Conquiste seu imóvel ou veículo com parcelas que cabem no bolso, sem juros e com taxa administrativa reduzida. Simule seu consórcio agora.",
      },
      { property: "og:title", content: "Consórcio Inteligente | Casa e Carro sem Juros" },
      {
        property: "og:description",
        content:
          "Planos de consórcio sem juros, com crédito de R$ 30 mil a R$ 1 milhão. Simule em menos de 1 minuto.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ConsorcioPage,
});

const planos = [
  {
    nome: "Consórcio de Automóvel",
    credito: "R$ 60.000",
    parcela: "R$ 610",
    prazo: "100 meses",
    destaques: ["Carros novos ou seminovos", "Sem entrada obrigatória", "Use o FGTS como lance"],
  },
  {
    nome: "Consórcio Imobiliário",
    credito: "R$ 250.000",
    parcela: "R$ 1.480",
    prazo: "200 meses",
    destaques: ["Casa, apartamento ou terreno", "Construção e reforma", "Lance embutido de até 30%"],
    destaque: true,
  },
  {
    nome: "Consórcio de Serviços",
    credito: "R$ 30.000",
    parcela: "R$ 340",
    prazo: "96 meses",
    destaques: ["Viagens e cirurgias", "Reformas e estudos", "Crédito livre para usar"],
  },
];

const beneficios = [
  { titulo: "Zero juros", texto: "Você paga apenas a taxa de administração diluída nas parcelas." },
  { titulo: "Parcela flexível", texto: "Planos de 24 a 200 meses adaptados ao seu orçamento." },
  { titulo: "Poder de compra à vista", texto: "Contemplado, você negocia como um comprador em dinheiro." },
  { titulo: "Segurança total", texto: "Administradoras autorizadas e fiscalizadas pelo Banco Central." },
];

const passos = [
  { n: "01", t: "Escolha o plano", d: "Defina o valor do crédito e o prazo ideal para você." },
  { n: "02", t: "Entre no grupo", d: "Assinatura 100% digital, sem burocracia e sem análise pesada." },
  { n: "03", t: "Seja contemplado", d: "Por sorteio mensal ou oferecendo um lance." },
  { n: "04", t: "Use seu crédito", d: "Compre o bem à vista e realize o seu objetivo." },
];

function ConsorcioPage() {
  const [credito, setCredito] = useState(150000);
  const [prazo, setPrazo] = useState(120);
  const parcela = (credito * 1.18) / prazo;

  const brl = (v: number) =>
    v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <img
          src={heroImage}
          alt="Família recebendo as chaves do novo carro e da casa própria"
          width={1600}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        <div className="relative mx-auto max-w-5xl px-6 py-20 sm:py-28 text-center space-y-6">
          <span className="inline-block rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-medium uppercase tracking-widest text-primary">
            Sem juros · Sem entrada
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Conquiste seu <span className="text-primary">imóvel ou carro</span> pagando menos
          </h1>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
            O consórcio é a forma mais inteligente de comprar um bem de alto valor: parcelas
            planejadas, zero juros e liberdade para usar o crédito como quiser.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="#simulador"
              className="rounded-md bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground transition hover:opacity-90 active:scale-95"
            >
              Simular agora
            </a>
            <a
              href="#planos"
              className="rounded-md border border-primary/50 px-8 py-4 text-sm font-bold uppercase tracking-widest text-primary transition hover:bg-primary/10 active:scale-95"
            >
              Ver planos
            </a>
          </div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            + de 12.000 clientes contemplados
          </p>
        </div>
      </section>

      {/* Benefícios */}
      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <h2 className="text-center text-3xl font-bold tracking-tight">Por que escolher o consórcio</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {beneficios.map((b) => (
            <div key={b.titulo} className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold text-primary">{b.titulo}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Simulador */}
      <section id="simulador" className="border-y border-border bg-card/40">
        <div className="mx-auto grid w-full max-w-5xl gap-10 px-6 py-16 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Simule sua parcela</h2>
            <p className="text-sm text-muted-foreground">
              Ajuste o valor do crédito e o prazo para ver quanto ficaria a sua parcela mensal
              estimada (já incluída a taxa de administração).
            </p>
            <div className="space-y-2">
              <label htmlFor="credito" className="text-sm font-medium">
                Valor do crédito: <span className="text-primary">{brl(credito)}</span>
              </label>
              <input
                id="credito"
                type="range"
                min={30000}
                max={1000000}
                step={10000}
                value={credito}
                onChange={(e) => setCredito(Number(e.target.value))}
                className="w-full accent-[var(--primary)]"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="prazo" className="text-sm font-medium">
                Prazo: <span className="text-primary">{prazo} meses</span>
              </label>
              <input
                id="prazo"
                type="range"
                min={24}
                max={200}
                step={12}
                value={prazo}
                onChange={(e) => setPrazo(Number(e.target.value))}
                className="w-full accent-[var(--primary)]"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-lg border border-primary/30 bg-background p-8 text-center">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Parcela mensal estimada
            </p>
            <p className="mt-2 text-5xl font-extrabold text-primary">{brl(parcela)}</p>
            <p className="mt-3 text-sm text-muted-foreground">
              {brl(credito)} de crédito em {prazo} meses, sem juros.
            </p>
            <a
              href="#contato"
              className="mt-6 rounded-md bg-primary px-6 py-3 text-sm font-bold uppercase tracking-widest text-primary-foreground transition hover:opacity-90 active:scale-95"
            >
              Quero esse plano
            </a>
          </div>
        </div>
      </section>

      {/* Planos */}
      <section id="planos" className="mx-auto w-full max-w-6xl px-6 py-16">
        <h2 className="text-center text-3xl font-bold tracking-tight">Planos mais procurados</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {planos.map((p) => (
            <div
              key={p.nome}
              className={`flex flex-col rounded-lg border bg-card p-8 ${
                p.destaque ? "border-primary shadow-[0_0_40px_-15px_var(--primary)]" : "border-border"
              }`}
            >
              {p.destaque && (
                <span className="mb-3 self-start rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
                  Mais vendido
                </span>
              )}
              <h3 className="text-lg font-semibold">{p.nome}</h3>
              <p className="mt-4 text-3xl font-extrabold text-primary">{p.credito}</p>
              <p className="text-sm text-muted-foreground">
                a partir de {p.parcela}/mês · {p.prazo}
              </p>
              <ul className="mt-6 flex-1 space-y-2 text-sm text-muted-foreground">
                {p.destaques.map((d) => (
                  <li key={d} className="flex gap-2">
                    <span className="text-primary">✓</span>
                    {d}
                  </li>
                ))}
              </ul>
              <a
                href="#contato"
                className="mt-8 rounded-md border border-primary px-6 py-3 text-center text-sm font-bold uppercase tracking-widest text-primary transition hover:bg-primary hover:text-primary-foreground"
              >
                Falar com consultor
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Como funciona */}
      <section className="border-y border-border bg-card/40">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <h2 className="text-center text-3xl font-bold tracking-tight">Como funciona</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {passos.map((p) => (
              <div key={p.n} className="space-y-2">
                <span className="text-3xl font-extrabold text-primary/40">{p.n}</span>
                <h3 className="font-semibold">{p.t}</h3>
                <p className="text-sm text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato / CTA final */}
      <section id="contato" className="mx-auto w-full max-w-3xl px-6 py-16">
        <div className="rounded-lg border border-border bg-card p-8 sm:p-10">
          <h2 className="text-center text-3xl font-bold tracking-tight">
            Fale com um consultor
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Preencha os dados e receba uma proposta personalizada em até 24 horas.
          </p>
          <form
            className="mt-8 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Recebemos seus dados! Um consultor entrará em contato em breve.");
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                required
                placeholder="Seu nome"
                className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
              />
              <input
                required
                type="tel"
                placeholder="WhatsApp"
                className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
              />
            </div>
            <input
              required
              type="email"
              placeholder="E-mail"
              className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
            />
            <select
              defaultValue=""
              required
              className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
            >
              <option value="" disabled>
                Tipo de consórcio
              </option>
              <option>Imóvel</option>
              <option>Automóvel</option>
              <option>Serviços</option>
            </select>
            <button
              type="submit"
              className="w-full rounded-md bg-primary px-6 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground transition hover:opacity-90 active:scale-95"
            >
              Quero minha simulação
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-border px-6 py-8 text-center text-[11px] uppercase tracking-widest text-muted-foreground">
        &copy; {new Date().getFullYear()} Consórcio Inteligente · Valores simulados e sujeitos a análise
      </footer>
    </main>
  );
}
