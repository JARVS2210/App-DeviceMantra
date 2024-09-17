import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Colors from '../constants/Colors'
import AccountNavigations from '../navigations/AccountNavigations'


const AccountScreen = () => {
  return (
    <LinearGradient style={styles.container} colors={Colors.accountScreenGradientBackground}>
      <AccountNavigations></AccountNavigations>
    </LinearGradient>
  )
}

export default AccountScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
})