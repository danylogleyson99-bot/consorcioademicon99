import { createFileRoute, Link } from '@tanstack/react-router';
import { AuthLayout } from '@/components/auth/AuthLayout';
import { ForgotPasswordForm } from '@/components/auth/ForgotPasswordForm';

export const Route = createFileRoute('/auth/forgot-password')({
  component: ForgotPasswordPage,
});

function ForgotPasswordPage() {
  return (
    <AuthLayout title="Recuperar senha" subtitle="Enviaremos um link de recuperação para seu e-mail">
      <ForgotPasswordForm />
      <div className="mt-6 text-center">
        <Link to="/auth/login" className="text-primary hover:underline text-sm font-medium">
          Voltar para o login
        </Link>
      </div>
    </AuthLayout>
  );
}
