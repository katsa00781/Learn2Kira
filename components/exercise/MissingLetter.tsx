import { useState } from "react";
import { Text, useWindowDimensions, View } from "react-native";
import { AnswerButton, type AnswerState } from "@/components/ui/AnswerButton";
import { Card } from "@/components/ui/Card";
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
    picked === null ? "border-dashed border-primary bg-background" : correct ? "border-success bg-success/20" : "border-error bg-error/20";

  return (
    <View className={`w-full gap-6 ${landscape ? "flex-row items-start" : ""}`}>
      <Card className={`items-center gap-4 ${landscape ? "flex-1 self-stretch justify-center" : "w-full"}`}>
        <View className="flex-row flex-wrap items-center justify-center">
          <Text className="font-title text-[48px] text-text">{exercise.before}</Text>
          <View className={`mx-1 h-[68px] min-w-[64px] items-center justify-center rounded-2xl border-2 px-2 ${gapStyle}`}>
            <Text className="font-title text-[48px] text-text">{picked ?? ""}</Text>
          </View>
          <Text className="font-title text-[48px] text-text">{exercise.after}</Text>
        </View>
        {exercise.hint && <Text className="text-center font-body text-[20px] text-textMuted">{exercise.hint}</Text>}
      </Card>
      <View className={`gap-3 ${landscape ? "flex-1" : "w-full"}`}>
        {exercise.options.map((option) => (
          <AnswerButton key={option} label={option} state={stateOf(option)} disabled={picked !== null} onPress={() => pick(option)} />
        ))}
      </View>
    </View>
  );
}
