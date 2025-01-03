import { View, Image, Text } from "react-native";

import { styles } from "./style";

interface HomeHeaderProps {
  studentName: string;
  studentAvatarUrl: string;
}

export default function HomeHeader({
  studentAvatarUrl,
  studentName,
}: HomeHeaderProps) {
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={{ uri: studentAvatarUrl }} />
      <Text style={styles.text}>Olá, {studentName}</Text>
    </View>
  );
}
