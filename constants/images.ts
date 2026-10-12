import mascotBase from "@/assets/images/mascot/mascot-base.png";
import mascotThinking from "@/assets/images/mascot/mascot-thinking.png";
import mascotCelebrate from "@/assets/images/mascot/mascot-celebrate.png";
import mascotEncourage from "@/assets/images/mascot/mascot-encourage.png";

import badgeFirstLesson from "@/assets/images/badges/first-lesson.png";
import badgeStreak3 from "@/assets/images/badges/streak-3.png";
import badgeStreak7 from "@/assets/images/badges/streak-7.png";
import badgeStreak14 from "@/assets/images/badges/streak-14.png";
import badgeStreak30 from "@/assets/images/badges/streak-30.png";
import badgePerfectRound from "@/assets/images/badges/perfect-round.png";
import badgeTopicNyelvtan from "@/assets/images/badges/topic-nyelvtan.png";
import badgeTopicHelyesiras from "@/assets/images/badges/topic-helyesiras.png";
import badgeTopicMatek from "@/assets/images/badges/topic-matek.png";
import badgeTopicKornyezet from "@/assets/images/badges/topic-kornyezet.png";

export const images = { mascotBase, mascotThinking, mascotCelebrate, mascotEncourage };

/** A jelvények képei a `constants/badges.ts` azonosítói szerint. */
export const badgeImages = {
  "first-lesson": badgeFirstLesson,
  "streak-3": badgeStreak3,
  "streak-7": badgeStreak7,
  "streak-14": badgeStreak14,
  "streak-30": badgeStreak30,
  "perfect-round": badgePerfectRound,
  "topic-nyelvtan": badgeTopicNyelvtan,
  "topic-helyesiras": badgeTopicHelyesiras,
  "topic-matek": badgeTopicMatek,
  "topic-kornyezet": badgeTopicKornyezet,
} as const;
