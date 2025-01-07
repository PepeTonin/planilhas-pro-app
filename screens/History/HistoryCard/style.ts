import { StyleSheet } from "react-native";

import { Colors } from "../../../styles/Colors";
import { Fonts } from "../../../styles/Fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: Colors.darkGray,
    borderRadius: 15,
    paddingHorizontal: 14,
    paddingVertical: 22,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 10,
  },
  label: {
    fontFamily: Fonts.families.Bold,
    fontSize: Fonts.sizes.xl,
    color: Colors.whiteF5,
  },
  dateContainer: {
    flexDirection: "row",
    gap: 10,
  },
  date: {
    fontFamily: Fonts.families.Regular,
    fontSize: Fonts.sizes.lg,
    color: Colors.lightGray,
  },
  btnContainer: {
    justifyContent: "center",
    paddingRight: 10,
  },
});
