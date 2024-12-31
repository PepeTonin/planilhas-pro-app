import { router } from "expo-router";
import { useEffect, useState } from "react";
import Toast from "react-native-toast-message";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { useAppDispatch, useAppSelector } from "../../store/store";
import {
  clearAccountCreated,
  clearError,
  signup,
} from "../../store/features/auth";

import { styles } from "./style";

import {
  validateEmail,
  validatePassword,
  validatePasswordDevelop,
} from "../../utils/validation";

import WelcomeImage from "../../components/WelcomeImage";
import StyledTextInput from "../../components/StyledTextInput";
import PrimaryButton from "../../components/PrimaryButton";
import TextWithLink from "../../components/TextWithLink";

interface SignUpScreenProps {
  routePathnames: {
    login: string;
  };
}

export default function SignUpScreen({ routePathnames }: SignUpScreenProps) {
  const [name, setName] = useState<string>("");
  const [isNameValid, setIsNameValid] = useState<boolean>(true);

  const [email, setEmail] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);

  const [password, setPassword] = useState<string>("");
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true);

  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] =
    useState<boolean>(true);

  const dispatch = useAppDispatch();
  const { hasError, isLogging, isAccountCreated } = useAppSelector(
    (state) => state.auth
  );

  async function handleSignUp() {
    if (!name) {
      setIsNameValid(false);
      return;
    }
    setIsNameValid(true);

    if (!validateEmail(email)) {
      setIsEmailValid(false);
      return;
    }
    setIsEmailValid(true);

    if (!validatePasswordDevelop(password)) {
      setIsPasswordValid(false);
      return;
    }
    setIsPasswordValid(true);

    if (password !== confirmPassword) {
      setIsConfirmPasswordValid(false);
      return;
    }
    setIsConfirmPasswordValid(true);

    await dispatch(signup({ name, email, password }));
  }

  useEffect(() => {
    if (hasError) {
      Toast.show({
        type: "error",
        text1: "Erro na criação de conta",
        visibilityTime: 2500,
        onHide: () => dispatch(clearError()),
      });
    }
  }, [hasError]);

  useEffect(() => {
    if (isAccountCreated) {
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      Toast.show({
        type: "success",
        text1: "Conta criada",
        visibilityTime: 2500,
        onHide: () => {
          dispatch(clearAccountCreated());
          router.replace(routePathnames.login);
        },
      });
    }
  }, [isAccountCreated]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.rootContainer}
      >
        <WelcomeImage title={"Criar nova conta"} />

        <Toast />

        <View style={styles.contentContainer}>
          <StyledTextInput
            placeholder="Nome"
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
            isValid={isNameValid}
            invalidTextShown="Nome não pode estar vazio"
          />

          <StyledTextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            isValid={isEmailValid}
            invalidTextShown={"Email inválido"}
          />

          <StyledTextInput
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            isPassword
            isValid={isPasswordValid}
            invalidTextShown="A senha deve ter pelo menos 8 caracteres, contendo pelo menos 1 letra e 1 número."
          />

          <StyledTextInput
            placeholder="Confirme sua senha"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            isPassword
            isValid={isConfirmPasswordValid}
            invalidTextShown="Senhas não são iguais"
          />

          <PrimaryButton
            pathname={routePathnames.login}
            label="Criar conta"
            onPress={handleSignUp}
            isLoading={isLogging}
            hasLoadedSuccessfully={isAccountCreated}
          />

          <TextWithLink
            linkText="ou entre com uma conta existente"
            pathname={routePathnames.login}
          />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
