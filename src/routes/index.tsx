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
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md space-y-6">
        <h1 className="text-4xl font-bold tracking-tighter text-primary sm:text-6xl uppercase italic">
          Garimpoleads
        </h1>
        <p className="text-lg text-muted-foreground">
          Fundação do projeto carregada com sucesso.
          <br />
          Pronto para o SCRIPT 2.
        </p>
        <div className="flex justify-center gap-4">
          <div className="h-2 w-2 animate-pulse bg-primary" />
          <div className="h-2 w-2 animate-pulse bg-primary delay-75" />
          <div className="h-2 w-2 animate-pulse bg-primary delay-150" />
        </div>
      </div>
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
