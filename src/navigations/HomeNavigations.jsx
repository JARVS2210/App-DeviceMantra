import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Home from '../components/home/Home'

// import Stack declared in AccountNavigations
import { Stack } from './AccountNavigations'
import BecomeACertifiedTechnician from '../components/home/BecomeACertifiedTechnician'
import BookATechnician from '../components/home/BookATechnician'
import BuyNewElectronics  from '../components/home/BuyNewElectronics'
import BuyRefurbishedElectronics from '../components/home/BuyRefurbishedElectronics'
import GetDeviceRepaired from '../components/home/GetDeviceRepaired'
import GetSolutionWithAI from '../components/home/GetSolutionWithAI'

const HomeNavigations = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
      }} initialRouteName='Home'>
      <Stack.Screen name='Home' component={Home}></Stack.Screen>
      <Stack.Screen name="BecomeACertifiedTechnician" component={BecomeACertifiedTechnician}></Stack.Screen>
      <Stack.Screen name="BookATechnician" component={BookATechnician}></Stack.Screen>
      <Stack.Screen name="BuyNewElectronics" component={BuyNewElectronics}></Stack.Screen>
      <Stack.Screen name="BuyRefurbishedElectronics" component={BuyRefurbishedElectronics}></Stack.Screen>
      <Stack.Screen name="GetDeviceRepaired" component={GetDeviceRepaired}></Stack.Screen>
      <Stack.Screen name="GetSolutionWithAI" component={GetSolutionWithAI}></Stack.Screen>
    </Stack.Navigator>
  )
}

export default HomeNavigations

const styles = StyleSheet.create({})