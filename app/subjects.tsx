import { Text, View } from "react-native";

// ÁTMENETI: a Tantárgyválasztó feladat cseréli le
export default function SubjectsScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="font-title text-[28px] text-text">Válassz tantárgyat!</Text>
    </View>
  );
}
