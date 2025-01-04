import { Pressable, View, Text } from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import { styles } from "./style";
import { formatDate } from "../../../utils/date";
import { Colors } from "../../../styles/Colors";

interface HistoryCardProps {
  workoutPlanId: number;
  startDate: string;
  endDate: string;
  onCardPress: (id: number) => void;
}

export default function HistoryCard({
  workoutPlanId,
  startDate,
  endDate,
  onCardPress,
}: HistoryCardProps) {
  return (
    <View style={styles.container}>
      <Text></Text>
      <View style={styles.textContainer}>
        <Text style={styles.label}>Planilha realizada</Text>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>{formatDate(startDate)}</Text>
          <FontAwesome5
            name="long-arrow-alt-right"
            size={24}
            color={Colors.lightGray}
          />
          <Text style={styles.date}>{formatDate(endDate)}</Text>
        </View>
      </View>
      <Pressable
        onPress={() => onCardPress(workoutPlanId)}
        style={styles.btnContainer}
      >
        <EvilIcons name="external-link" size={48} color={Colors.whiteF5} />
      </Pressable>
    </View>
  );
}
