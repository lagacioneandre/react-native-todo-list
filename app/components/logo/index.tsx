import { Image, View } from "react-native";
import { styles } from "./styles";

export function Logo() {
  const logo = require("../../../assets/images/logo.png");

  return (
    <View style={styles.logoView}>
        <Image
            source={logo}
            style={styles.logo}
        />
    </View>
  );
}
