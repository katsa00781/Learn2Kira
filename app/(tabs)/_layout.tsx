import { Tabs } from "expo-router";
import { HomeIcon, StarIcon } from "@/components/ui/Icons";
import { colors } from "@/constants/colors";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarStyle: { backgroundColor: colors.surface, borderTopWidth: 0 },
        tabBarLabelStyle: { fontFamily: "Nunito_600SemiBold", fontSize: 14 },
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Kezdőlap", tabBarIcon: ({ color }) => <HomeIcon color={color} /> }} />
      <Tabs.Screen name="rewards" options={{ title: "Jutalmak", tabBarIcon: ({ color }) => <StarIcon color={color} /> }} />
    </Tabs>
  );
}
