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

import { validateEmail, validatePassword } from "../../utils/validation";
import { useAuth } from "../../contexts/AuthContext";
import WelcomeImage from "../../components/WelcomeImage";
import StyledTextInput from "../../components/StyledTextInput";
import PrimaryButton from "../../components/PrimaryButton";
import { router } from "expo-router";
import TextWithLink from "../../components/TextWithLink";

interface Props {
  routePathnames: {
    login: string;
  };
}

export default function SignUpScreen({ routePathnames }: Props) {
  const [name, setName] = useState<string>("");
  const [isNameValid, setIsNameValid] = useState<boolean>(true);

  const [email, setEmail] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);

  const [password, setPassword] = useState<string>("");
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true);

  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] =
    useState<boolean>(true);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isAccountCreated, setIsAccountCreated] = useState<boolean>(false);

  const { requestAccountCreation } = useAuth();

  async function handleSignUp() {
    setIsLoading(true);

    if (!name) {
      setIsNameValid(false);
      setIsLoading(false);
      return;
    }
    setIsNameValid(true);

    if (!validateEmail(email)) {
      setIsEmailValid(false);
      setIsLoading(false);
      return;
    }
    setIsEmailValid(true);

    if (!validatePassword(password)) {
      setIsPasswordValid(false);
      setIsLoading(false);
      return;
    }
    setIsPasswordValid(true);

    if (password !== confirmPassword) {
      setIsConfirmPasswordValid(false);
      setIsLoading(false);
      return;
    }
    setIsConfirmPasswordValid(true);

    const response = await requestAccountCreation(name, email, password);

    if (!response) {
      Toast.show({
        type: "error",
        text1: "Error creating account",
        visibilityTime: 2500,
        onShow: () => setIsLoading(false),
      });
      return;
    }

    if (response === "auth/email-already-in-use") {
      Toast.show({
        type: "error",
        text1: "Email already in use",
        visibilityTime: 2500,
        onShow: () => setIsLoading(false),
      });
      return;
    }

    setIsAccountCreated(true);

    Toast.show({
      type: "success",
      text1: "Account created!",
      visibilityTime: 2500,
      onHide: () => {
        router.replace(routePathnames.login);
        setIsLoading(false);
      },
    });
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.rootContainer}
      >
        <WelcomeImage title={"Create a\nnew account"} />

        <Toast />

        <View style={styles.contentContainer}>
          <StyledTextInput
            placeholder="Name you want to be called"
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
            isValid={isNameValid}
            invalidTextShown="Name cannot be empty"
          />

          <StyledTextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            isValid={isEmailValid}
            invalidTextShown={"Invalid email address"}
          />

          <StyledTextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            isPassword
            isValid={isPasswordValid}
            invalidTextShown="Password must be at least 8 characters long, with at least 1 lower case, 1 upper case, 1 special char and 1 number"
          />

          <StyledTextInput
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            isPassword
            isValid={isConfirmPasswordValid}
            invalidTextShown="Passwords do not match"
          />

          <PrimaryButton
            pathname={routePathnames.login}
            label="Sign Up"
            onPress={handleSignUp}
            isLoading={isLoading}
            hasLoadedSuccessfully={isAccountCreated}
          />

          <TextWithLink
            linkText="or login with an existing account"
            pathname={routePathnames.login}
          />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
