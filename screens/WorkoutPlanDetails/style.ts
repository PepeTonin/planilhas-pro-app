import { StyleSheet } from "react-native";
import { Colors } from "../../styles/Colors";
import { Fonts } from "../../styles/Fonts";

export const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.primaryBlack,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  backBtnContainer: {
    width: 40,
  },
  title: {
    textAlign: "center",
    flex: 1,
    fontFamily: Fonts.families.Bold,
    fontSize: Fonts.sizes.xl,
    color: Colors.lightGray,
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  dateText: {
    textAlign: "center",
    fontFamily: Fonts.families.ExtraBold,
    fontSize: Fonts.sizes.xl,
    color: Colors.whiteF5,
    paddingVertical: 20,
  },
});
