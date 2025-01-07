import { Text, Pressable, ActivityIndicator, View } from "react-native";
import { Link } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

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
  hasIcon?: boolean;
  icon?: "sync";
}

export default function PrimaryButton({
  link = false,
  label,
  onPress = null,
  pathname,
  isDisabled = false,
  isLoading = false,
  hasLoadedSuccessfully = false,
  hasIcon = false,
  icon,
}: Props) {
  const iconObj = {
    sync: (
      <FontAwesome5 name="sync-alt" size={20} color={Colors.primaryBlack} />
    ),
  };

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
      ) : hasIcon && icon ? (
        <View style={styles.iconBtnContainer}>
          {iconObj[icon]}
          <Text style={styles.innerText}>{label}</Text>
        </View>
      ) : (
        <Text style={styles.innerText}>{label}</Text>
      )}
    </Pressable>
  );
}
