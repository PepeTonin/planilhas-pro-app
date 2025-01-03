import { Stack } from "expo-router";

export default function TrainingBlockLayout() {
  return (
    <Stack initialRouteName="[id]" screenOptions={{ headerShown: false }} />
  );
}
