import { StyleSheet } from "react-native";

import { Colors } from "../../styles/Colors";
import { Fonts } from "../../styles/Fonts";

const leftGap = 10;

export const styles = StyleSheet.create({
  outerContainer: {},
  innerContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: Colors.primaryGreen,
  },
  label: {
    position: "absolute",
    left: leftGap,
    top: 8,
    zIndex: -1,
    color: Colors.lightGray,
    fontFamily: Fonts.families.Bold,
    fontSize: Fonts.sizes.md,
  },
  textInput: {
    width: "100%",
    height: "100%",
    paddingVertical: 5,
    paddingHorizontal: leftGap,
    color: Colors.white,
    fontSize: Fonts.sizes.md,
    fontFamily: Fonts.families.Bold,
  },
  icon: {
    position: "absolute",
    right: 20,
  },
  invalidInput: {
    borderBottomColor: Colors.red,
  },
  invalidText: {
    paddingHorizontal: leftGap,
    color: Colors.red,
    fontFamily: Fonts.families.Medium,
    fontSize: Fonts.sizes.xs,
  },
});
