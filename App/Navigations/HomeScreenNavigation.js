 import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../Screen/HomeScreen';
import CourseDetailScreen from '../Screen/CourseDetailScreen';
import ChapterContentScreen from '../Screen/ChapterContentScreen';

const Stack= createStackNavigator();
export default function HomeScreenNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Acceuil' component={HomeScreen}/>
        <Stack.Screen name="Detail-cour" component={CourseDetailScreen}/>
        <Stack.Screen  name="chapter-content" component={ChapterContentScreen}/>
    </Stack.Navigator>
  )
}
