import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useContext } from "react";
import { themeContext } from "@/context/themeProvider";
import { TouchableOpacity } from "react-native";
import CustomTabBar from "@/components/custom/tabBar";
import { View } from "react-native";

export default function TabsLayout() {
  const { theme, colorScheme } = useContext(themeContext);
  if (!theme) return null;
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="find" />
      <Tabs.Screen name="arsenal" />
      <Tabs.Screen name="settings" />
    </Tabs>
  );
}
