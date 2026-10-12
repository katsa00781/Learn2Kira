/** Tömb felosztása `size` elemű sorokra; az utolsó sor rövidebb lehet. */
export function chunk<T>(items: T[], size: number): T[][] {
  return Array.from({ length: Math.ceil(items.length / size) }, (_, i) => items.slice(i * size, (i + 1) * size));
}
