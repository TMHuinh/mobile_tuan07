import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

const phoneImages = {
  red: require("../assets/images/red.png"),
  blue: require("../assets/images/blue.png"),
  black: require("../assets/images/black.png"),
  lightblue: require("../assets/images/white.png"),
};

export default function FinalScreen() {
  const { color } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Image source={phoneImages[color as keyof typeof phoneImages]} style={styles.image} />
      <Text style={styles.title}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      <Text style={styles.price}>1.790.000 đ</Text>

      <TouchableOpacity style={styles.selectButton}>
        <Text style={styles.selectText}>4 MÀU - CHỌN LOẠI</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.buyText}>CHỌN MUA</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: "center" },
  image: { width: 200, height: 300, resizeMode: "contain" },
  title: { fontSize: 18, marginVertical: 10 },
  price: { fontSize: 22, color: "red", marginVertical: 10 },
  selectButton: {
    backgroundColor: "lightgray",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  selectText: { color: "black", fontSize: 16, textAlign: "center" },
  buyButton: {
    backgroundColor: "red",
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 30,
    marginTop: 20,
  },
  buyText: { color: "white", fontWeight: "bold", fontSize: 16 },
});
