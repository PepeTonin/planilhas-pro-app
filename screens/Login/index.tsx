import { useEffect, useState } from "react";
import Toast from "react-native-toast-message";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { styles } from "./style";

import { useAppDispatch, useAppSelector } from "../../store/store";
import { clearError, login } from "../../store/features/auth";

import StyledTextInput from "../../components/StyledTextInput";
import PrimaryButton from "../../components/PrimaryButton";
import TextWithLink from "../../components/TextWithLink";
import WelcomeImage from "../../components/WelcomeImage";
import { router } from "expo-router";
import { validateEmail } from "../../utils/validation";

interface LoginScreenProps {
  routePathnames: {
    resetPassword: string;
    signup: string;
  };
}

export default function LoginScreen({ routePathnames }: LoginScreenProps) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch = useAppDispatch();
  const { isLogging, isLogged, hasError } = useAppSelector(
    (state) => state.auth
  );

  async function handleLogin() {
    if (!validateEmail(email) || !password) {
      Toast.show({
        type: "error",
        text1: "Preencha os campos corretamente!",
        visibilityTime: 2500,
      });
      return;
    }
    await dispatch(login({ email, password }));
  }

  useEffect(() => {
    if (hasError) {
      Toast.show({
        type: "error",
        text1: "Email ou senha inválidos!",
        visibilityTime: 2500,
        onHide: () => dispatch(clearError()),
      });
    }
  }, [hasError]);

  useEffect(() => {
    if (isLogged) router.push("/(home)/");
  }, [isLogged]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.rootContainer}
      >
        <WelcomeImage title={"Entrar com conta existente"} />

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
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            isPassword
          />

          <TextWithLink
            containerCustomStyle={{ justifyContent: "flex-end" }}
            text="Esqueceu a senha?"
            linkText="Resete sua senha"
            pathname={routePathnames.resetPassword}
          />

          <PrimaryButton
            isLoading={isLogging}
            label="Entrar"
            onPress={handleLogin}
          />

          <TextWithLink
            linkText="ou crie uma nova conta"
            pathname={routePathnames.signup}
          />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
