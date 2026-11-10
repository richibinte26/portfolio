export default function SectionHeading({ id, title, intro }: { id?: string; title: string; intro?: string }) {
  return (
    <div className="mb-12 max-w-2xl">
      <h2 id={id} className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-3 text-lg leading-relaxed text-muted">{intro}</p>}
    </div>
  );
}
