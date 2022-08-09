import React from "react";
import { COLORS, FAV_SCREEN } from "../Constants";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import FavScreen from '../screens/favs/FavsScreen'

const Stack = createNativeStackNavigator();

const FavoritesNavigator = () => (
    <Stack.Navigator
        initialRouteName={FAV_SCREEN}
        screenOptions={
            {
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? COLORS.primary : '',
                },
                headerTintColor: Platform.OS === 'android' ? COLORS.white : COLORS.primary,
                headerTitleStyle: { fontWeight: 'bold' }
            }
        }>
        <Stack.Screen
            name={FAV_SCREEN}
            component={FavScreen}
            options={{ title: "Favourite posts" }}
        />
    </Stack.Navigator>
);

export default FavoritesNavigator;