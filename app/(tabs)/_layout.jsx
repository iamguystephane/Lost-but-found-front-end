import { Ionicons } from "@expo/vector-icons";
import { House, MapPin, Settings, LibraryBig } from "lucide-react-native";
import { Tabs } from "expo-router";
import { useContext } from "react";
import { themeContext } from "@/context/themeProvider";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";

export default function TabsLayout() {
  const { theme, colorScheme } = useContext(themeContext);
  if (!theme) return null;
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarItemStyle: {
          display: "flex",
          alignItems: "center",
          marginHorizontal: -5,
        },
        tabBarStyle: {
          backgroundColor: colorScheme === "dark" ? "#fff" : "#000",
          borderRadius: 35,
          width: "95%",
          height: 70,
          position: "absolute",
          marginLeft: 10,
          bottom: 20,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            />
          ),
          tabBarIcon: ({ focused }) => {
            return (
              <View className="items-center">
                <House size={25} color={theme.background} />
                {focused && (
                  <View
                    style={{
                      height: 4,
                      width: 20,
                      backgroundColor: colorScheme === "dark" ? "#000" : "#fff",
                      borderRadius: 2,
                      marginTop: 4,
                    }}
                  />
                )}
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="find"
        options={{
          headerShown: false,
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            />
          ),
          tabBarIcon: ({ focused }) => {
            return (
              <View className="items-center">
                <MapPin size={25} color={theme.background} />
                {focused && (
                  <View
                    style={{
                      height: 4,
                      width: 20,
                      backgroundColor: colorScheme === "dark" ? "#000" : "#fff",
                      borderRadius: 2,
                      marginTop: 4,
                    }}
                  />
                )}
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="arsenal"
        options={{
          headerShown: false,
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            />
          ),
          tabBarIcon: ({ focused }) => {
            return (
              <View className="items-center">
                <LibraryBig size={25} color={theme.background} />
                {focused && (
                  <View
                    style={{
                      height: 4,
                      width: 20,
                      backgroundColor: colorScheme === "dark" ? "#000" : "#fff",
                      borderRadius: 2,
                      marginTop: 4,
                    }}
                  />
                )}
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          headerShown: false,
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            />
          ),
          tabBarIcon: ({ focused }) => {
            return (
              <View className="items-center">
                <Settings size={25} color={theme.background} />
                {focused && (
                  <View
                    style={{
                      height: 4,
                      width: 20,
                      backgroundColor: colorScheme === "dark" ? "#000" : "#fff",
                      borderRadius: 2,
                      marginTop: 4,
                    }}
                  />
                )}
              </View>
            );
          },
        }}
      />
    </Tabs>
  );
}
