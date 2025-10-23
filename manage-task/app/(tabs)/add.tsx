import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

export default function AddTaskScreen() {
  const [job, setJob] = useState("");
  const router = useRouter();

  const handleAdd = async () => {
    if (job.trim()) {
      const stored = await AsyncStorage.getItem("tasks");
      const tasks = stored ? JSON.parse(stored) : [];
      tasks.push(job);
      await AsyncStorage.setItem("tasks", JSON.stringify(tasks));
      router.push("/home");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>ADD YOUR JOB</Text>
      <TextInput
        style={styles.input}
        placeholder="input your job"
        value={job}
        onChangeText={setJob}
      />
      <TouchableOpacity style={styles.button} onPress={handleAdd}>
        <Text style={styles.buttonText}>FINISH →</Text>
      </TouchableOpacity>

      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/2282/2282163.png",
        }}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", alignItems: "center", padding: 20 },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    width: "90%",
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#00BCD4",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  image: { width: 120, height: 120, marginTop: 40 },
});
