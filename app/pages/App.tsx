import { View } from "react-native";
import { styles } from "./styles";
import { Logo } from "../components/logo";
import { Form } from "../components/form";
import { Counters } from "../components/counters";
import { EmptyList } from "../components/empty-list";
import { TaskCard } from "../components/task-card";

export function App() {
  return (
    <View style={styles.container}>
        <Logo />
        <Form />
        <Counters />
        <View style={styles.divider} />
        <EmptyList />
        <TaskCard />
    </View>
  );
}
