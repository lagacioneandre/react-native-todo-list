import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export function EmptyList() {
    const fileIcon = require("../../../assets/images/file-icon.png")

  return (
    <View style={styles.emptyList}>
        <Image
            source={fileIcon}
            style={styles.fileIcon}
        />
        <Text style={styles.emptyTitle}>Você ainda não tem tarefas cadastradas</Text>
        <Text style={styles.emptyText}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  );
}
