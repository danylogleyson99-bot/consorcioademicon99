import { ReactNode } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Navigate, useRouterState } from '@tanstack/react-router';

interface ProtectedRouteProps {
  children: ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user, loading } = useAuth();
  const state = useRouterState();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth/login" search={{ redirect: state.location.href }} />;
  }

  return <>{children}</>;
}
