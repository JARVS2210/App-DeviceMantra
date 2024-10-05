import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const DMCommunityBottomTabs = () => {
  return (
    <View>
      <View style={styles.brandContainer}>
        <Image source={require("../assets/images/logo/logo-no-background.png")} style={styles.logoImage}/>
        <Text style={styles.brandName}>DeviceMantra</Text>
      </View>
    </View>
  )
}

export default DMCommunityBottomTabs

const styles = StyleSheet.create({
  brandContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  logoImage: {
    height: 40,
    width: 64
  },

})