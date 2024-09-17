import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../components/account/Login';
import ForgotPassword from '../components/account/ForgotPassword';
import SignUp from '../components/account/SignUp';
import EditProfile from '../components/account/authenticated/EditProfile';
import SavedCards from '../components/account/authenticated/SavedCards';
import SavedAddresses from '../components/account/authenticated/SavedAddresses';
import AccountDetails from '../components/account/authenticated/AccountDetails';

// initialize the stack
const Stack = createNativeStackNavigator();

const AccountNavigations = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
      }} initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="AccountDetails" component={AccountDetails} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="SavedCards" component={SavedCards} />
        <Stack.Screen name="SavedAddresses" component={SavedAddresses} />

      </Stack.Navigator>
  )
}

export default AccountNavigations

const styles = StyleSheet.create({})