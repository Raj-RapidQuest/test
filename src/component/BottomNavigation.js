import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {Image} from 'react-native';
import HomeScreen from '../screens/HomeScreen'
import Appointments from '../screens/Appointments'
import Notes from '../screens/Notes'
import Invoices from '../screens/Invoice'
import Hello from '../screens/SayHello'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const Tab = createMaterialBottomTabNavigator();
const Tabnavigator = () => {
    return <Tab.Navigator  
            barStyle={{ backgroundColor : "#a349a4"}}
            labeled={true}
            shifting={true}
            titleDisplayMode={true}
           >
            
       
       <Tab.Screen 
            name='Home'
            component={HomeScreen}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size ,labeled}) => (
                <MaterialCommunityIcons name="home" color={color} size={25} labeled={true} />
            ),
        }}/>
       <Tab.Screen 
            name='Appointments' 
            component={Appointments} 
            options={{
                tabBarLabel: 'Appointments',
                tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="calendar-month-outline" color={color} size={25}/> 
         ),
        }}/>
       <Tab.Screen 
            name='Treatment' 
            component={Notes} 
            options={{
                tabBarLabel: 'Notes',
                labeled:'true',
                titleDisplayMode: 'true',
                tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="clipboard-pulse-outline" color={color} size={25} />
          ),
        }}/>
       <Tab.Screen 
            name='Invoice' 
            component={Invoices} 
            options={{
                tabBarLabel: 'Invoice',
                tabBarIcon: ({ color, size=30 }) => (
                <MaterialCommunityIcons name="currency-usd" color={color} size={25} />
            ),
        }}/>
       <Tab.Screen 
            name='Say Hello' 
            component={Hello} 
            options={{
                tabBarLabel: 'Say Hello',
                tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="phone-message" color={color} size={25} />
          ),
        }}/>  
    </Tab.Navigator>
        
    
}
export default Tabnavigator;
