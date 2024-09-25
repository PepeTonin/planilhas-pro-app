import { StyleSheet, Dimensions } from "react-native";

import { Colors } from "../../styles/Colors";

const { height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.primaryBlack,
    justifyContent: "center",
  },
  buttonsContainer: {
    justifyContent: "space-between",
    marginVertical: height * 0.1,
    height: height * 0.15,
    minHeight: 120,
    paddingHorizontal: 20,
  },
});
