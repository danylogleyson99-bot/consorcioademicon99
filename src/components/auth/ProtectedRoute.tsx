import { ReactNode } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Navigate, useRouterState } from '@tanstack/react-router';

interface ProtectedRouteProps {
  children: ReactNode;
}

/**
 * A component that protects routes and redirects to login if not authenticated.
 * Note: TanStack Router will generate the correct types after build.
 */
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
    // We use a simple Navigate without 'as' to avoid type conflicts during initial build
    // @ts-ignore - Ignore type error until route tree is fully generated
    return <Navigate to="/auth/login" search={{ redirect: state.location.href }} />;
  }

  return <>{children}</>;
}
