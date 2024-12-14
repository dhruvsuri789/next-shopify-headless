export function ensureStartWith(str: string, prefix: string): string {
  return str.startsWith(prefix) ? str : `${prefix}${str}`;
}
