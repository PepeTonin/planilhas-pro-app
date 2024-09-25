import { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Toast from "react-native-toast-message";

import { styles } from "./style";

import { useAuth } from "../../contexts/AuthContext";
import StyledTextInput from "../../components/StyledTextInput";
import PrimaryButton from "../../components/PrimaryButton";
import TextWithLink from "../../components/TextWithLink";
import WelcomeImage from "../../components/WelcomeImage";

interface Props {
  routePathnames: {
    resetPassword: string;
    signup: string;
  };
}

export default function LoginScreen({ routePathnames }: Props) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { requestLoginWithEmailAndPass } = useAuth();

  async function handleLogin() {
    setIsLoading(true);
    const response = await requestLoginWithEmailAndPass(email, password);
    if (!response) {
      Toast.show({
        type: "error",
        text1: "Invalid email or password!",
        visibilityTime: 2500,
        onShow: () => setIsLoading(false),
      });
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.rootContainer}
      >
        <WelcomeImage title={"Login with\nexisting account"} />

        <Toast />

        <View style={styles.contentContainer}>
          <StyledTextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <StyledTextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            isPassword
          />

          <TextWithLink
            containerCustomStyle={{ justifyContent: "flex-end" }}
            text="Forgot password?"
            linkText="Reset password"
            pathname={routePathnames.resetPassword}
          />

          <PrimaryButton
            isLoading={isLoading}
            label="Login"
            onPress={handleLogin}
          />

          <TextWithLink
            linkText="or create an new account"
            pathname={routePathnames.signup}
          />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
