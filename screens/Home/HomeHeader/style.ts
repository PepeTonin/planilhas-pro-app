import { StyleSheet } from "react-native";
import { Fonts } from "../../../styles/Fonts";
import { Colors } from "../../../styles/Colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 99,
  },
  text: {
    fontFamily: Fonts.families.Bold,
    fontSize: Fonts.sizes.lg,
    color: Colors.lightGray,
  },
});
