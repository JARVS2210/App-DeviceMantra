import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import ImageCarousel from '../../../interfaces/ImageCarouselType'
import LinearGradient from 'react-native-linear-gradient'
import Colors from '../../../constants/Colors'
import Animated, { Extrapolation, interpolate, SharedValue, useAnimatedStyle } from 'react-native-reanimated'

type props = {
  item: ImageCarousel,
  index: number,
  scrollX: SharedValue<number>
}

// get the screen width
const {width} = Dimensions.get('screen')

const SliderItem = ({item, index, scrollX}: props) => {
  // Animation Style
  const animatedStyle = useAnimatedStyle(()=> {
    return {
      transform: [
        {
          translateX: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width], // input range
            [-width * 0.15, 0, width * 0.15], // output range
            Extrapolation.CLAMP
          ),
        },
        {
          scale: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width], // input range [previous, current, next]
            [0.9, 1, 0.9], // output range
            Extrapolation.CLAMP
          ),
        }
      ],
    }
  });
  return (
    <Animated.View style={[styles.SliderContainer, animatedStyle]}>
      <Image source={item.imagePath} style={styles.SliderImage}/>
      <LinearGradient colors={['transparent', 'rgba(0,0,0,0.3)']} style={styles.ImageBackground}>
        <View style={{gap: 10}}>
          <Text style={item.showTitle ? styles.ImageTitle : {display: 'none'}}>{item.title}</Text>
          <Text style={item.showDescription ? styles.ImageDescription : {display: 'none'}}>{item.description}</Text>
        </View>
      </LinearGradient>
    </Animated.View>
  )
}

export default SliderItem

const styles = StyleSheet.create({
  SliderContainer:{
    alignItems: 'center',
    gap: 5,
    width: width,
  },
  SliderImage: {
    width: width*0.85,
    height: 180,
    resizeMode: 'cover',
    borderRadius: 20
  },
  ImageBackground: {
    position: 'absolute',
    height: 180,
    width: width*0.85,
    borderRadius: 20,
    padding: 20,
    justifyContent: 'flex-end'
  },
  ImageTitle: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: 'bold'
  },
  ImageDescription: {
    color: Colors.white,
    fontSize: 13
  }
})