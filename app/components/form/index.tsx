import { TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { styles } from "./styles";
import { useState } from "react";

type Props = {
  emitAddTask: (description: string) => void;
}

export function Form({ emitAddTask }: Props) {
  const [description, setDescription] = useState('');

  const handleChangeText = (event: string) => setDescription(event);

  const handleAddTask = () => {
    if (!description.length) return;
    emitAddTask(description);
    setDescription('');
  };

  return (
    <View style={styles.form}>
        <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            value={description}
            onChangeText={handleChangeText}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleAddTask}
        >
            <Ionicons name="add-circle-outline" size={32} color="#F2F2F2" />
        </TouchableOpacity>
    </View>
  );
}
