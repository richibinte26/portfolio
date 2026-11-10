/** Anything empty or wrapped like "[EDIT: ...]" / "[MY EMAIL ADDRESS]" counts as an unfilled placeholder. */
export function isPlaceholder(value?: string): boolean {
  return !value || value.trim().startsWith("[");
}
