import { createFileRoute, Link } from '@tanstack/react-router';
import { AuthLayout } from '@/components/auth/AuthLayout';
import { LoginForm } from '@/components/auth/LoginForm';
import { z } from 'zod';

export const Route = createFileRoute('/auth/login')({
  validateSearch: z.object({
    redirect: z.string().optional(),
  }),
  component: LoginPage,
});

function LoginPage() {
  return (
    <AuthLayout title="Acessar conta" subtitle="Entre com suas credenciais para continuar">
      <LoginForm />
      <div className="mt-6 text-center space-y-2">
        <p className="text-sm text-muted-foreground">
          Não tem uma conta?{' '}
          <Link to="/auth/register" className="text-primary hover:underline font-medium">
            Cadastre-se
          </Link>
        </p>
        <p className="text-sm">
          <Link to="/auth/forgot-password" hidden className="text-muted-foreground hover:text-primary transition-colors">
            Esqueceu sua senha?
          </Link>
          {/* Visible for now because the user asked for recovery functionality */}
          <Link to="/auth/forgot-password"  className="text-muted-foreground hover:text-primary transition-colors">
            Esqueceu sua senha?
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
