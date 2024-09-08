import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Colors from '../constants/Colors'

const ServicesOfferedScreen = () => {
  return (
    <LinearGradient style={styles.container} colors={Colors.servicesOfferedScreenGradientBackground}>
      <View>
        <Text>ServicesOfferedScreen</Text>
      </View>
    </LinearGradient>
  )
}

export default ServicesOfferedScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
})