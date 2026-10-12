import { useState } from "react";
import { Pressable, Text, useWindowDimensions, View } from "react-native";
import { AnswerButton } from "@/components/ui/AnswerButton";
import { Card } from "@/components/ui/Card";
import { isOrderCorrect } from "@/lib/answers";
import type { ExerciseProps } from "./types";

/** Sorbarendezés érintéssel: a gyerek a sorrendben érinti meg az elemeket, a sorszámozott helyekre kerülnek. */
export function OrderItems({ exercise, onAnswer }: ExerciseProps<"order-items">) {
  const { width, height } = useWindowDimensions();
  const [placed, setPlaced] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);
  const landscape = width > height && width >= 700;
  const complete = placed.length === exercise.items.length;
  const correct = checked && isOrderCorrect(placed, exercise.correctOrder);

  const place = (item: string) => setPlaced((current) => [...current, item]);
  const remove = (index: number) => setPlaced((current) => current.filter((_, i) => i !== index));

  const check = () => {
    if (checked || !complete) return;
    setChecked(true);
    onAnswer(isOrderCorrect(placed, exercise.correctOrder));
  };

  const slotStyle = (index: number): string => {
    const item = placed[index];
    if (item === undefined) return "border-dashed border-primary bg-background";
    if (!checked) return "border-secondary/40 bg-surface";
    return item === exercise.correctOrder[index] ? "border-success bg-success/20" : "border-error bg-error/20";
  };

  return (
    <View className={`w-full gap-6 ${landscape ? "flex-row items-start" : ""}`}>
      <Card className={`gap-4 ${landscape ? "flex-1 self-stretch" : "w-full"}`}>
        <Text className="font-task text-[24px] leading-8 text-text">{exercise.hint ?? "Tedd sorrendbe az elemeket!"}</Text>
        {exercise.items.map((_, index) => (
          <Pressable
            key={index}
            accessibilityRole="button"
            accessibilityLabel={placed[index] ? `${placed[index]} visszavétele` : `${index + 1}. hely`}
            disabled={checked || placed[index] === undefined}
            onPress={() => remove(index)}
            className={`min-h-[60px] flex-row items-center gap-4 rounded-card border-2 px-4 ${slotStyle(index)}`}
          >
            <Text className="w-8 font-title text-[24px] text-primary">{index + 1}.</Text>
            <Text className="flex-1 font-task text-[22px] text-text">{placed[index] ?? ""}</Text>
          </Pressable>
        ))}
        {checked && !correct && (
          <Text className="font-task text-[20px] leading-7 text-text">Helyes sorrend: {exercise.correctOrder.join(" → ")}</Text>
        )}
      </Card>
      <View className={`gap-3 ${landscape ? "flex-1" : "w-full"}`}>
        {exercise.items.map((item) => {
          const used = placed.includes(item);
          return (
            <View key={item} className={used ? "opacity-30" : ""}>
              <AnswerButton label={item} disabled={used || checked} onPress={() => place(item)} />
            </View>
          );
        })}
        {!checked && (
          <Pressable
            accessibilityRole="button"
            disabled={!complete}
            onPress={check}
            className={`min-h-[60px] items-center justify-center rounded-card bg-primary px-6 ${complete ? "" : "opacity-40"}`}
          >
            <Text className="font-title text-[24px] text-surface">Kész</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}
