import React from 'react';
import { StatusBar } from 'react-native';

import {
  useFonts,
  Poppins_700Bold,
  Poppins_300Light
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';

import { ScreenRoutes } from './src/Providers/routes/screen.routes';
import { NaturalBeautyProvider } from './src/Providers/routes/NaturalBeautyProvider';

export default function App() {

  const [fontsLoading] = useFonts({
    Poppins_700Bold,
    Poppins_300Light
  });
  if (!fontsLoading) {
    return <AppLoading />
  }

  return (
    <NaturalBeautyProvider>
      <StatusBar
        backgroundColor='transparent'
        barStyle='light-content'
        translucent
      />
      <ScreenRoutes />
    </NaturalBeautyProvider>
  );
}