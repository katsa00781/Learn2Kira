import { createContext, type ReactNode, useContext } from "react";
import { useWindowDimensions, View } from "react-native";
import { Mascot, type MascotState } from "@/components/mascot/Mascot";
import { softShadow } from "@/constants/shadows";

/** A gyakorló képernyő ebben adja át a maskot állapotát; null = nincs maskot a kártyában. */
export const ExerciseMascotContext = createContext<MascotState | null>(null);

type Props = { children: ReactNode; className?: string };

/** A feladat kérdéskártyája. Ha a képernyő maskotot ad, az a kártya bal alsó sarkában áll. */
export function ExerciseCard({ children, className = "" }: Props) {
  const mascot = useContext(ExerciseMascotContext);
  const { width, height } = useWindowDimensions();
  const landscape = width > height && width >= 700;
  const wide = width >= 700;
  return (
    <View
      className={`rounded-card bg-surface px-6 pt-6 ${mascot ? (wide ? "pb-[150px]" : "pb-[104px]") : "pb-6"} ${landscape ? "min-h-[360px]" : ""} ${className}`}
      style={softShadow}
    >
      {children}
      {mascot && (
        <View pointerEvents="none" className="absolute bottom-3 left-4">
          <Mascot state={mascot} size={wide ? 130 : 88} />
        </View>
      )}
    </View>
  );
}
