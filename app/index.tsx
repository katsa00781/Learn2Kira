import { Image, Text, View } from "react-native";
import { images } from "@/constants/images";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Image source={images.mascotBase} className="h-48 w-48" resizeMode="contain" />
      <Text className="mt-6 font-title text-3xl text-text">Szia Kira!</Text>
    </View>
  );
}
