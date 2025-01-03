import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Anteriores() {
  return (
    <View style={styles.container}>
      <Text>Welcome, to anteriores</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
