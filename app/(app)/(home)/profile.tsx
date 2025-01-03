import { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

import { useAppDispatch, useAppSelector } from "../../../store/store";
import { logout } from "../../../store/features/auth";

export default function ProfileScreen() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  function handleLogout() {
    router.replace("/(auth)/");
    dispatch(logout());
  }

  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      {user ? (
        <View>
          <Text>Email: {user.email}</Text>
          <Text>Name: {user.nome}</Text>
        </View>
      ) : null}
      <Button title="Logout" onPress={handleLogout} />
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
