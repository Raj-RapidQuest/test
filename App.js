import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen'
import TabNavigator from './src/component/BottomNavigation'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      
       <TabNavigator/>
       
    </NavigationContainer>
  );
}

export default App;