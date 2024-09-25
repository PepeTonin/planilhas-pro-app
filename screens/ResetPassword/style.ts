import { StyleSheet, Dimensions } from "react-native";

import { Colors } from "../../styles/Colors";

const { height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.primaryBlack,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  image: {
    height: 250,
    zIndex: 1,
  },
  contentContainer: {
    marginTop: 20,
    minHeight: 150,
    height: height * 0.2,
    width: "100%",
    justifyContent: "space-between",
  },
  titleContainer: {
    paddingBottom: 50,
  },

});
