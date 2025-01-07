import { Stack } from "expo-router";

export default function WorkoutPlanDetailsLayout() {
  return (
    <Stack initialRouteName="[id]" screenOptions={{ headerShown: false }} />
  );
}
