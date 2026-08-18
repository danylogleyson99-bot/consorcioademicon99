import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useNavigate } from "@tanstack/react-router";

export function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) throw error;
      setSuccess(true);
    } catch (err: any) {
      setError(err.message || "Falha ao criar conta");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="text-center space-y-4">
        <div className="p-4 bg-primary/10 border border-primary/20 text-primary rounded">
          Cadastro realizado com sucesso! Verifique seu e-mail para confirmar a conta.
        </div>
        <button
          onClick={() => navigate({ to: "/auth/login" })}
          className="text-primary hover:underline text-sm font-medium"
        >
          Ir para o Login
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-3 text-sm bg-destructive/10 border border-destructive/20 text-destructive rounded">
          {error}
        </div>
      )}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">
          E-mail
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all rounded-md text-foreground"
          placeholder="seu@email.com"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-muted-foreground mb-1">
          Senha
        </label>
        <input
          id="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all rounded-md text-foreground"
          placeholder="••••••••"
        />
        <p className="mt-1 text-xs text-muted-foreground">Mínimo 6 caracteres.</p>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full py-2 px-4 bg-primary text-primary-foreground font-bold rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center justify-center uppercase tracking-wider"
      >
        {loading ? (
          <div className="h-5 w-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
        ) : (
          "Criar Conta"
        )}
      </button>
    </form>
  );
}
