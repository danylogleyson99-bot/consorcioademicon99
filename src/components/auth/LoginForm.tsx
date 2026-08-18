import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useNavigate, useSearch } from "@tanstack/react-router";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  // @ts-ignore - Ignore type error until route tree is fully generated
  const search = useSearch({ from: '/auth/login' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      // @ts-ignore
      const redirect = search.redirect || "/";
      navigate({ to: redirect as any });
    } catch (err: any) {
      setError(err.message || "Falha ao fazer login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-3 text-sm bg-destructive/10 border border-destructive/20 text-destructive rounded animate-in fade-in slide-in-from-top-1">
          {error}
        </div>
      )}
      <div className="space-y-1">
        <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">
          E-mail
        </label>
        <input
          id="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all rounded-md text-foreground placeholder:text-muted-foreground/50"
          placeholder="seu@email.com"
        />
      </div>
      <div className="space-y-1">
        <label htmlFor="password" className="block text-sm font-medium text-muted-foreground">
          Senha
        </label>
        <input
          id="password"
          type="password"
          required
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all rounded-md text-foreground placeholder:text-muted-foreground/50"
          placeholder="••••••••"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full py-2.5 px-4 bg-primary text-primary-foreground font-bold rounded-md hover:bg-primary/90 active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center uppercase tracking-widest text-sm"
      >
        {loading ? (
          <div className="h-5 w-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
        ) : (
          "Entrar no Terminal"
        )}
      </button>
    </form>
  );
}
