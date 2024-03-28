import React from "react";

import {
 useFonts,
 Poppins_700Bold,
 Poppins_300Light,
} from "@expo-google-fonts/poppins";

import AppLoading from "expo-app-loading";

import { StatusBar } from "react-native";
import { ScreenRoutes } from "./src/Global/Routes/screen.routes";
import { NaturalBeautyProvider } from "./src/Global/Providers/NaturalBeautyProvider";

export default function App() {
 const [fontsLoading] = useFonts({
  Poppins_700Bold,
  Poppins_300Light,
 });
 if (!fontsLoading) {
  return <AppLoading />;
 }

 return (
  <NaturalBeautyProvider>
   <StatusBar
    backgroundColor="transparent"
    barStyle="light-content"
    translucent
   />
   <ScreenRoutes />
  </NaturalBeautyProvider>
 );
}
