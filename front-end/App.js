import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/pages/Home';
import Detail from './src/pages/Detail';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            {/* <Stack.Navigator
                headerMode='none'
                screenOptions={{
                    cardStyle: {
                        backgroundColor: colors.white
                    }
                }}
            > */}
            <Stack.Navigator >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Detail" component={Detail} />
                {/* <Stack.Screen name="Confirmation" component={Confirmation} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}