import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../../constants/Colors'

const {width} = Dimensions.get('screen')

const CircularCard = ({title, imagePath}) => {
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image source={imagePath} style={styles.image}/>
        <View style={styles.titleTextContainer}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
      </View>
    </View>
  )
}

export default CircularCard

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    borderRadius: width/2,
    elevation: 5,
    shadowColor: Colors.black,
    shadowOffset: { width: 2, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    backgroundColor: Colors.white
  },
  image: {
    width: undefined,
    height: undefined,
    aspectRatio: 1,
    borderRadius: width/2,
    backgroundColor: Colors.white,
    position: 'relative'
  },
  titleTextContainer: {
    position: 'absolute',
    top: '80%',
    width: "100%"
  },
  titleText: {
    textAlign: 'center',
    fontSize: 16,
    color: Colors.black
  }
})