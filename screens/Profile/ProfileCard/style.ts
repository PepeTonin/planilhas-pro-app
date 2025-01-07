import { StyleSheet } from "react-native";

import { Colors } from "../../../styles/Colors";
import { Fonts } from "../../../styles/Fonts";

export const styles = StyleSheet.create({
  container: {
    gap: 10,
    borderRadius: 15,
    backgroundColor: Colors.whiteF5,
    padding: 20,
  },
  topContainer: {
    flexDirection: "row",
    gap: 10,
  },
  avatar: {
    width: 75,
    height: 75,
    borderRadius: 50,
  },
  textsTopContainer: {
    flex: 1,
    justifyContent: "space-around",
  },
  regularText: {
    fontFamily: Fonts.families.Regular,
    fontSize: Fonts.sizes.md,
    color: Colors.primaryBlack,
  },
  highlightedText: {
    fontFamily: Fonts.families.Bold,
  },
  warningText: {
    color: Colors.red,
  },
});
