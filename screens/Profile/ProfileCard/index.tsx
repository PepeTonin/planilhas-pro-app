import { View, Image, Text } from "react-native";

import { styles } from "./style";
import { UserBase } from "../../../types/user";
import { formatDate } from "../../../utils/date";

interface ProfileCardProps {
  user: UserBase;
}

export default function ProfileCard({ user }: ProfileCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          style={styles.avatar}
          source={{ uri: "https://i.pravatar.cc/300" }}
        />
        <View style={styles.textsTopContainer}>
          <Text style={styles.regularText}>
            Nome: <Text style={styles.highlightedText}>{user.nome}</Text>
          </Text>
          <Text style={styles.regularText}>
            E-mail: <Text style={styles.highlightedText}>{user.email}</Text>
          </Text>
        </View>
      </View>
      <Text
        style={[styles.regularText, !user.professorNome && styles.warningText]}
      >
        Professor:{" "}
        <Text style={styles.highlightedText}>
          {user.professorNome || "Não há!"}
        </Text>
      </Text>
      <Text style={styles.regularText}>
        Situação de pagamento:{" "}
        <Text style={styles.highlightedText}>{user.situacaoPagamento}</Text>
      </Text>
      <Text style={styles.regularText}>
        Cadastrado:{" "}
        <Text style={styles.highlightedText}>
          {formatDate(user.dataCadastro)}
        </Text>
      </Text>
    </View>
  );
}
