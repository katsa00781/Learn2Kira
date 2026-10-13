import correct from "@/assets/sounds/correct.wav";
import encourage from "@/assets/sounds/encourage.wav";

/** Minden hangfájl központi importja, mint a képeknél. */
export const sounds = { correct, encourage };
export type SoundName = keyof typeof sounds;
