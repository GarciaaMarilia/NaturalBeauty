import React from "react";

import { TabRoutes } from "./tab.routes";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

export type ScreenRoutesParams = {
 TAB_ROUTES: any;
};

export enum ScreenRoutesNames {
 TAB_ROUTES = "TabRoutes",
}

const Stack = createStackNavigator();

export function ScreenRoutes() {
 return (
  <NavigationContainer>
   <Stack.Navigator
    screenOptions={{
     headerShown: false,
    }}
   >
    <Stack.Screen name={ScreenRoutesNames.TAB_ROUTES} component={TabRoutes} />
   </Stack.Navigator>
  </NavigationContainer>
 );
}
