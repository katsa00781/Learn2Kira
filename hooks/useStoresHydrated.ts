import { useEffect, useState } from "react";
import { useProgressStore } from "@/store/progressStore";
import { useReviewStore } from "@/store/reviewStore";

const stores = [useProgressStore, useReviewStore];

/**
 * Igaz, amint az AsyncStorage-ból mindkét perzisztált store betöltődött.
 * Betöltés előtt nem szabad kört összeállítani: üres `cards`-szal az esedékes ismétlések kimaradnának.
 */
export function useStoresHydrated(): boolean {
  const [hydrated, setHydrated] = useState(() => stores.every((s) => s.persist.hasHydrated()));

  useEffect(() => {
    const check = () => setHydrated(stores.every((s) => s.persist.hasHydrated()));
    const unsubscribes = stores.map((s) => s.persist.onFinishHydration(check));
    check();
    return () => unsubscribes.forEach((unsubscribe) => unsubscribe());
  }, []);

  return hydrated;
}
