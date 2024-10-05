import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Colors from '../constants/Colors';

// Initialize the top Tab
const TopTab = createMaterialTopTabNavigator();

// const TopTabNavigations = () => {
//   return (
//     <TopTab.Navigator
//       initialRouteName='HomePage'
//       screenOptions = {{
//         tabBarActiveTintColor: Colors.primary
//       }}
//     >
//       <TopTab.Screen name=''
//     </TopTab.Navigator>
//   )
// }

export default TopTabNavigations

const styles = StyleSheet.create({})