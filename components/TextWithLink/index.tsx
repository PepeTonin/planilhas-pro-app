import { Text, View, ViewProps } from "react-native";

import { styles } from "./style";
import { Link } from "expo-router";

interface Props {
  text?: string;
  linkText: string;
  pathname: string;
  containerCustomStyle?: ViewProps["style"];
}

export default function TextWithLink({
  text,
  linkText,
  pathname,
  containerCustomStyle,
}: Props) {
  return (
    <View
      style={[
        styles.container,
        containerCustomStyle ? containerCustomStyle : null,
      ]}
    >
      {text && <Text style={styles.text}>{text + " "}</Text>}
      <Link href={{ pathname: pathname }}>
        <Text style={styles.linkText}>{linkText}</Text>
      </Link>
    </View>
  );
}
