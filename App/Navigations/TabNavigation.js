import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../Screen/HomeScreen';
import MyCourse from '../Screen/MyCourse';
import LeaderBorder from '../Screen/LeaderBorder';
import ProfileScreen from '../Screen/ProfileScreen';
import {Ionicons} from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import HomeScreenNavigation from './HomeScreenNavigation';


const Tab= createMaterialBottomTabNavigator();
export default function TabNavigation () {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false
    }}>
        <Tab.Screen name='Acceuil' component={HomeScreenNavigation}
        options={{
            tabBarIcon:({color,size})=>(<Ionicons name="home" size={20} color={color}/>)
        }}
        />
        <Tab.Screen name='E-books' component={MyCourse}
          options={{
            tabBarIcon:({color,size})=>(<FontAwesome name="book" size={24} color="black" />)
        }}
        />
        <Tab.Screen name='Scores' component={LeaderBorder}
          options={{
            tabBarIcon:({color,size})=>(<MaterialIcons name="leaderboard" size={24} color="black" />)
        }}
        />
        <Tab.Screen name='Profile' component={ProfileScreen}
          options={{
            tabBarIcon:({color,size})=>(<Feather name="user" size={24} color={color} />)
        }}
        />
    </Tab.Navigator>
  )
}

