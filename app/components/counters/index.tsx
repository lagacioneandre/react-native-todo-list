import { Text, View } from "react-native";
import { styles } from "./styles";
import { useEffect, useState } from "react";
import { ITask } from "@/app/pages/task.interface";

type Props = {
  tasks: ITask[];
};

export function Counters({ tasks }: Props) {
  const [totalTasks, setTotalTasks] = useState(0);
  const [totalCompleted, setTotalCompleted] = useState(0);

  useEffect(() => {
    setTotalTasks(tasks.length);
    setTotalCompleted(tasks.filter(item => item.completed).length);
  }, [tasks]);

  return (
    <View style={styles.counters}>
        <View style={styles.countersText}>
            <Text style={styles.created}>Criadas</Text>
            <Text style={styles.bullet}>{totalTasks}</Text>
        </View>
        <View style={styles.countersText}>
            <Text style={styles.finished}>Concluídas</Text>
            <Text style={styles.bullet}>{totalCompleted}</Text>
        </View>
    </View>
  );
}
