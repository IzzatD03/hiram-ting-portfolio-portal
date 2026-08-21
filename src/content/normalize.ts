export function normalizeString(value: string) {
  return value.normalize("NFC").replace(/\r\n/g, "\n").trim();
}

export function normalizeContent<T>(value: T): T {
  if (typeof value === "string") return normalizeString(value) as T;
  if (Array.isArray(value)) return value.map((item) => normalizeContent(item)) as T;
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, normalizeContent(item)]),
    ) as T;
  }
  return value;
}

export function csvBoolean(value: unknown) {
  if (typeof value === "boolean") return value;
  if (typeof value !== "string") return value;
  if (value.toLowerCase() === "true") return true;
  if (value.toLowerCase() === "false") return false;
  return value;
}
