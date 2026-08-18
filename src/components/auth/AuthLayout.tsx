import { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Link to="/" className="inline-block">
            <h1 className="text-3xl font-bold tracking-tighter text-primary uppercase italic">
              Garimpoleads
            </h1>
          </Link>
          <h2 className="mt-6 text-2xl font-bold tracking-tight text-foreground">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 text-sm text-muted-foreground">
              {subtitle}
            </p>
          )}
        </div>
        <div className="mt-8 bg-card p-8 shadow-2xl border border-border/50 rounded-lg">
          {children}
        </div>
      </div>
    </div>
  );
}
