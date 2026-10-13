import { type AudioPlayer, createAudioPlayer } from "expo-audio";
import { type SoundName, sounds } from "@/constants/sounds";
import { useSettingsStore } from "@/store/settingsStore";

// Egy lejátszó hangonként, az első használatkor jön létre
const players: Partial<Record<SoundName, AudioPlayer>> = {};

/** Lejátssza a hangot, ha a hang be van kapcsolva. Hiba esetén csendben marad: a gyakorlás nem akadhat el rajta. */
export function playSound(name: SoundName) {
  if (!useSettingsStore.getState().soundOn) return;
  try {
    const player = (players[name] ??= createAudioPlayer(sounds[name]));
    void player.seekTo(0);
    player.play();
  } catch {
    // a hang nem létfontosságú
  }
}
