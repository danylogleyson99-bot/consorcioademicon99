import { createFileRoute } from '@tanstack/react-router';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';

export const Route = createFileRoute('/dashboard')({
  component: DashboardPage,
});

function DashboardPage() {
  return (
    <ProtectedRoute>
      <div className="p-8">
        <h1 className="text-3xl font-bold text-primary uppercase italic tracking-tighter">
          Dashboard Terminal
        </h1>
        <p className="mt-4 text-muted-foreground">
          Bem-vindo à central de comando do Garimpoleads.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-card border border-border rounded-lg">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Leads Minerados</h3>
            <p className="text-4xl font-bold text-foreground mt-2">0</p>
          </div>
          <div className="p-6 bg-card border border-border rounded-lg">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Pesquisas Ativas</h3>
            <p className="text-4xl font-bold text-foreground mt-2">0</p>
          </div>
          <div className="p-6 bg-card border border-border rounded-lg">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Conversão</h3>
            <p className="text-4xl font-bold text-foreground mt-2">0%</p>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
