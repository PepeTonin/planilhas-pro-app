import { View } from "react-native";

import { styles } from "./style";

import PrimaryButton from "../../components/PrimaryButton";
import WelcomeImage from "../../components/WelcomeImage";

interface Props {
  routePathnames: {
    login: string;
    signup: string;
  };
}

export default function WelcomeScreen({ routePathnames }: Props) {
  return (
    <View style={styles.rootContainer}>
      <WelcomeImage title={"Welcome to BeFit\nThe fitness app"} />

      <View style={styles.buttonsContainer}>
        <PrimaryButton
          link
          pathname={routePathnames.login}
          label="Login with existing account"
        />
        <PrimaryButton
          link
          pathname={routePathnames.signup}
          label="Create your account"
        />
      </View>
    </View>
  );
}
