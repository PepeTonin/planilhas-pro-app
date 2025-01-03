import { View } from "react-native";

import { styles } from "./style";

interface PrimaryCardProps {
  InnerTextElement: React.ReactNode;
}

export default function PrimaryCard({ InnerTextElement }: PrimaryCardProps) {
  return <View style={styles.container}>{InnerTextElement}</View>;
}
