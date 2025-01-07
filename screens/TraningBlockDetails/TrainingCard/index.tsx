import React from "react";
import { View, Text, Pressable } from "react-native";
import { useState } from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Entypo from "@expo/vector-icons/Entypo";

import { styles } from "./style";

import { Colors } from "../../../styles/Colors";

import { Exercise } from "../../../types/workoutPlan";

interface WorkoutPlanCardProps {
  isDone?: boolean;
  toggleDone?: (id: number) => void;
  exercise: Exercise;
}

export default function TrainingCard({
  isDone,
  exercise,
  toggleDone,
}: WorkoutPlanCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleChevronClick() {
    setIsExpanded(!isExpanded);
  }

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        {toggleDone && isDone != null && (
          <Pressable onPress={() => toggleDone(exercise.idMovimento)}>
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
        )}
        <Text
          numberOfLines={1}
          style={[styles.title, isDone && styles.titleDone]}
        >
          {exercise.tituloMovimento}
        </Text>
        <Pressable onPress={handleChevronClick}>
          {Array.isArray(exercise.descricoes) &&
            (isExpanded ? (
              <Entypo name="chevron-thin-up" size={24} color={Colors.whiteF5} />
            ) : (
              <Entypo
                name="chevron-thin-down"
                size={24}
                color={Colors.whiteF5}
              />
            ))}
        </Pressable>
      </View>

      {isExpanded && (
        <View style={styles.expandedContainer}>
          {exercise.descricoes &&
            Array.isArray(exercise.descricoes) &&
            exercise.descricoes.map((descricao, index) => (
              <View key={index.toString()} style={styles.descricaoContainer}>
                <View style={styles.bulletPoint} />
                <Text style={styles.descricao}>{descricao}</Text>
              </View>
            ))}
        </View>
      )}
    </View>
  );
}
