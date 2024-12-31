import { View } from "react-native";

import { styles } from "./style";

import PrimaryButton from "../../components/PrimaryButton";
import WelcomeImage from "../../components/WelcomeImage";

interface WelcomeScreenProps {
  routePathnames: {
    login: string;
    signup: string;
  };
}

export default function WelcomeScreen({ routePathnames }: WelcomeScreenProps) {
  return (
    <View style={styles.rootContainer}>
      <WelcomeImage title={"Planilhas Pro"} />

      <View style={styles.buttonsContainer}>
        <PrimaryButton
          link
          pathname={routePathnames.login}
          label="Entrar com conta existente"
        />
        <PrimaryButton
          link
          pathname={routePathnames.signup}
          label="Criar conta"
        />
      </View>
    </View>
  );
}
