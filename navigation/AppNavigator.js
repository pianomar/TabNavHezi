import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryProductScreen from '../screens/CategoryProductScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import { CATEGORIES_SCREEN, COLORS, DETAILS_SCREEN, PRODUCTS_SCREEN } from '../Constants';
import { Platform } from 'react-native';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName={CATEGORIES_SCREEN} screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? COLORS.primary : '',
            },
            headerTintColor: Platform.OS === 'android' ? COLORS.white : COLORS.primary,
            headerTitleStyle: { fontWeight: 'bold' }
        }}>
            <Stack.Screen name={CATEGORIES_SCREEN} component={CategoriesScreen} options={{ title: "Home" }} />
            <Stack.Screen name={PRODUCTS_SCREEN} component={CategoryProductScreen} options={({ route }) => ({
                title: route.params.name
            })} />
            <Stack.Screen name={DETAILS_SCREEN} component={ProductDetailScreen} options={(route) => ({
                title: "Details"
            })} />
        </Stack.Navigator>
    )
}

export default AppNavigator;