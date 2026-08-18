import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/")({
    head: () => ({
        meta: [
            { title: "Garimpoleads | Prospecção de Leads" },
            {
                name: "description",
                content: "Plataforma profissional de prospecção de leads.",
            },
            { property: "og:title", content: "Garimpoleads" },
            {
                property: "og:description",
                content: "Plataforma profissional de prospecção de leads.",
            },
            { property: "og:type", content: "website" },
            { name: "twitter:card", content: "summary_large_image" },
        ],
    }),
    component: LandingPage,
});
function LandingPage() {
    return (<main className="flex min-h-[80vh] flex-col items-center justify-center p-6 text-center">
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
          <div className="h-2 w-2 animate-pulse bg-primary"/>
          <div className="h-2 w-2 animate-pulse bg-primary delay-75"/>
          <div className="h-2 w-2 animate-pulse bg-primary delay-150"/>
        </div>
      </div>
    </main>);
}
