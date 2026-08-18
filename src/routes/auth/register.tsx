import { createFileRoute, Link } from '@tanstack/react-router';
import { AuthLayout } from '@/components/auth/AuthLayout';
import { RegisterForm } from '@/components/auth/RegisterForm';

export const Route = createFileRoute('/auth/register')({
  component: RegisterPage,
});

function RegisterPage() {
  return (
    <AuthLayout title="Criar nova conta" subtitle="Comece sua prospecção profissional hoje">
      <RegisterForm />
      <div className="mt-6 text-center">
        <p className="text-sm text-muted-foreground">
          Já possui uma conta?{' '}
          <Link to="/auth/login" className="text-primary hover:underline font-medium">
            Fazer login
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
