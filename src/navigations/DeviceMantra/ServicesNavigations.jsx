import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// import Stack declared in AccountNavigations
import { Stack } from '../AccountNavigations'
import ServicesPage from '../../components/DeviceMantra/services_offered/ServicesPage'
import Sales from '../../components/DeviceMantra/services_offered/Sales'
import Resale from '../../components/DeviceMantra/services_offered/Resale'
import Repair from '../../components/DeviceMantra/services_offered/Repair'
import Warranty from '../../components/DeviceMantra/services_offered/Warranty'
import BecomeACertifiedTechnician from '../../components/DeviceMantra/services_offered/BecomeACertifiedTechnician'


const ServicesNavigations = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
      }} initialRouteName='ServicePage'>
      <Stack.Screen name='ServicePage' component={ServicesPage}></Stack.Screen>
      <Stack.Screen name='Sales' component={Sales}></Stack.Screen>
      <Stack.Screen name='Resale' component={Resale}></Stack.Screen>
      <Stack.Screen name='Repair' component={Repair}></Stack.Screen>
      <Stack.Screen name='Warranty' component={Warranty}></Stack.Screen>
      <Stack.Screen name='BecomeACertifiedTechnician' component={BecomeACertifiedTechnician}></Stack.Screen>
    </Stack.Navigator>
  )
}

export default ServicesNavigations

const styles = StyleSheet.create({})