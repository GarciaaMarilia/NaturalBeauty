import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialIcons } from '@expo/vector-icons';

import { Favorites } from "../../Screens/Favorites";
import { Home } from "../../Screens/Home";
import { Cart } from "../../Screens/Cart";



const Tab = createBottomTabNavigator();

export function TabRoutes() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#02E3E5',
                tabBarActiveBackgroundColor: '#231A2B',
                tabBarInactiveBackgroundColor: '#231A2B',
            }}
        >

            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <MaterialIcons
                            name="home"
                            size={30}
                            color={color}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="Favorites"
                component={Favorites}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <MaterialIcons
                            name="favorite"
                            size={30}
                            color={color}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="Cart"
                component={Cart}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <MaterialIcons
                            name="shopping-bag"
                            size={30}
                            color={color}
                        />
                    )
                }}
            />

        </Tab.Navigator>
    );
}