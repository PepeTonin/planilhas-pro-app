import { StyleSheet } from "react-native";

import { Colors } from "../../styles/Colors";
import { Fonts } from "../../styles/Fonts";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryGreen,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 32,
    padding: 16,
    width: "100%",
    height: 56,
  },
  innerText: {
    color: Colors.primaryBlack,
    fontFamily: Fonts.families.SemiBold,
    fontSize: Fonts.sizes.lg,
  },
  disabled: {
    backgroundColor: Colors.mediumGray,
  }
});
