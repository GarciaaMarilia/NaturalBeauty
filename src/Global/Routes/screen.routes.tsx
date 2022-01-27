import React from "react";

import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';

import { InitialPage } from "../../Screens/InitialPage";
import { Cart } from "../../Screens/Cart";
import { Home } from "../../Screens/Home";
import { Favorites } from "../../Screens/Favorites";
import { TabRoutes } from "./tab.routes";


const Stack = createStackNavigator();

export function ScreenRoutes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >

                <Stack.Screen
                    name="InitialPage"
                    component={InitialPage}
                />

                <Stack.Screen
                    name="Cart"
                    component={Cart}
                />

                <Stack.Screen
                    name="Home"
                    component={Home}
                />

                <Stack.Screen
                    name="Favorites"
                    component={Favorites}
                />

                <Stack.Screen
                    name="TabRoutes"
                    component={TabRoutes}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}