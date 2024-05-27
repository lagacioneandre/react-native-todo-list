import { Text, View } from "react-native";
import { styles } from "./styles";

export function Counters() {
  return (
    <View style={styles.counters}>
        <View style={styles.countersText}>
            <Text style={styles.created}>Criadas</Text>
            <Text style={styles.bullet}>0</Text>
        </View>
        <View style={styles.countersText}>
            <Text style={styles.finished}>Concluídas</Text>
            <Text style={styles.bullet}>0</Text>
        </View>
    </View>
  );
}
