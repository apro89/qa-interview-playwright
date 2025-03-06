//Extract only numeric digits from a given string.
export function formatYear(yearText: string): string {
  return yearText.replace(/\D/g, "");
}
