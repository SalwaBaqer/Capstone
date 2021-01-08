import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

//components
import List from "./components/events/List";
import AddNewEventScreen from "./screens/AddNewEventScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>my event</Text>
      <List />
      <AddNewEventScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
