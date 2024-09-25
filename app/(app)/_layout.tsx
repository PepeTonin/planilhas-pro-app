import { router, Stack } from "expo-router";
import { getAuth } from "firebase/auth";
import { useState } from "react";

export default function RootLayout() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  getAuth().onIdTokenChanged((user) => {
    if (user) {
      router.replace("/(home)/");
    }
  });

  return (
    <Stack screenOptions={{ headerShown: false }} initialRouteName="(auth)" />
  );
}
