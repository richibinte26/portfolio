export default function Loading() {
  return (
    <div role="status" className="flex min-h-[60vh] items-center justify-center">
      <span className="h-9 w-9 animate-spin rounded-full border-4 border-accent-soft border-t-accent" />
      <span className="sr-only">Loading…</span>
    </div>
  );
}
