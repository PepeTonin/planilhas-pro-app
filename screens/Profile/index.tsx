import { View, Text, ScrollView } from "react-native";
import { styles } from "./style";
import { router } from "expo-router";

import { useAppDispatch, useAppSelector } from "../../store/store";
import { logout } from "../../store/features/auth";
import ProfileCard from "./ProfileCard";
import MenuItem from "./MenuItem";

interface ProfileMenu {
  id: number;
  text: string;
  icon: "chevron" | "logout";
  onPress: () => void;
}

export default function ProfileScreen() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const profileMenuObj: ProfileMenu[] = [
    {
      id: 1,
      text: "Contrato",
      icon: "chevron",
      onPress: () => console.log("contrato"),
    },
    {
      id: 2,
      text: "Melhores resultados",
      icon: "chevron",
      onPress: () => console.log("melhores resultados"),
    },
    {
      id: 3,
      text: "Sair",
      icon: "logout",
      onPress: handleLogout,
    },
  ];

  function handleLogout() {
    router.replace("/(auth)/");
    dispatch(logout());
  }

  return (
    <View style={styles.container}>
      {user && <ProfileCard user={user} />}
      <ScrollView showsVerticalScrollIndicator={false}>
        {profileMenuObj.map((item) => (
          <MenuItem
            key={item.id}
            icon={item.icon}
            text={item.text}
            onPress={item.onPress}
          />
        ))}
      </ScrollView>
    </View>
  );
}
