import { View, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./style";

import { Colors } from "../../styles/Colors";
import ScreenTitle from "../../components/ScreenTitle";

interface Props {
  title: string;
}

export default function WelcomeImage({ title }: Props) {
  return (
    <View style={styles.imageContainer}>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/images/welcome-image.png")}
        resizeMode="cover"
      >
        <LinearGradient
          style={styles.imageGradient}
          colors={["transparent", "#192126aa", Colors.primaryBlack]}
        ></LinearGradient>
      </ImageBackground>
      <ScreenTitle title={title} />
    </View>
  );
}
