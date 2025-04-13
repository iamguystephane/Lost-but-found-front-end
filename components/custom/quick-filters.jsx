import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { ShoppingBag, Key, Smartphone, Watch, Copy } from "lucide-react-native";

export default function QuickFilters() {
  const filterData = [
    { id: 1, name: "Bags", icon: ShoppingBag, color: "green" },
    { id: 2, name: "Keys", icon: Key, color: "orange" },
    { id: 3, name: "Phones", icon: Smartphone, color: "blue" },
    { id: 4, name: "Watches", icon: Watch, color: "purple" },
    { id: 5, name: "Others", icon: Copy, color: "gray" },
  ];
  const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        gap: 10,
        marginTop: 15,
        paddingHorizontal: 15,
    },
    card: {
      width: 100,
      height: 100,
      paddingLeft: 10,
      gap: 10,
      borderRadius: 15,
      display: "flex",
      justifyContent: "center",
    },
    text: {
      color: "white",
      textAlign: "left",
    },
  });
  return (
    <FlatList
      data={filterData}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={[styles.card, { backgroundColor: item.color }]}
        >
          <item.icon color="white" />
          <Text style={styles.text}> {item.name} </Text>
        </TouchableOpacity>
      )}
    />
  );
}
