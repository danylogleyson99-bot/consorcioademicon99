import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import afternoonImage from "../assets/afternoon-glow.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Boa Tarde — Uma saudação ensolarada" },
      {
        name: "description",
        content:
          "Uma página de boa tarde com uma saudação acolhedora, a hora atual e um toque de luz solar.",
      },
      { property: "og:title", content: "Boa Tarde — Uma saudação ensolarada" },
      {
        property: "og:description",
        content:
          "Uma página de boa tarde com uma saudação acolhedora, a hora atual e um toque de luz solar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: BoaTardePage,
});

function BoaTardePage() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Intl.DateTimeFormat("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }).format(new Date())
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${afternoonImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-afternoon-amber/20 via-afternoon-gold/10 to-afternoon-warm/30" />
      <div className="absolute inset-0 bg-afternoon-cream/30 backdrop-blur-[2px]" />

      <section className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <div className="rounded-3xl bg-afternoon-cream/60 p-10 shadow-2xl shadow-afternoon-shadow/15 ring-1 ring-afternoon-soft/50 backdrop-blur-md sm:p-14">
          <span className="inline-flex items-center gap-2 rounded-full bg-afternoon-gold/20 px-4 py-1.5 text-sm font-medium text-afternoon-amber opacity-0 animate-fade-in-up">
            <SunIcon className="h-4 w-4" />
            Bem-vindo à tarde
          </span>

          <h1 className="mt-6 font-serif text-6xl font-light tracking-tight text-afternoon-text opacity-0 animate-fade-in-up animate-delay-100 sm:text-7xl">
            Boa tarde
          </h1>

          <p className="mt-4 text-lg font-light leading-relaxed text-afternoon-shadow opacity-0 animate-fade-in-up animate-delay-200">
            Aproveite a luz do sol, respire fundo e siga em frente.
          </p>

          {time && (
            <div className="mt-8 opacity-0 animate-fade-in-up animate-delay-300">
              <div className="inline-block rounded-2xl bg-afternoon-soft/50 px-6 py-3 text-3xl font-light tabular-nums tracking-wide text-afternoon-text">
                {time}
              </div>
              <p className="mt-2 text-sm text-afternoon-shadow/70">
                Hora local de Brasília
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}
