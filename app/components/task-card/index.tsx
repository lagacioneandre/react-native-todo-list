import { Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { styles } from "./styles";

export function TaskCard() {
  return (
    <View style={styles.taskCard}>
        <View>
            <View style={styles.checkbox}></View>
            {/* <View style={styles.checkedCheckbox}>
                <AntDesign name="check" size={12} color="#F2F2F2" />
            </View> */}
        </View>
        <Text style={styles.checkedDescription}>Integer urna interdum massa libero auctor neque turpis turpis semper.</Text>
        <TouchableOpacity>
            <AntDesign name="delete" size={16} color="#808080" />
        </TouchableOpacity>
    </View>
  );
}
