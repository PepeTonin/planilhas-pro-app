import { StyleSheet } from "react-native";
import { Colors } from "../../../styles/Colors";
import { Fonts } from "../../../styles/Fonts";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: Colors.whiteF5,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  text: {
    flex: 1,
    fontFamily: Fonts.families.Bold,
    fontSize: Fonts.sizes.lg,
    color: Colors.whiteF5,
  },
});
