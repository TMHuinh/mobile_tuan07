import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function TaskItem({ title }: { title: string }) {
  return (
    <View style={styles.item}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Ionicons name="checkmark-circle-outline" size={22} color="#4CAF50" />
        <Text style={styles.text}>{title}</Text>
      </View>
      <TouchableOpacity>
        <Ionicons name="pencil" size={20} color="#E91E63" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    padding: 12,
    marginVertical: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: { fontSize: 16, marginLeft: 8 },
});
