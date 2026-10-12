/**
 * Számbeírásos válasz ellenőrzése. Üres vagy nem szám bevitel sosem helyes.
 * A `tolerance` becsléses feladatokhoz: |beírt - válasz| <= tolerance.
 */
export function isNumericCorrect(input: string, answer: number, tolerance = 0): boolean {
  if (input.trim() === "") return false;
  const value = Number(input);
  if (Number.isNaN(value)) return false;
  return Math.abs(value - answer) <= tolerance;
}
