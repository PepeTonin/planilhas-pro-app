import { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

import { useAuth } from "../../../contexts/AuthContext";
import LoadingScreen from "../../../screens/LoadingScreen";

export default function ProfileScreen() {
  const [isFetching, setIsFetching] = useState(true);
  const { logout, userData, isAuthenticated } =
    useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/");
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (!userData) {
      setIsFetching(true);
    }
    setIsFetching(false);
  }, []);

  function handleLogout() {
    logout();
  }

  if (isFetching) {
    return <LoadingScreen />;
  }

  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      {userData ? (
        <View>
          <Text>Email: {userData.email}</Text>
          <Text>Name: {userData.displayName}</Text>
          <Text>Photo URL: {userData.photoURL}</Text>
          {userData.emailVerified ? (
            <Text>Email Verified</Text>
          ) : (
            <Text>Email Not Verified</Text>
          )}
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
