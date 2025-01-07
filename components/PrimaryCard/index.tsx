import { View } from "react-native";

import { styles } from "./style";
import { PropsWithChildren } from "react";
import PrimaryButton from "../PrimaryButton";

interface PrimaryCardProps extends PropsWithChildren {
  variant?: "default" | "sync";
  onPress?: () => void;
  loadingBtn?: boolean;
}

export default function PrimaryCard({
  children,
  variant = "default",
  onPress,
  loadingBtn,
}: PrimaryCardProps) {
  const variantObj = {
    default: <View style={styles.container}>{children}</View>,
    sync: (
      <View style={styles.container}>
        {children}
        <PrimaryButton
          hasIcon
          icon="sync"
          label="Atualizar"
          isLoading={loadingBtn}
          onPress={onPress}
        />
      </View>
    ),
  };

  return variantObj[variant];
}
