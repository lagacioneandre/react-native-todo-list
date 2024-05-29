import { FlatList, View } from "react-native";
import { styles } from "./styles";
import { Logo } from "../components/logo";
import { Form } from "../components/form";
import { Counters } from "../components/counters";
import { EmptyList } from "../components/empty-list";
import { TaskCard } from "../components/task-card";
import { useState } from "react";
import { ITask } from "./task.interface";
import { LinearGradient } from 'expo-linear-gradient';

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const handleAddTask = (description: string) => {
    const task: ITask = {
      id: String(Math.random() * 999999),
      description,
      completed: false,
    }
    setTasks(prevState => [...prevState, task]);
  }

  const handleToggleComplete = (id: string) => {
    const updatedTasks = tasks.map(item => {
      if (item.id === id) item.completed = !item.completed;
      return item;
    });
    setTasks([...updatedTasks]);
  }

  const handleRemoveTask = (id: string) => {
    const updatedTasks = tasks.filter(item => item.id !== id);
    setTasks([...updatedTasks]);
  }

  return (
    <LinearGradient
      style={styles.container}
      colors={['#0D0D0D', '#1A1A1A']}
      locations={[0.32, 0.32]}
    >
        <Logo />
        <Form emitAddTask={handleAddTask}/>
        <Counters tasks={tasks} />
        {
          !tasks.length && <View style={styles.divider} />
        }
        <FlatList
          data={tasks}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <TaskCard
              key={index}
              task={item}
              handleToggleComplete={handleToggleComplete}
              handleRemoveTask={handleRemoveTask}
            />
          )}
          ListEmptyComponent={() => (<EmptyList />)}
        />
    </LinearGradient >
  );
}
