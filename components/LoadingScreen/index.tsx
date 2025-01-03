import { ActivityIndicator, View, Text } from "react-native";

import { styles } from "./style";
import { Colors } from "../../styles/Colors";

export default function LoadingScreen() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={Colors.primaryGreen} size={"large"} />
    </View>
  );
}
