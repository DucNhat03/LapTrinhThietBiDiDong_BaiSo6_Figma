import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Screen01 from './screens/Screen01'; 
import Screen02 from './screens/Screen02'; 




const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Screen01" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Screen01" component={Screen_01} />
        <Stack.Screen name="Screen02" component={Screen_02} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}