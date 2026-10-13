import correct from "@/assets/sounds/correct.wav";
import finish from "@/assets/sounds/finish.wav";
import encourage from "@/assets/sounds/encourage.wav";

/** Minden hangfájl központi importja, mint a képeknél. */
export const sounds = { correct, encourage, finish };
export type SoundName = keyof typeof sounds;
