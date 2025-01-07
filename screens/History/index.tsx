import { useEffect, useState } from "react";
import { View, FlatList, Text } from "react-native";
import { router } from "expo-router";

import { getWorkoutPlanHistory } from "../../api/workoutPlan";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { updateUserData } from "../../store/features/auth";

import { styles } from "./style";

import { ExpiredWorkoutPlan } from "../../types/workoutPlan";

import HistoryCard from "./HistoryCard";
import PrimaryCard from "../../components/PrimaryCard";
import LoadingScreen from "../../components/LoadingScreen";

export default function HistoryScreen() {
  const [history, setHistory] = useState<ExpiredWorkoutPlan[]>();
  const [loadingHistory, setLoadingHistory] = useState(true);

  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  async function populateHistory() {
    if (!user) return;
    setLoadingHistory(true);
    const expiredWorkoutPlans = await getWorkoutPlanHistory(user?.alunoId);
    setLoadingHistory(false);
    if (!expiredWorkoutPlans) return;
    setHistory(expiredWorkoutPlans);
  }

  async function handleSyncHistory() {
    await populateHistory();
    if (!user) return;
    dispatch(updateUserData(user.firebaseId));
  }

  function navigateToWorkoutPlanDetails(workoutPlan: ExpiredWorkoutPlan) {
    router.push({
      pathname: `/workoutPlan/${workoutPlan.idPlanilha}`,
      params: {
        startDate: workoutPlan.dataInicio,
        endDate: workoutPlan.dataFim,
      },
    });
  }

  useEffect(() => {
    populateHistory();
  }, []);

  if (loadingHistory) {
    return <LoadingScreen />;
  }

  return (
    <View style={styles.container}>
      {history && history.length > 0 ? (
        <FlatList
          data={history}
          renderItem={({ item }) => (
            <HistoryCard
              workoutPlan={item}
              onCardPress={navigateToWorkoutPlanDetails}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ gap: 20 }}
        />
      ) : (
        <PrimaryCard
          variant="sync"
          onPress={handleSyncHistory}
          loadingBtn={loadingHistory}
        >
          <Text style={styles.cardInnerText}>
            Não há nenhuma planilha em seu histórico de treinos!
          </Text>
        </PrimaryCard>
      )}
    </View>
  );
}
