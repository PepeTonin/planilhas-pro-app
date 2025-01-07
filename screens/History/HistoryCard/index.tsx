import { Pressable, View, Text } from "react-native";
import Octicons from "@expo/vector-icons/Octicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import { styles } from "./style";
import { formatDate } from "../../../utils/date";
import { Colors } from "../../../styles/Colors";
import { ExpiredWorkoutPlan } from "../../../types/workoutPlan";

interface HistoryCardProps {
  workoutPlan: ExpiredWorkoutPlan;
  onCardPress: (workoutPlan: ExpiredWorkoutPlan) => void;
}

export default function HistoryCard({
  workoutPlan,
  onCardPress,
}: HistoryCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.label}>Planilha realizada</Text>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>{formatDate(workoutPlan.dataInicio)}</Text>
          <FontAwesome5
            name="long-arrow-alt-right"
            size={24}
            color={Colors.lightGray}
          />
          <Text style={styles.date}>{formatDate(workoutPlan.dataFim)}</Text>
        </View>
      </View>
      <Pressable
        onPress={() => onCardPress(workoutPlan)}
        style={styles.btnContainer}
      >
        <Octicons name="link-external" size={42} color={Colors.whiteF5} />
      </Pressable>
    </View>
  );
}
