import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Colors from '../constants/Colors'

const SearchScreen = () => {
  return (
    <LinearGradient style={styles.container} colors={Colors.searchScreenGradientBackground}>
      <View>
        <Text>SearchScreen</Text>
      </View>
    </LinearGradient>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})