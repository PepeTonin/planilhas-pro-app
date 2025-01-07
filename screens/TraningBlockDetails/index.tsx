import { useEffect, useState } from "react";
import {
  Pressable,
  SafeAreaView,
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { router } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";

import { getTrainingBlockDetails } from "../../api/workoutPlan";

import { styles } from "./style";

import { Colors } from "../../styles/Colors";

import { TrainingBlockDetails } from "../../types/workoutPlan";
import TrainingCard from "./TrainingCard";

interface TraningBlockDetailsScreenProps {
  trainingBlockId: string;
  blockTitle: string;
  sessionTitle: string;
  hasDone?: boolean;
}

export default function TraningBlockDetailsScreen({
  trainingBlockId,
  blockTitle,
  sessionTitle,
  hasDone = true,
}: TraningBlockDetailsScreenProps) {
  const [trainingBlockDetails, setTrainingBlockDetails] =
    useState<TrainingBlockDetails>();
  const [loadingData, setLoadingData] = useState(false);

  const [doneExercises, setDoneExercises] = useState<number[]>([]);

  function toggleExerciseDone(id: number) {
    if (doneExercises.includes(id)) {
      setDoneExercises(doneExercises.filter((exercise) => exercise !== id));
    } else {
      setDoneExercises([...doneExercises, id]);
    }
  }

  function navigateBack() {
    router.back();
  }

  async function fillDetails() {
    setLoadingData(true);
    const response = await getTrainingBlockDetails(Number(trainingBlockId));
    setLoadingData(false);
    if (!response) return;
    setTrainingBlockDetails(response);
  }

  useEffect(() => {
    fillDetails();
  }, []);

  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.headerContainer}>
        <Pressable onPress={navigateBack} style={styles.backBtnContainer}>
          <Entypo name="chevron-thin-left" size={24} color={Colors.whiteF5} />
        </Pressable>
        <Text style={styles.sessionTitle}>{sessionTitle}</Text>
        <View style={styles.backBtnContainer} />
      </View>
      <Text style={styles.blockTitle}>{blockTitle}</Text>
      {loadingData && (
        <ActivityIndicator
          size="large"
          color={Colors.primaryGreen}
          style={{ paddingTop: 80 }}
        />
      )}
      {!loadingData && trainingBlockDetails && (
        <FlatList
          data={trainingBlockDetails.movimentos}
          renderItem={({ item }) => (
            <TrainingCard
              exercise={item}
              isDone={hasDone && doneExercises.includes(item.idMovimento)}
              toggleDone={hasDone ? toggleExerciseDone : undefined}
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
