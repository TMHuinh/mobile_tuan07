import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter, useFocusEffect } from "expo-router"; // 👈 thêm useFocusEffect
import { Ionicons } from "@expo/vector-icons";
import TaskItem from "../../components/TaskItem";

export default function HomeScreen() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [search, setSearch] = useState("");
  const router = useRouter();

  // ✅ Load lại mỗi khi quay về màn hình này
  useFocusEffect(
    useCallback(() => {
      const loadData = async () => {
        const storedName = await AsyncStorage.getItem("username");
        const storedTasks = await AsyncStorage.getItem("tasks");
        if (storedName) setName(storedName);
        if (storedTasks) setTasks(JSON.parse(storedTasks));
      };
      loadData();
    }, [])
  );

  const filteredTasks = tasks.filter((t) =>
    t.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: "https://i.pravatar.cc/100" }}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.name}>Hi {name}</Text>
          <Text style={styles.subtitle}>Have a great day ahead</Text>
        </View>
      </View>

      <TextInput
        placeholder="Search"
        style={styles.search}
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filteredTasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <TaskItem title={item} />}
        ListEmptyComponent={<Text style={{ textAlign: "center" }}>No tasks yet</Text>}
      />

      <TouchableOpacity style={styles.addBtn} onPress={() => router.push("/add")}>
        <Ionicons name="add" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  name: { fontSize: 18, fontWeight: "bold" },
  subtitle: { color: "#888" },
  search: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  addBtn: {
    position: "absolute",
    bottom: 30,
    right: 30,
    backgroundColor: "#00BCD4",
    padding: 16,
    borderRadius: 50,
  },
});
