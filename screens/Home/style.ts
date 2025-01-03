import { StyleSheet } from "react-native";
import { Colors } from "../../styles/Colors";
import { Fonts } from "../../styles/Fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryBlack,
    paddingHorizontal: 20,
    gap: 20,
  },
  cardInnerText: {
    fontFamily: Fonts.families.Regular,
    fontSize: Fonts.sizes.xxl,
  },
  cardInnerTextHighlighted: {
    fontFamily: Fonts.families.ExtraBold,
  },
});
