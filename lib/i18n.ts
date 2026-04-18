export const LANGUAGES = ["es", "en"] as const;

export function isValidLang(value: string): value is (typeof LANGUAGES)[number] {
  return LANGUAGES.includes(value as (typeof LANGUAGES)[number]);
}
