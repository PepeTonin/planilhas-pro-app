import { StyleSheet, Dimensions } from "react-native";

import { Colors } from "../../styles/Colors";

const { height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.primaryBlack,
    justifyContent: "center",
  },
  contentContainer: {
    minHeight: 320,
    height: height * 0.4,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: height * 0.1,
    marginTop: height * 0.05,
  },
});
