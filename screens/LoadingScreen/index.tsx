import { ActivityIndicator, View } from "react-native";
import { Colors } from "../../styles/Colors";

import { styles } from "./style";

export default function LoadingScreen() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Colors.primaryGreen} />
    </View>
  );
}
