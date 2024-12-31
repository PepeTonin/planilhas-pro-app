import { Text, Pressable, ActivityIndicator } from "react-native";
import { Link } from "expo-router";
import { Entypo } from "@expo/vector-icons";

import { styles } from "./style";
import { Colors } from "../../styles/Colors";

interface Props {
  label: string;
  link?: boolean;
  onPress?: null | (() => void);
  pathname?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  hasLoadedSuccessfully?: boolean;
}

export default function PrimaryButton({
  link = false,
  label,
  onPress = null,
  pathname,
  isDisabled = false,
  isLoading = false,
  hasLoadedSuccessfully = false,
}: Props) {
  if (link && pathname) {
    return (
      <Link
        style={[styles.container, (isDisabled || isLoading) && styles.disabled]}
        disabled={isDisabled || isLoading}
        href={{ pathname: pathname }}
        asChild
      >
        <Pressable disabled={isDisabled} onPress={onPress}>
          <Text style={styles.innerText}>{label}</Text>
        </Pressable>
      </Link>
    );
  }

  return (
    <Pressable
      style={[styles.container, (isDisabled || isLoading) && styles.disabled]}
      disabled={isDisabled || isLoading || hasLoadedSuccessfully}
      onPress={onPress}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={Colors.primaryGreen} />
      ) : hasLoadedSuccessfully ? (
        <Entypo name="check" size={28} color={Colors.primaryBlack} />
      ) : (
        <Text style={styles.innerText}>{label}</Text>
      )}
    </Pressable>
  );
}
