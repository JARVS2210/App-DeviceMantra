import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// import Stack declared in AccountNavigations
import { Stack } from '../AccountNavigations'
import HomePage from '../../components/DeviceMantra/home/HomePage'
import BookATechnician from '../../components/DeviceMantra/home/BookATechnician'
import BuyNewElectronics from '../../components/DeviceMantra/home/BuyNewElectronics'
import BuyRefurbishedElectronics from '../../components/DeviceMantra/home/BuyRefurbishedElectronics'
import GetDeviceRepaired from '../../components/DeviceMantra/home/GetDeviceRepaired'
import GetSolutionWithAI from '../../components/DeviceMantra/home/GetSolutionWithAI'

const HomeNavigations = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
      }} initialRouteName='HomePage'>
      <Stack.Screen name='HomePage' component={HomePage}></Stack.Screen>
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