import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Colors from '../constants/Colors'

const AccountScreen = () => {
  return (
    <LinearGradient style={styles.container} colors={Colors.accountScreenGradientBackground}>
      <View>
        <Text>AccountScreen</Text>
      </View>
    </LinearGradient>
  )
}

export default AccountScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
})