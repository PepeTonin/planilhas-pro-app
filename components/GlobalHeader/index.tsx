import { View, Image } from "react-native";

import { styles } from "./style";

export default function GlobalHeader() {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/logo.png")} />
    </View>
  );
}
