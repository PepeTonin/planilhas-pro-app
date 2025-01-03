import { StyleSheet } from "react-native";

import { Colors } from "../../styles/Colors";
import { Fonts } from "../../styles/Fonts";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: Colors.white,
    fontFamily: Fonts.families.Regular,
    fontSize: Fonts.sizes.sm,
    marginRight: 6,
  },
  linkText: {
    color: Colors.primaryGreen,
    fontFamily: Fonts.families.Bold,
    fontSize: Fonts.sizes.sm,
  },
});
