import React from "react";

import { theme } from "../Styles/theme";
import { Home } from "../../Screens/Home";
import { Cart } from "../../Screens/Cart";
import { MaterialIcons } from "@expo/vector-icons";
import { Favorites } from "../../Screens/Favorites";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export type TabRoutesParams = {
 HOME: any;
 FAVORITES: any;
 CART: any;
};

export enum TabRoutesNames {
 HOME = "Home",
 FAVORITES = "Favorites",
 CART = "Cart",
}

const Tab = createBottomTabNavigator();

export function TabRoutes() {
 return (
  <Tab.Navigator
   initialRouteName={TabRoutesNames.FAVORITES}
   screenOptions={{
    headerShown: false,
    tabBarActiveTintColor: theme.colors.paleBlue,
    tabBarActiveBackgroundColor: theme.colors.gray,
    tabBarInactiveBackgroundColor: theme.colors.gray,
   }}
  >
   <Tab.Screen
    name={TabRoutesNames.HOME}
    component={Home}
    options={{
     tabBarIcon: ({ color }) => (
      <MaterialIcons name="home" size={40} color={color} />
     ),
    }}
   />

   <Tab.Screen
    name={TabRoutesNames.FAVORITES}
    component={Favorites}
    options={{
     tabBarIcon: ({ color }) => (
      <MaterialIcons name="favorite" size={40} color={color} />
     ),
    }}
   />

   <Tab.Screen
    name={TabRoutesNames.CART}
    component={Cart}
    options={{
     tabBarIcon: ({ color }) => (
      <MaterialIcons name="shopping-bag" size={40} color={color} />
     ),
    }}
   />
  </Tab.Navigator>
 );
}
