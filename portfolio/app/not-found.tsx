import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[70vh] flex-col items-start justify-center gap-5 py-24">
      <p className="font-display text-7xl font-bold text-accent">404</p>
      <h1 className="font-display text-3xl font-semibold sm:text-4xl">This page doesn&apos;t exist</h1>
      <p className="max-w-md text-muted">The link may be broken or the page may have moved. Head back home or browse the projects.</p>
      <div className="flex flex-wrap gap-3">
        <Link href="/" className="btn btn-primary">Back to home</Link>
        <Link href="/#projects" className="btn btn-outline">View projects</Link>
      </div>
    </section>
  );
}
