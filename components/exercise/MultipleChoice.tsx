import { useState } from "react";
import { Text, useWindowDimensions, View } from "react-native";
import { AnswerButton, type AnswerState } from "@/components/ui/AnswerButton";
import { ExerciseCard } from "./ExerciseCard";
import type { ExerciseProps } from "./types";

export function MultipleChoice({ exercise, onAnswer }: ExerciseProps<"multiple-choice">) {
  const { width, height } = useWindowDimensions();
  const [picked, setPicked] = useState<number | null>(null);
  const landscape = width > height && width >= 700;

  const stateOf = (index: number): AnswerState => {
    if (picked === null) return "idle";
    if (index === exercise.answerIndex) return "correct";
    return index === picked ? "wrong" : "idle";
  };

  const pick = (index: number) => {
    if (picked !== null) return;
    setPicked(index);
    onAnswer(index === exercise.answerIndex);
  };

  return (
    <View className={`w-full gap-6 ${landscape ? "flex-row items-start" : ""}`}>
      <ExerciseCard className={landscape ? "flex-1 justify-center self-stretch" : "w-full"}>
        <Text className="font-task text-[26px] leading-9 text-text">{exercise.question}</Text>
      </ExerciseCard>
      <View className={`gap-3 ${landscape ? "flex-1" : "w-full"}`}>
        {exercise.options.map((option, index) => (
          <AnswerButton
            key={`${index}-${option}`}
            label={option}
            state={stateOf(index)}
            disabled={picked !== null}
            onPress={() => pick(index)}
          />
        ))}
      </View>
    </View>
  );
}
