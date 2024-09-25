import { useRef, useState } from "react";
import {
  View,
  TextInput,
  Pressable,
  KeyboardType,
  Animated,
  Easing,
  Text,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

import { styles } from "./style";
import { Colors } from "../../styles/Colors";

interface Props {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  keyboardType?: KeyboardType;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  isPassword?: boolean;
  isValid?: boolean;
  invalidTextShown?: string;
}

export default function StyledTextInput({
  value,
  onChangeText,
  placeholder,
  keyboardType = "default",
  autoCapitalize = "sentences",
  isPassword = false,
  isValid = true,
  invalidTextShown,
}: Props) {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const translateY = useRef(new Animated.Value(!value ? 0 : -20)).current;

  function handleFocus() {
    Animated.timing(translateY, {
      toValue: -20,
      duration: 150,
      useNativeDriver: true,
      easing: Easing.in(Easing.ease),
    }).start();
  }

  function handleBlur() {
    if (!value) {
      Animated.timing(translateY, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
        easing: Easing.in(Easing.ease),
      }).start();
    }
  }

  return (
    <View style={styles.outerContainer}>
      <View style={[styles.innerContainer, !isValid && styles.invalidInput]}>
        <Animated.Text style={[styles.label, { transform: [{ translateY }] }]}>
          {placeholder}
        </Animated.Text>
        <TextInput
          style={styles.textInput}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isPassword && !passwordVisible}
          autoCapitalize={autoCapitalize}
          keyboardType={keyboardType}
          hitSlop={10}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {isPassword && (
          <Pressable
            style={styles.icon}
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <Entypo
              name={passwordVisible ? "eye-with-line" : "eye"}
              size={32}
              color={Colors.primaryGreen}
            />
          </Pressable>
        )}
      </View>
      {!isValid && (
        <Text style={styles.invalidText}>
          {invalidTextShown}
        </Text>
      )}
    </View>
  );
}
