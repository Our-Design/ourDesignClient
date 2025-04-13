export function formatDate(isoDateString: string): string {
  const date = new Date(isoDateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long", // 'short' for abbreviated month, or '2-digit'
    day: "numeric",
  });
}
