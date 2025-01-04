import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Tabs } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { Colors } from "../../../styles/Colors";
import { Fonts } from "../../../styles/Fonts";
import GlobalHeader from "../../../components/GlobalHeader";

export default function AuthenticatedHomeLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        header: () => <GlobalHeader />,
        tabBarStyle: {
          backgroundColor: Colors.primaryGreen,
          height: 60,
        },
        tabBarInactiveTintColor: Colors.mediumGray,
        tabBarActiveTintColor: Colors.primaryBlack,
        tabBarLabelPosition: "beside-icon",
        tabBarShowLabel: true,
        tabBarIconStyle: { width: 34 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="home"
              size={32}
              color={focused ? Colors.primaryBlack : Colors.mediumGray}
            />
          ),
          tabBarLabel: ({ focused }) =>
            focused ? <Text style={styles.label}>Home</Text> : <></>,
        }}
      />
      <Tabs.Screen
        name="planilha/index"
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="weight-lifter"
              size={32}
              color={focused ? Colors.primaryBlack : Colors.mediumGray}
            />
          ),
          tabBarLabel: ({ focused }) =>
            focused ? <Text style={styles.label}>Planilha</Text> : <></>,
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="calendar-month"
              size={32}
              color={focused ? Colors.primaryBlack : Colors.mediumGray}
            />
          ),
          tabBarLabel: ({ focused }) =>
            focused ? <Text style={styles.label}>Histórico</Text> : <></>,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="account-circle"
              size={32}
              color={focused ? Colors.primaryBlack : Colors.mediumGray}
            />
          ),
          tabBarLabel: ({ focused }) =>
            focused ? <Text style={styles.label}>Perfil</Text> : <></>,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  label: {
    paddingLeft: 4,
    fontFamily: Fonts.families.Bold,
    fontSize: Fonts.sizes.md,
  },
});
