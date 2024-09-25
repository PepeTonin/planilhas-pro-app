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
    minHeight: 200,
    height: height * 0.27,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginVertical: height * 0.1,
  },
});
