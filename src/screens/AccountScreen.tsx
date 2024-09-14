import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Colors from '../constants/Colors'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../components/account/Login'
import ForgotPassword from '../components/account/ForgotPassword'

// initialize the stack
const Stack = createNativeStackNavigator();

const AccountScreen = () => {
  return (
    <LinearGradient style={styles.container} colors={Colors.accountScreenGradientBackground}>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      </Stack.Navigator>
    </LinearGradient>
  )
}

export default AccountScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
})