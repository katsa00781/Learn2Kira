export const XP_PER_LEVEL = 100;

/** A szint (1-től) és az aktuális szinten belül összegyűjtött XP. */
export function levelOf(xp: number): { level: number; into: number } {
  const safe = Math.max(xp, 0);
  return { level: Math.floor(safe / XP_PER_LEVEL) + 1, into: safe % XP_PER_LEVEL };
}

/**
 * A szintsáv kitöltése egy kör előtt és után (0–1). Ha a kör szintet léptetett,
 * a sáv az új szint elejéről indul, így a nyert rész az új szinten látszik.
 */
export function levelBar(xpBefore: number, xpAfter: number): { start: number; end: number; level: number; leveledUp: boolean } {
  const before = levelOf(xpBefore);
  const after = levelOf(xpAfter);
  const leveledUp = after.level > before.level;
  return {
    start: leveledUp ? 0 : before.into / XP_PER_LEVEL,
    end: after.into / XP_PER_LEVEL,
    level: after.level,
    leveledUp,
  };
}
