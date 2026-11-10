/**
 * Renders text normally, but any [bracketed segment] (like "[EDIT: ...]") is shown as
 * italic placeholder text so unfinished content is obvious while you edit.
 */
export default function EditableText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]*\])/g).filter(Boolean);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("[") && part.endsWith("]") ? (
          <span key={i} className="placeholder-text">
            {part}
            <span className="sr-only"> (placeholder, not yet written)</span>
          </span>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}
