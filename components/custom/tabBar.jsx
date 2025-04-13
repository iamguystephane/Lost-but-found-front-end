import React, { useContext, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";
import {
  House,
  MapPin,
  Settings as CogIcon,
  LibraryBig,
} from "lucide-react-native";
import { themeContext } from "@/context/themeProvider";

const ICONS = {
  index: House,
  find: MapPin,
  arsenal: LibraryBig,
  settings: CogIcon,
};

const CustomTabBar = ({ state, descriptors, navigation }) => {
  const { theme, colorScheme } = useContext(themeContext);

  const scaleAnimations = useRef(
    state.routes.map((_, i) => new Animated.Value(i === state.index ? 1.2 : 1))
  ).current;

  useEffect(() => {
    scaleAnimations.forEach((anim, i) => {
      Animated.spring(anim, {
        toValue: i === state.index ? 1.4 : 1,
        useNativeDriver: true,
        friction: 3,
      }).start();
    });
  }, [state.index]);

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      width: "100%",
      alignItems: "center",
      justifyContent: "space-evenly",
      height: 70,
      position: "absolute",
      bottom: 20,
      backgroundColor: colorScheme === "dark" ? "#fff" : "#000",
      borderRadius: 35,
    },
    underline: {
      marginTop: 4,
      height: 3,
      width: 20,
      backgroundColor: theme.background,
      borderRadius: 2,
    },
  });

  if (!theme) return null;

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const IconComponent = ICONS[route.name] || (() => null);

        return (
          <TouchableOpacity key={route.key} onPress={onPress}>
            <Animated.View
              style={{
                transform: [{ scale: scaleAnimations[index] }],
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
              }}
            >
              <IconComponent
                size={23}
                color={theme.background}
                style={styles.tabIcons}
              />
              {isFocused && <View style={styles.underline} />}
            </Animated.View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTabBar;
