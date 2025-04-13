import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { Search } from "lucide-react-native";
import { themeContext } from "@/context/themeProvider";
import { useContext } from "react";
const SearchBar = () => {
  const { theme, colorScheme } = useContext(themeContext);
  if (!theme) return null;
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.reverse,
      width: "90%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      alignSelf: "center",
      borderRadius: 15,
      shadowOffset: {
        width: 5,
        height: 5,
      },
      shadowOpacity: 0.35,
      shadowRadius: 4,
      shadowColor: theme.reverse,
      elevation: 5,
      paddingRight: 10,
    },
    input: {
      borderWidth: 0,
      width: "85%",
      paddingHorizontal: 10,
      height: 50,
      color: theme.background,
    },
    search: {
        backgroundColor: theme.background,
        borderRadius: 10,
        width: 40,
        height: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
  });
  return (
    <>
      <View style={styles.container}>
        <TextInput
          placeholderTextColor={theme.background}
          style={styles.input}
          placeholder="Search for keys, phones, bags, etc."
        />
        <TouchableOpacity style={styles.search}>
          <Search color={theme.reverse}/>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default SearchBar;
