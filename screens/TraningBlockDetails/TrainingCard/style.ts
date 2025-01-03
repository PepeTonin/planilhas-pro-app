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
  descricaoContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  bulletPoint: {
    height: 6,
    width: 6,
    borderRadius: 6,
    backgroundColor: Colors.lightGray,
  },
  descricao: {
    fontFamily: Fonts.families.Regular,
    color: Colors.lightGray,
    fontSize: Fonts.sizes.lg,
  },
});
