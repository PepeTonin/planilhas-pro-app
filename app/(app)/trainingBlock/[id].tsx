import { useGlobalSearchParams } from "expo-router";
import TraningBlockDetailsScreen from "../../../screens/TraningBlockDetails";

export default function TrainingBlockDetails() {
  const { id, sessionTitle, blockTitle, hasDone } = useGlobalSearchParams();

  return (
    <TraningBlockDetailsScreen
      trainingBlockId={id as string}
      blockTitle={blockTitle as string}
      sessionTitle={sessionTitle as string}
      hasDone={hasDone === "true"}
    />
  );
}
