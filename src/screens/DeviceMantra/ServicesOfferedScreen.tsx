import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ServicesNavigations from '../../navigations/DeviceMantra/ServicesNavigations'

const ServicesOfferedScreen = () => {
  return (
    <View style={styles.container}>
      <ServicesNavigations></ServicesNavigations>
    </View>
  )
}

export default ServicesOfferedScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
})