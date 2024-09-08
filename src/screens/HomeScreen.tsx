import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Colors from '../constants/Colors'

const HomeScreen = () => {
  return (
    <LinearGradient style={styles.container} colors={Colors.homeScreenGradientBackground}>
      <View>
        <Text>HomeScreen</Text>
      </View>
    </LinearGradient>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
})