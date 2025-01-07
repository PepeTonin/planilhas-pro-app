import { useGlobalSearchParams } from "expo-router";
import WorkoutPlanDetailsScreen from "../../../screens/WorkoutPlanDetails";

export default function WorkoutPlanDetails() {
  const { id, startDate, endDate } = useGlobalSearchParams();

  return (
    <WorkoutPlanDetailsScreen
      id={id as string}
      startDate={startDate as string}
      endDate={endDate as string}
    />
  );
}
