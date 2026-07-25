import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <p className="font-display text-7xl font-bold text-gradient-accent">404</p>
      <h1 className="mt-4 text-2xl font-bold">Page Not Found</h1>
      <p className="mt-2 max-w-md text-foreground-muted">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link href="/" className="mt-8">
        <Button>Back to Home</Button>
      </Link>
    </main>
  );
}
