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
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="flex flex-1 flex-col items-center justify-center p-6 text-center space-y-8 animate-in fade-in duration-700">
        <div className="space-y-4">
          <div className="inline-block px-3 py-1 text-xs font-medium tracking-widest text-primary uppercase border border-primary/30 rounded-full bg-primary/5 animate-pulse">
            Sistema Ativo
          </div>
          <h1 className="text-5xl font-extrabold tracking-tighter text-foreground sm:text-7xl uppercase italic">
            Garimpoleads<span className="text-primary">.</span>
          </h1>
          <p className="max-w-[600px] text-lg text-muted-foreground mx-auto">
            A plataforma definitiva para mineração e prospecção inteligente de leads. 
            Encontre quem importa, feche negócios mais rápido.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {loading ? (
            <div className="h-12 w-40 animate-pulse bg-muted rounded-md" />
          ) : user ? (
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-accent/50 rounded-md border border-border">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-mono">{user.email}</span>
              </div>
              <div className="flex gap-4">
                <Link 
                  to="/dashboard"
                  className="px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-bold uppercase tracking-widest text-sm rounded-md shadow-[0_0_15px_rgba(34,197,94,0.3)] active:scale-95"
                >
                  Acessar Dashboard
                </Link>
                <button 
                  onClick={() => signOut()}
                  className="px-8 py-3 border border-border text-muted-foreground hover:text-foreground hover:bg-accent transition-all font-bold uppercase tracking-widest text-sm rounded-md active:scale-95"
                >
                  Sair
                </button>
              </div>
            </div>
          ) : (
            <>
              <Link 
                to="/auth/login"
                className="px-10 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-bold uppercase tracking-widest text-sm rounded-md shadow-[0_0_20px_rgba(34,197,94,0.4)] active:scale-95"
              >
                Iniciar Sessão
              </Link>
              <Link 
                to="/auth/register"
                className="px-10 py-4 border border-primary/50 text-primary hover:bg-primary/10 transition-all font-bold uppercase tracking-widest text-sm rounded-md active:scale-95"
              >
                Criar Conta Grátis
              </Link>
            </>
          )}
        </div>

        {/* Feature Preview Bits */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto pt-12 border-t border-border/50">
          <div className="space-y-2">
            <h3 className="text-primary font-bold uppercase tracking-tighter italic">01. Garimpagem</h3>
            <p className="text-xs text-muted-foreground">Extração automatizada de dados públicos e leads qualificados.</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-primary font-bold uppercase tracking-tighter italic">02. Validação</h3>
            <p className="text-xs text-muted-foreground">Verificação em tempo real de contatos e perfis corporativos.</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-primary font-bold uppercase tracking-tighter italic">03. Conversão</h3>
            <p className="text-xs text-muted-foreground">Integrações diretas para acelerar seu pipeline de vendas.</p>
          </div>
        </div>

        <div className="flex justify-center gap-4 pt-8">
          <div className="h-1.5 w-8 bg-primary/20 rounded-full overflow-hidden">
            <div className="h-full bg-primary w-1/3 animate-[loading-bar_2s_infinite]" />
          </div>
        </div>
      </section>
      
      <footer className="p-6 text-center border-t border-border/20 text-[10px] text-muted-foreground uppercase tracking-widest">
        &copy; {new Date().getFullYear()} Garimpoleads Tech Industries. Todos os direitos reservados.
      </footer>
    </main>
  );
}


