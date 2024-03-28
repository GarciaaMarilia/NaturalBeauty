import React from "react";

import { Text, View } from "react-native";
import { styles } from "./styles";
import { theme } from "../../Global/Styles/theme";

export function Home() {
 return (
  <View style={styles.content}>
   <Text style={styles.title}>
    Welcome to{" "}
    <Text style={{ color: theme.colors.orange }}>Natural Beauty</Text>
   </Text>
  </View>
 );
}
