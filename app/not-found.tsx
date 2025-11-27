import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>

      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>

      <p className="text-muted-foreground max-w-md mb-6">
        Sorry, the page you&apos;re looking for doesn&apos;t exist or may have been moved.
      </p>

      <Link
        href="/"
        className="px-6 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-medium transition hover:bg-primary/80"
      >
        Go Back Home
      </Link>
    </div>
  );
}
