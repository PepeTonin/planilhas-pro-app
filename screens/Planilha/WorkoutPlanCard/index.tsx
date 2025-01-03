import React from "react";
import { View, Text, Pressable } from "react-native";
import { useState } from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { styles } from "./style";

import { Colors } from "../../../styles/Colors";

import { WorkoutPlanSession } from "../../../types/workoutPlan";

interface WorkoutPlanCardProps {
  isDone: boolean;
  toggleDone: (id: number) => void;
  session: WorkoutPlanSession;
  handlePressBlock: (blockId: number, sessionId: number) => void;
}

export default function WorkoutPlanCard({
  isDone,
  session,
  toggleDone,
  handlePressBlock,
}: WorkoutPlanCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleChevronClick() {
    setIsExpanded(!isExpanded);
  }

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Pressable onPress={() => toggleDone(session.idSessao)}>
          {isDone ? (
            <FontAwesome5
              name="check-square"
              size={24}
              color={Colors.whiteF5}
            />
          ) : (
            <FontAwesome5 name="square" size={24} color={Colors.whiteF5} />
          )}
        </Pressable>
        <Text
          numberOfLines={1}
          style={[styles.title, isDone && styles.titleDone]}
        >
          {session.tituloSessao.toUpperCase()}
        </Text>
        <Pressable onPress={handleChevronClick}>
          {isExpanded ? (
            <Entypo name="chevron-thin-up" size={24} color={Colors.whiteF5} />
          ) : (
            <Entypo name="chevron-thin-down" size={24} color={Colors.whiteF5} />
          )}
        </Pressable>
      </View>

      {isExpanded && (
        <View style={styles.expandedContainer}>
          {session.blocos.map((bloco) =>
            bloco.tituloBloco ? (
              <Pressable
                key={bloco.idBloco}
                style={styles.blockContainer}
                onPress={() =>
                  handlePressBlock(bloco.idBloco, session.idSessao)
                }
              >
                <MaterialCommunityIcons
                  name="file-table-outline"
                  size={28}
                  color={Colors.primaryGreen}
                />
                <Text style={styles.blockTitle}>{bloco.tituloBloco}</Text>
              </Pressable>
            ) : (
              <View key={bloco.idBloco} style={styles.blockContainer}>
                <FontAwesome5
                  name="bed"
                  size={24}
                  color={Colors.primaryGreen}
                />
                <Text style={styles.blockTitle}>Descanso</Text>
              </View>
            )
          )}
        </View>
      )}
    </View>
  );
}
