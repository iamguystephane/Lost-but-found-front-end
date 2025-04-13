import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useContext, useState } from "react";
import { themeContext } from "@/context/themeProvider";
import { Menu, User2Icon } from "lucide-react-native";
import SearchBar from "@/components/custom/search";
import QuickFilters from "@/components/custom/quick-filters";
export const metadata = {
  title: "Losti - Home",
  description: "Welcome to the homepage of Losti",
};

const HomePage = () => {
  const { colorScheme, theme } = useContext(themeContext);
  if (!theme) return null;
  const styles = stylings(theme, colorScheme);
  return (
    <ThemedView>
      <SafeAreaView>
        <ScrollView>
          <ThemedView className="flex !min-h-screen">
            <ThemedView className="flex flex-row items-center justify-between p-8">
              <TouchableOpacity>
                <Menu color={theme.reverse} />
              </TouchableOpacity>
              <ThemedText className="font-bold !text-2xl"> Losti </ThemedText>
              <TouchableOpacity style={styles.profile}>
                <User2Icon color={theme.background} />
              </TouchableOpacity>
            </ThemedView>
            <View>
              <SearchBar />
              <QuickFilters />
            </View>
          </ThemedView>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
};

export default HomePage;

const stylings = (theme, colorScheme) => {
  return StyleSheet.create({
    profile: {
      borderRadius: "50%",
      backgroundColor: theme.reverse,
      width: 30,
      height: 30,
      padding: 10,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  });
};
