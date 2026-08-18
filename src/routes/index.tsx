import { createFileRoute, Link } from "@tanstack/react-router";
import { useAuth } from "@/hooks/useAuth";

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
  const { user, signOut, loading } = useAuth();

  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md space-y-6">
        <h1 className="text-4xl font-bold tracking-tighter text-primary sm:text-6xl uppercase italic">
          Garimpoleads
        </h1>
        <p className="text-lg text-muted-foreground">
          Fundação do projeto carregada com sucesso.
          <br />
          Sistema de autenticação pronto.
        </p>
        
        <div className="flex flex-col gap-4 items-center">
          {loading ? (
            <div className="h-10 w-32 animate-pulse bg-muted rounded" />
          ) : user ? (
            <div className="space-y-4">
              <p className="text-sm text-primary">Conectado como: {user.email}</p>
              <button 
                onClick={() => signOut()}
                className="px-6 py-2 border border-primary text-primary hover:bg-primary/10 transition-colors font-bold uppercase tracking-wider text-sm rounded-md"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-4">
              <Link 
                to="/auth/login"
                className="px-6 py-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-bold uppercase tracking-wider text-sm rounded-md"
              >
                Login
              </Link>
              <Link 
                to="/auth/register"
                className="px-6 py-2 border border-border text-foreground hover:bg-accent transition-colors font-bold uppercase tracking-wider text-sm rounded-md"
              >
                Cadastrar
              </Link>
            </div>
          )}
        </div>

        <div className="flex justify-center gap-4 pt-4">
          <div className="h-2 w-2 animate-pulse bg-primary" />
          <div className="h-2 w-2 animate-pulse bg-primary delay-75" />
          <div className="h-2 w-2 animate-pulse bg-primary delay-150" />
        </div>
      </div>
    </main>
  );
}

