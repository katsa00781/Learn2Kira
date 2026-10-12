import * as Haptics from "expo-haptics";
import { useEffect, useMemo } from "react";
import { exercisesByTopic } from "@/data";
import { useStoresHydrated } from "@/hooks/useStoresHydrated";
import { selectSessionExercises, toDay } from "@/lib/leitner";
import { useProgressStore } from "@/store/progressStore";
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
    // A SortIntoGroups még nincs kész, addig nem kerülhet körbe
    const playable = exercisesByTopic(topicId).filter((e) => e.type !== "sort-into-groups");
    const exercises = selectSessionExercises({ exercises: playable, cards: useReviewStore.getState().cards, today });
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
      useProgressStore.getState().completeSession(correctCount * XP_PER_CORRECT, today);
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
