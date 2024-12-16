import { ReadonlyURLSearchParams } from "next/navigation";

export function ensureStartWith(str: string, prefix: string): string {
  return str.startsWith(prefix) ? str : `${prefix}${str}`;
}

export function createURL(
  path: string,
  params: URLSearchParams | ReadonlyURLSearchParams
): string {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? `?` : ""}${paramsString}`;
  return `${path}${queryString}`;
}
