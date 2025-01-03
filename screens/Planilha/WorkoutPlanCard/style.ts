import { StyleSheet } from "react-native";
import { Colors } from "../../../styles/Colors";
import { Fonts } from "../../../styles/Fonts";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.darkGray,
    borderRadius: 15,
    paddingHorizontal: 14,
    paddingVertical: 22,
    alignItems: "center",
    gap: 22,
  },
  topContainer: {
    flexDirection: "row",
    gap: 10,
  },
  title: {
    flex: 1,
    fontFamily: Fonts.families.Regular,
    color: Colors.whiteF5,
    fontSize: Fonts.sizes.lg,
  },
  titleDone: {
    textDecorationLine: "line-through",
  },
  expandedContainer: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 22,
  },
  blockContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
  },
  blockTitle: {
    fontFamily: Fonts.families.Regular,
    color: Colors.primaryGreen,
    fontSize: Fonts.sizes.lg,
  },
});
