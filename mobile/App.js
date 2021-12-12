import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/pages/Home';
import Detail from './src/pages/Detail';
import Search from './src/pages/Search';
import Create from './src/pages/Create';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
           
            <Stack.Navigator
                screenOptions={() => ({
                    headerShown: false,
                })}
            >
                <Stack.Screen 
                    name="Home" 
                    component={Home}
                />
                <Stack.Screen 
                    name="Detail" 
                    component={Detail}
                />
                <Stack.Screen 
                    name="Search" 
                    component={Search}
                />
                <Stack.Screen 
                    name="Create" 
                    component={Create}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}