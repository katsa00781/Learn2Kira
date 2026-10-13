import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type SettingsState = {
  /** A hangeffektek be vannak kapcsolva. A haptika nem kapcsolható ki. */
  soundOn: boolean;
  toggleSound: () => void;
};

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      soundOn: true,
      toggleSound: () => set((s) => ({ soundOn: !s.soundOn })),
    }),
    { name: "settings", storage: createJSONStorage(() => AsyncStorage) },
  ),
);
