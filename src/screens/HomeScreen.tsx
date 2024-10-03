import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Colors from '../constants/Colors'
import HomeNavigations from '../navigations/HomeNavigations'

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