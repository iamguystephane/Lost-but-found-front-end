import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { ScrollView, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useContext, useState } from "react";
import { themeContext } from "@/context/themeProvider";

export const metadata = {
  title: "Losti - Home",
  description: "Welcome to the homepage of Losti",
};

const HomePage = () => {
  const { colorScheme, theme } = useContext(themeContext);
  return (
    <ThemedView>
      <SafeAreaView>
        <ScrollView>
          <ThemedView className="flex items-center justify-center !min-h-screen">
            <ThemedText> Hello world! </ThemedText>
          </ThemedView>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
};

export default HomePage;
