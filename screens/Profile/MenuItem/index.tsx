import { View, Text, Pressable } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { styles } from "./style";
import { Colors } from "../../../styles/Colors";

interface MenuItemProps {
  text: string;
  icon: "chevron" | "logout";
  onPress: () => void;
}

export default function MenuItem({ icon, onPress, text }: MenuItemProps) {
  const iconObj = {
    chevron: (
      <Entypo name="chevron-thin-right" size={32} color={Colors.whiteF5} />
    ),
    logout: <MaterialIcons name="logout" size={32} color={Colors.whiteF5} />,
  };

  return (
    <Pressable onPress={onPress} hitSlop={10}>
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        {iconObj[icon]}
      </View>
    </Pressable>
  );
}
