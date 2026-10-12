import * as Haptics from "expo-haptics";
import { useEffect, useMemo } from "react";
import { exercisesByTopic, topicById } from "@/data";
import { useStoresHydrated } from "@/hooks/useStoresHydrated";
import { newBadges } from "@/lib/badges";
import { selectSessionExercises, toDay } from "@/lib/leitner";
import { seenRatio } from "@/lib/progress";
import { useProgressStore } from "@/store/progressStore";
import { useResultStore } from "@/store/resultStore";
import { useReviewStore } from "@/store/reviewStore";
import { useSessionStore } from "@/store/sessionStore";

export const XP_PER_CORRECT = 10;

/** A gyakorlókör logikája: összeállítás, válasz rögzítése, befejezés. A képernyő csak ezt jeleníti meg. */
export function usePracticeSession(topicId: string) {
  const hydrated = useStoresHydrated();
  const today = useMemo(() => toDay(new Date()), []);
  const session = useSessionStore();

  useEffect(() => {
    if (!hydrated) return;
    const exercises = selectSessionExercises({ exercises: exercisesByTopic(topicId), cards: useReviewStore.getState().cards, today });
    useSessionStore.getState().start(topicId, exercises);
    return () => useSessionStore.getState().reset();
  }, [hydrated, topicId, today]);

  const ready = hydrated && session.topicId === topicId;
  const total = session.exercises.length;
  const exercise = session.exercises[session.index];
  const answered = session.results.length > session.index;
  const finished = ready && session.index >= total;
  const correctCount = session.results.filter(Boolean).length;

  const answer = (correct: boolean) => {
    if (!exercise || answered) return;
    useReviewStore.getState().recordAnswer(exercise.id, correct, today);
    session.answer(correct);
    Haptics.notificationAsync(
      correct ? Haptics.NotificationFeedbackType.Success : Haptics.NotificationFeedbackType.Warning,
    );
  };

  const next = () => {
    if (!answered) return;
    if (session.index === total - 1) {
      const xpEarned = correctCount * XP_PER_CORRECT;
      const progress = useProgressStore.getState();
      const xpBefore = progress.xp;
      progress.completeSession(xpEarned, today);

      // A kör utolsó válasza már a reviewStore-ban van, így a témakör „kész” állapota friss
      const topicDone = seenRatio(exercisesByTopic(topicId), useReviewStore.getState().cards) >= 1;
      const earned = newBadges(progress.unlockedBadges, {
        streak: useProgressStore.getState().streak,
        correct: correctCount,
        total,
        topicSubject: topicDone ? (topicById(topicId)?.subject ?? null) : null,
      });
      earned.forEach((id) => useProgressStore.getState().unlockBadge(id));

      useResultStore.getState().set({
        topicId,
        correct: correctCount,
        total,
        xpEarned,
        xpBefore,
        exerciseIds: session.exercises.map((e) => e.id),
        newBadges: earned,
      });
    }
    session.next();
  };

  return {
    ready,
    exercise,
    index: session.index,
    total,
    answered,
    lastCorrect: answered ? session.results[session.index] === true : null,
    finished,
    correctCount,
    xpEarned: correctCount * XP_PER_CORRECT,
    answer,
    next,
  };
}
