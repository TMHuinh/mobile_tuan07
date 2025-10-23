import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

const phoneImages = {
  red: require("../assets/images/red.png"),
  blue: require("../assets/images/blue.png"),
  black: require("../assets/images/black.png"),
  lightblue: require("../assets/images/white.png"),
};

export default function ConfirmColorScreen() {
  const { color } = useLocalSearchParams();
  const router = useRouter();
  const colors = ["lightblue", "red", "black", "blue"];

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.productInfo}>
        <Image source={phoneImages[color as keyof typeof phoneImages]} style={styles.imageSmall} />
        <View style={{ marginLeft: 15 }}>
          <Text style={styles.titleSmall}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
          <Text>Màu: {color}</Text>
          <Text>Cung cấp bởi: Tiki</Text>
          <Text>1.790.000 đ</Text>
        </View>
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Chọn một màu bên dưới:</Text>
        {colors.map((c) => (
          <TouchableOpacity
            key={c}
            style={[styles.colorBox, { backgroundColor: c }]}
            onPress={() => router.push({ pathname: "/confirm-color", params: { color: c } })}
          />
        ))}

        <TouchableOpacity
          style={styles.doneButton}
          onPress={() => router.push({ pathname: "/final", params: { color } })}
        >
          <Text style={styles.doneText}>XONG</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: "center" },
  productInfo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  imageSmall: { width: 50, height: 50, resizeMode: "contain" },
  titleSmall: { fontSize: 15, fontWeight: "500" },
  title: { fontSize: 18, marginVertical: 10 },
  colorBox: { width: 80, height: 80, marginVertical: 8, borderRadius: 10 },
  doneButton: {
    marginTop: 20,
    backgroundColor: "#4169E1",
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 10,
  },
  doneText: { color: "#fff", fontSize: 16 },
});
