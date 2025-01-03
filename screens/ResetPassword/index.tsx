import { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
  Image,
} from "react-native";
import { router } from "expo-router";
import Toast from "react-native-toast-message";

import { styles } from "./style";

import StyledTextInput from "../../components/StyledTextInput";
import ScreenTitle from "../../components/ScreenTitle";
import PrimaryButton from "../../components/PrimaryButton";
import { validateEmail } from "../../utils/validation";

interface ResetPasswordScreenProps {
  routePathnames: {
    login: string;
  };
}

export default function ResetPasswordScreen({
  routePathnames,
}: ResetPasswordScreenProps) {
  const [email, setEmail] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function handleResetPassword() {
    setIsLoading(true);

    if (!validateEmail(email)) {
      setIsEmailValid(false);
      setIsLoading(false);
      return;
    }
    setIsEmailValid(true);

    // sendResetPasswordRequest(email);

    Toast.show({
      type: "success",
      text1: "Email sent!",
      visibilityTime: 2000,
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
        <Toast />
        <Image
          style={styles.image}
          source={require("../../assets/images/Safe-amico.png")}
          resizeMode="contain"
        />
        <View style={styles.contentContainer}>
          <ScreenTitle
            customContainerStyle={styles.titleContainer}
            title="Reset Password"
          />
          <StyledTextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
            isValid={isEmailValid}
            invalidTextShown="Please enter a valid email address"
          />
          <PrimaryButton
            isLoading={isLoading}
            label="Reset Password"
            onPress={handleResetPassword}
          />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
