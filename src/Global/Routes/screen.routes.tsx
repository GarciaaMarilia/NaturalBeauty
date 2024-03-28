import React from "react";

import { TabRoutes } from "./tab.routes";
import { SignInPage } from "../../Screens/SignInPage";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

export type ScreenRoutesParams = {
 TAB_ROUTES: any;
 SIGN_IN_PAGE: any;
};

export enum ScreenRoutesNames {
 TAB_ROUTES = "TabRoutes",
 SIGN_IN_PAGE = "SignInPage",
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
    <Stack.Screen
     name={ScreenRoutesNames.SIGN_IN_PAGE}
     component={SignInPage}
    />

    <Stack.Screen name={ScreenRoutesNames.TAB_ROUTES} component={TabRoutes} />
   </Stack.Navigator>
  </NavigationContainer>
 );
}
