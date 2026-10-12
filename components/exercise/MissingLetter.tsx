import { useState } from "react";
import { Text, useWindowDimensions, View } from "react-native";
import { AnswerButton, type AnswerState } from "@/components/ui/AnswerButton";
import { HintButton } from "@/components/ui/HintButton";
import { ExerciseCard } from "./ExerciseCard";
import type { ExerciseProps } from "./types";

export function MissingLetter({ exercise, onAnswer }: ExerciseProps<"missing-letter">) {
  const { width, height } = useWindowDimensions();
  const [picked, setPicked] = useState<string | null>(null);
  const landscape = width > height && width >= 700;
  const correct = picked === exercise.answer;

  const stateOf = (option: string): AnswerState => {
    if (picked === null) return "idle";
    if (option === exercise.answer) return "correct";
    return option === picked ? "wrong" : "idle";
  };

  const pick = (option: string) => {
    if (picked !== null) return;
    setPicked(option);
    onAnswer(option === exercise.answer);
  };

  const gapStyle =
    picked === null ? "border-dashed border-accent bg-accent/25" : correct ? "border-success bg-success/20" : "border-error bg-error/20";

  return (
    <View className={`w-full gap-6 ${landscape ? "flex-row items-stretch" : ""}`}>
      <ExerciseCard className={`${landscape ? "flex-1" : "w-full"}`}>
        <Text className="text-center font-task text-[20px] text-textMuted">Egészítsd ki a hiányzó betűket!</Text>
        <View className="flex-1 items-center justify-center py-4">
          <View className="flex-row flex-wrap items-center justify-center">
            <Text className="font-title text-[72px] leading-[88px] text-text">{exercise.before}</Text>
            <View className={`mx-1 h-[88px] min-w-[96px] items-center justify-center rounded-2xl border-2 px-2 ${gapStyle}`}>
              <Text className="font-title text-[64px] leading-[76px] text-text">{picked ?? ""}</Text>
            </View>
            <Text className="font-title text-[72px] leading-[88px] text-text">{exercise.after}</Text>
          </View>
        </View>
      </ExerciseCard>
      <View className={`gap-4 ${landscape ? "flex-1 justify-center" : "w-full"}`}>
        {exercise.options.map((option) => (
          <AnswerButton key={option} large tall label={option} state={stateOf(option)} disabled={picked !== null} onPress={() => pick(option)} />
        ))}
        <HintButton hint={exercise.hint} />
      </View>
    </View>
  );
}
