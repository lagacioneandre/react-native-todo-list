import { Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { styles } from "./styles";
import { ITask } from "@/app/pages/task.interface";

type Props = {
  task: ITask;
  handleToggleComplete: (id: string) => void;
  handleRemoveTask: (id: string) => void;
}

export function TaskCard({ task, handleToggleComplete, handleRemoveTask }: Props) {
  return (
    <View style={styles.taskCard}>
        <TouchableOpacity onPress={() => handleToggleComplete(task.id)}>
          {
            task.completed ?
            <View style={styles.checkedCheckbox}>
                <AntDesign name="check" size={12} color="#F2F2F2" />
            </View> :
            <View style={styles.checkbox}></View>
          }
        </TouchableOpacity>
        <Text style={task.completed ? styles.checkedDescription : styles.description}>
          {task.description}
        </Text>
        <TouchableOpacity onPress={() => handleRemoveTask(task.id)}>
            <AntDesign name="delete" size={16} color="#808080" />
        </TouchableOpacity>
    </View>
  );
}
