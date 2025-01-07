import { router } from "expo-router";
import { useEffect, useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  Pressable,
  SafeAreaView,
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from "react-native";

import { formatDate } from "../../utils/date";
import { getWorkoutPlanById } from "../../api/workoutPlan";
import { WorkoutPlan } from "../../types/workoutPlan";

import { styles } from "./style";

import { Colors } from "../../styles/Colors";

import WorkoutPlanCard from "../Planilha/WorkoutPlanCard";

interface PlanilhaDetailsScreenProps {
  id: string;
  startDate: string;
  endDate: string;
}

export default function WorkoutPlanDetailsScreen({
  id,
  startDate,
  endDate,
}: PlanilhaDetailsScreenProps) {
  const [workoutPlan, setWorkoutPlan] = useState<WorkoutPlan>();
  const [loadingData, setLoadingData] = useState(false);

  function navigateBack() {
    router.back();
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
      pathname: `/trainingBlock/${blockId}`,
      params: { sessionTitle, blockTitle, hasDone: "false" },
    });
  }

  async function getWorkoutPlan() {
    setLoadingData(true);
    const workoutPlan = await getWorkoutPlanById(id);
    setLoadingData(false);
    if (!workoutPlan) return;
    setWorkoutPlan(workoutPlan);
  }

  useEffect(() => {
    getWorkoutPlan();
  }, []);

  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.headerContainer}>
        <Pressable onPress={navigateBack} style={styles.backBtnContainer}>
          <Entypo name="chevron-thin-left" size={24} color={Colors.whiteF5} />
        </Pressable>
        <Text style={styles.title}>Histórico de treino</Text>
        <View style={styles.backBtnContainer} />
      </View>
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>{formatDate(startDate)}</Text>
        <FontAwesome5
          name="long-arrow-alt-right"
          size={24}
          color={Colors.whiteF5}
        />
        <Text style={styles.dateText}>{formatDate(endDate)}</Text>
      </View>
      {loadingData && (
        <ActivityIndicator
          size="large"
          color={Colors.primaryGreen}
          style={{ paddingTop: 80 }}
        />
      )}
      {!loadingData && workoutPlan && (
        <FlatList
          data={workoutPlan.sessoes}
          renderItem={({ item }) => (
            <WorkoutPlanCard
              session={item}
              handlePressBlock={navigateToTrainingBlockDetails}
            />
          )}
          contentContainerStyle={{ gap: 20 }}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={() => <View style={{ height: 20 }} />}
        />
      )}
    </SafeAreaView>
  );
}
