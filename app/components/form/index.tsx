import { TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { styles } from "./styles";

export function Form() {
  return (
    <View style={styles.form}>
        <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
        />

        <TouchableOpacity style={styles.button}>
            <Ionicons name="add-circle-outline" size={32} color="#F2F2F2" />
        </TouchableOpacity>
    </View>
  );
}
