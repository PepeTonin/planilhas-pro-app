import { router } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, View, Text } from "react-native";

import { getActiveWorkoutPlan } from "../../api/workoutPlan";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { updateUserData } from "../../store/features/auth";

import { styles } from "./style";

import { WorkoutPlan } from "../../types/workoutPlan";

import WorkoutPlanCard from "./WorkoutPlanCard";
import LoadingScreen from "../../components/LoadingScreen";
import PrimaryCard from "../../components/PrimaryCard";

export default function PlanilhaScreen() {
  const [isLoadingWorkout, setIsLoadingWorkout] = useState(false);
  const [workoutPlan, setWorkoutPlan] = useState<WorkoutPlan>();

  const [doneSessions, setDoneSessions] = useState<number[]>([]);

  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  function toggleSessionDone(id: number) {
    if (doneSessions.includes(id)) {
      setDoneSessions(doneSessions.filter((session) => session !== id));
    } else {
      setDoneSessions([...doneSessions, id]);
    }
  }

  async function getWorkoutPlan() {
    if (!user) return;
    setIsLoadingWorkout(true);
    const workoutPlan = await getActiveWorkoutPlan(user.alunoId);
    setIsLoadingWorkout(false);
    if (!workoutPlan) return;
    setWorkoutPlan(workoutPlan);
  }

  async function handleSyncWorkoutPlan() {
    await getWorkoutPlan();
    if (!user) return;
    dispatch(updateUserData(user.firebaseId));
  }

  function navigateToTrainingBlockDetails(blockId: number, sessionId: number) {
    const sessionTitle = workoutPlan?.sessoes.find(
      (session) => session.idSessao === sessionId
    )?.tituloSessao;
    const blockTitle = workoutPlan?.sessoes
      .find((session) => session.idSessao === sessionId)
      ?.blocos.find((block) => block.idBloco === blockId)?.tituloBloco;
    if (!sessionTitle || !blockTitle) return;
    router.push({
      pathname: `trainingBlock/${blockId}`,
      params: { sessionTitle, blockTitle },
    });
  }

  useEffect(() => {
    getWorkoutPlan();
  }, []);

  if (isLoadingWorkout) {
    return <LoadingScreen />;
  }

  return (
    <View style={styles.container}>
      {workoutPlan && workoutPlan.sessoes.length > 0 ? (
        <FlatList
          data={workoutPlan.sessoes}
          renderItem={({ item }) => (
            <WorkoutPlanCard
              session={item}
              isDone={doneSessions.includes(item.idSessao)}
              toggleDone={toggleSessionDone}
              handlePressBlock={navigateToTrainingBlockDetails}
            />
          )}
          contentContainerStyle={{ gap: 20 }}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={() => <View style={{ height: 20 }} />}
        />
      ) : (
        <PrimaryCard variant="sync" onPress={handleSyncWorkoutPlan}>
          <Text style={styles.cardInnerText}>
            Não há nenhuma planilha ativa!
          </Text>
        </PrimaryCard>
      )}
    </View>
  );
}
