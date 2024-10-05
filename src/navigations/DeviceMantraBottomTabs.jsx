import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Ionicons from "react-native-vector-icons/Ionicons"

import Colors from '../constants/Colors'
import HomeScreen from '../screens/DeviceMantra/HomeScreen'
import SearchScreen from '../screens/DeviceMantra/SearchScreen'
import GPTScreen from '../screens/DeviceMantra/GPTScreen'
import ServicesOfferedScreen from '../screens/DeviceMantra/ServicesOfferedScreen'
import AccountScreen from '../screens/AccountScreen'

// Initialize bottom tab
const BottomTab = createBottomTabNavigator();

const DeviceMantraBottomTabs = () => {
  return (
    <BottomTab.Navigator screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.darkGray
    }}>
        <BottomTab.Screen name='Home' component={HomeScreen} options={{
          tabBarIcon: ({size, focused, color}) => {
            return <Ionicons name={focused?'home':'home-outline'} size={size} color={color}/>
          }
        }}/>
        <BottomTab.Screen name='Search' component={SearchScreen} options={{
          tabBarIcon: ({size, color, focused}) => {
            return <Ionicons name={focused?'search':'search-outline'} size={size} color={color}/>
          }
        }}/>
        <BottomTab.Screen name='GPT' component={GPTScreen} options={{
          tabBarIcon: ({size, color, focused}) => {
            return <MaterialCommunityIcons name={focused?'message-question':'message-question-outline'} size={size} color={color}/>
          }
        }}/>
        <BottomTab.Screen name='Services' component={ServicesOfferedScreen} options={{
          tabBarIcon: ({size, color, focused}) => {
            return <MaterialCommunityIcons name={focused?'hand-coin':'hand-coin-outline'} size={size} color={color}/>
          }
        }}/>
        <BottomTab.Screen name='Account' component={AccountScreen} options={{
          tabBarIcon: ({size, color, focused}) => {
            return <MaterialCommunityIcons name={focused?'account-circle':'account-circle-outline'} size={size} color={color}/>
          }
        }}/>
    </BottomTab.Navigator>
  )
}

export default DeviceMantraBottomTabs

const styles = StyleSheet.create({})