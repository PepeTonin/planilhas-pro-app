import { Text, View } from "react-native";

import { styles } from "./style";
import { useAppSelector } from "../../store/store";
import PrimaryCard from "../../components/PrimaryCard";
import HomeHeader from "./HomeHeader";

interface HomeProps {}

export default function HomeScreen() {
  const { user } = useAppSelector((state) => state.auth);

  const cardInnerTextObj = {
    hasProfessorVinculado: (
      <Text style={styles.cardInnerText}>
        Você faz parte do time do professor:{" "}
        <Text style={styles.cardInnerTextHighlighted}>
          {user?.professorNome}
        </Text>
      </Text>
    ),
    hasNot: (
      <Text style={styles.cardInnerText}>
        Você não faz parte de nenhum time ainda!
      </Text>
    ),
  };

  return (
    <View style={styles.container}>
      <HomeHeader
        studentName={user!.nome}
        studentAvatarUrl="https://i.pravatar.cc/300"
      />
      <PrimaryCard>
        {user?.professorNome
          ? cardInnerTextObj.hasProfessorVinculado
          : cardInnerTextObj.hasNot}
      </PrimaryCard>
    </View>
  );
}
