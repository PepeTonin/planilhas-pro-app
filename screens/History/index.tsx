import { useEffect, useState } from "react";
import { View, ActivityIndicator, FlatList, Text } from "react-native";

import { getWorkoutPlanHistory } from "../../api/workoutPlan";
import { useAppSelector } from "../../store/store";

import { styles } from "./style";
import { Colors } from "../../styles/Colors";

import { ExpiredWorkoutPlan } from "../../types/workoutPlan";

import HistoryCard from "./HistoryCard";
import PrimaryCard from "../../components/PrimaryCard";
import LoadingScreen from "../../components/LoadingScreen";

export default function HistoryScreen() {
  const [history, setHistory] = useState<ExpiredWorkoutPlan[]>();
  const [loadingHistory, setLoadingHistory] = useState(true);

  const { user } = useAppSelector((state) => state.auth);

  async function populateHistory() {
    if (!user) return;
    setLoadingHistory(true);
    const expiredWorkoutPlans = await getWorkoutPlanHistory(user?.alunoId);
    setLoadingHistory(false);
    if (!expiredWorkoutPlans) return;
    setHistory(expiredWorkoutPlans);
  }

  function navigateToWorkoutPlanDetails(id: number) {
    console.log("Navigate to workout plan details", id);
  }

  useEffect(() => {
    populateHistory();
  }, []);

  console.log(history);

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
              workoutPlanId={item.idPlanilha}
              startDate={item.dataInicio}
              endDate={item.dataFim}
              onCardPress={navigateToWorkoutPlanDetails}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ gap: 20 }}
        />
      ) : (
        <PrimaryCard
          InnerTextElement={
            <Text style={styles.cardInnerText}>
              Não há nenhuma planilha ativa!
            </Text>
          }
        />
      )}
    </View>
  );
}
