import { Text, View } from "react-native";
import { Mascot } from "@/components/mascot/Mascot";

// ÁTMENETI: a Jutalmak képernyő feladat cseréli le
export default function RewardsScreen() {
  return (
    <View className="flex-1 items-center justify-center gap-4 bg-background">
      <Mascot state="base" size={160} />
      <Text className="font-title text-[28px] text-text">Jutalmak hamarosan</Text>
    </View>
  );
}
