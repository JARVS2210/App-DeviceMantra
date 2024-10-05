import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeNavigations from '../../navigations/DeviceMantra/HomeNavigations'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HomeNavigations></HomeNavigations>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
})