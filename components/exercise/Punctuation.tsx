import { useState } from "react";
import { Text, useWindowDimensions, View } from "react-native";
import { AnswerButton, type AnswerState } from "@/components/ui/AnswerButton";
import { Card } from "@/components/ui/Card";
import type { ExerciseProps } from "./types";

export function Punctuation({ exercise, onAnswer }: ExerciseProps<"punctuation">) {
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
      <Card className={`gap-4 ${landscape ? "flex-1 self-stretch justify-center" : "w-full"}`}>
        <Text className="font-task text-[22px] text-textMuted">Milyen írásjel kerül a mondat végére?</Text>
        <View className="flex-row flex-wrap items-end">
          <Text className="font-task text-[30px] leading-[44px] text-text">{exercise.sentence}</Text>
          <View className={`ml-1 h-[48px] min-w-[44px] items-center justify-center rounded-xl border-2 px-2 ${gapStyle}`}>
            <Text className="font-title text-[32px] text-text">{picked ?? ""}</Text>
          </View>
        </View>
        {exercise.hint && <Text className="font-body text-[20px] text-textMuted">{exercise.hint}</Text>}
      </Card>
      <View className={`flex-row gap-3 ${landscape ? "flex-1" : "w-full"}`}>
        {exercise.options.map((option) => (
          <View key={option} className="flex-1">
            <AnswerButton large label={option} state={stateOf(option)} disabled={picked !== null} onPress={() => pick(option)} />
          </View>
        ))}
      </View>
    </View>
  );
}
