import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Colors from '../constants/Colors'

const GPTScreen = () => {
  return (
    <LinearGradient style={styles.container} colors={Colors.GPTScreenGradientBackground}>
      <View>
        <Text>GPTScreen</Text>
      </View>
    </LinearGradient>
  )
}

export default GPTScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
})