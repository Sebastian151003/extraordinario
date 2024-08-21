import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GalleryScreen from './screens/GalleryScreen';
import CompareScreen from './screens/CompareScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Galeria">
        <Stack.Screen name="Galeria" component={GalleryScreen} />
        <Stack.Screen name="Comparar" component={CompareScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}