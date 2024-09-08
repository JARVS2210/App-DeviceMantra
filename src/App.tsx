import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import GPTScreen from './screens/GPTScreen';
import ServicesOfferedScreen from './screens/ServicesOfferedScreen';
import AccountScreen from './screens/AccountScreen';

// Initialize bottom tab
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeScreen}/>
        <Tab.Screen name='Search' component={SearchScreen}/>
        <Tab.Screen name='GPT' component={GPTScreen}/>
        <Tab.Screen name='Services' component={ServicesOfferedScreen}/>
        <Tab.Screen name='Account' component={AccountScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
