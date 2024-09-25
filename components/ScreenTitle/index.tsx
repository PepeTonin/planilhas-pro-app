import { Text, View, ViewProps } from "react-native";

import { styles } from "./style";

interface Props {
  title: string;
  customContainerStyle?: ViewProps["style"];
}

export default function ScreenTitle({ title, customContainerStyle }: Props) {
  return (
    <View
      style={[
        styles.container,
        customContainerStyle ? customContainerStyle : null,
      ]}
    >
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
