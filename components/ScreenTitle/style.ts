import { StyleSheet } from "react-native";
import { Colors } from "../../styles/Colors";
import { Fonts } from "../../styles/Fonts";

export const styles = StyleSheet.create({
  container: {
    marginTop: -58,
    paddingHorizontal: 20,
  },
  title: {
    color: Colors.white,
    fontFamily: Fonts.families.ExtraBold,
    fontSize: Fonts.sizes.xxl,
    textAlign: "center",
  },
});
