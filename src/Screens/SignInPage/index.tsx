import React from "react";

import Background from "../../Components/Background";
import Icon from "react-native-vector-icons/FontAwesome";

import { styles } from "./styles";
import { Button } from "react-native-paper";
import { View, Image, Text } from "react-native";
import { theme } from "../../Global/Styles/theme";
import { useNavigation } from "@react-navigation/native";
import { ScreenRoutesNames } from "../../Global/Routes/screen.routes";

export function SignInPage() {
 const navigation = useNavigation();

 function handleSignIn() {
  navigation.navigate(ScreenRoutesNames.TAB_ROUTES);
 }

 return (
  <Background>
   <View style={styles.image}>
    <Image
     source={require("../../../assets/picture.png")}
     resizeMethod="scale"
    />
   </View>
   <View style={styles.containerDown}>
    <Text style={styles.subtitle}>Meet new era of</Text>

    <View style={styles.buttonRow}>
     <Text style={styles.title}>Natural Beauty Cosmetics</Text>

     <Button mode="contained" style={styles.button} onPress={handleSignIn}>
      <Icon name="chevron-right" size={30} color={theme.colors.gray} />
     </Button>
    </View>
   </View>
  </Background>
 );
}
