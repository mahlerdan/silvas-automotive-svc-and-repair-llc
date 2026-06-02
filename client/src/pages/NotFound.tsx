import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { AlertTriangle, Home } from "lucide-react";

export default function NotFound() {
  return (
    <Layout>
      <section className="min-h-[60vh] flex items-center justify-center py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 industrial-grid" />
        <div className="container max-w-md text-center space-y-6 relative z-10">
          <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/40 flex items-center justify-center mx-auto text-primary">
            <AlertTriangle className="w-10 h-10" />
          </div>
          
          <div className="space-y-2">
            <h1 className="font-display text-4xl font-black tracking-tight text-foreground">
              404 - PAGE NOT FOUND
            </h1>
            <p className="text-sm font-mono text-muted-foreground">
              ERROR: ROUTE_NOT_RESOLVED
            </p>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let's get you back to the garage.
          </p>

          <div className="pt-4">
            <Button asChild className="rounded-none bg-primary text-primary-foreground font-display tracking-wider uppercase px-8 py-6">
              <Link href="/" className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                BACK TO HOME
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
