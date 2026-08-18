import { ReactNode } from "react";
import { Outlet } from "@tanstack/react-router";

export function AppLayout({ children }: { children?: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Container for border/grid effects if needed later */}
      <div className="relative flex min-h-screen flex-col border-x border-border/50 bg-background sm:mx-auto sm:max-w-7xl">
        <main className="flex-1">
          {children || <Outlet />}
        </main>
      </div>
    </div>
  );
}
