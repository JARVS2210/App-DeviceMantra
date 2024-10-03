import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImageCarousel from '../../../interfaces/ImageCarouselType'
import Animated, { Extrapolation, interpolate, SharedValue, useAnimatedStyle } from 'react-native-reanimated';
import Colors from '../../../constants/Colors';

type props = {
  items: ImageCarousel[];
  paginationIndex: number;
  scrollX: SharedValue<number>;
}

// get the screen width
const {width} = Dimensions.get('screen');

const Pagination = ({items, paginationIndex, scrollX}: props) => {
  return (
    <View style={styles.paginationContainer}>
      {items.map((_,index) => {
        const paginationAnimationStyle = useAnimatedStyle(() => {
          const dotWidth = interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width], // input range
            [8, 20, 8],
            Extrapolation.CLAMP
          );

          return {
            width: dotWidth
          }
        });
        return (
          <Animated.View key={index} style={[
            //paginationAnimationStyle, 
            styles.paginationDot, {backgroundColor: paginationIndex === index ? Colors.black : Colors.lightGray}
          ]}/>
        )
      })}
    </View>
  )
}

export default Pagination

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  paginationDot: {
    backgroundColor: Colors.darkGray,
    height: 8,
    width: 8,
    marginHorizontal: 2,
    borderRadius: 8
  }
})