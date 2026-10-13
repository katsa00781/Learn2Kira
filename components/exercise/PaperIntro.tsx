import { Pressable, Text, View } from "react-native";
import { Mascot } from "@/components/mascot/Mascot";
import { NotebookIcon } from "@/components/ui/Icons";
import { darkTones } from "@/constants/colors";

/** A füzetes feladatok bevezető képernyője: nincs időnyomás, a maskot vár. */
export function PaperIntro({ onReady }: { onReady: () => void }) {
  return (
    <View className="flex-1 items-center justify-center gap-6 p-6">
      <Mascot state="base" size={180} />
      <View className="h-[72px] w-[72px] items-center justify-center rounded-full bg-secondary/25">
        <NotebookIcon size={40} color={darkTones.secondary} />
      </View>
      <Text className="text-center font-title text-[32px] text-text">Vedd elő a füzeted!</Text>
      <Text className="max-w-md text-center font-task text-[22px] leading-8 text-textMuted">
        Ezt a feladatot a füzetedben számold ki. Nincs sietség, itt várok.
      </Text>
      <Pressable
        accessibilityRole="button"
        onPress={onReady}
        className="min-h-[60px] items-center justify-center rounded-card bg-primary px-8"
      >
        <Text className="font-title text-[24px] text-surface">Előkészítettem</Text>
      </Pressable>
    </View>
  );
}
