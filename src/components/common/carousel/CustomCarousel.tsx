import { StyleSheet, Text, View, FlatList, ViewToken, Dimensions } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import SliderItem from './SliderItem'
import ImageCarouselType from '../../../interfaces/ImageCarouselType'
import { scrollTo, useAnimatedRef, useAnimatedScrollHandler, useDerivedValue, useSharedValue } from 'react-native-reanimated'
import Animated from 'react-native-reanimated'
import Pagination from './Pagination'


// get the screen width
const {width} = Dimensions.get('screen');

type props = {
  itemList : ImageCarouselType[]
}

const CustomCarousel = ({itemList}: props) => {
  // Animations
  const scrollX = useSharedValue(0);
  const [paginationIndex, setPaginationIndex] = useState(0);
  const [data, setData] = useState(itemList);
  const ref = useAnimatedRef<Animated.FlatList<any>>();
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const interval = useRef<NodeJS.Timeout>();
  const offset = useSharedValue(0);

  //implement autoplay hook
  useEffect(() => {
    if(isAutoPlay == true) {
      interval.current = setInterval(() => {
        offset.value = offset.value + width
      }, 2000); // change is interval here in ms
    } else {
      clearInterval(interval.current);
    }

    return () => {
      clearInterval(interval.current)
    }
  }, [isAutoPlay, offset, width]);

  // useEffect is hook from react and use useDerivedValue hook for react-native-reanimated
  useDerivedValue(() => {
    scrollTo(ref, offset.value, 0, true);
  });

  // onScrollHandler
  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      scrollX.value = e.contentOffset.x;
    },
    onMomentumEnd: (e) => {
      offset.value = e.contentOffset.x;
    }
  });

  //pagination config
  const onViewableItemsChanged = ({viewableItems}: {viewableItems: ViewToken[]}) => {
    if (viewableItems[0] !== undefined && viewableItems[0].index !== undefined && viewableItems[0].index !== null) {
      setPaginationIndex(viewableItems[0].index % itemList.length); // on reaching the end it should get the proper index on next loop
    }
  };
  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50
  };
  const viewabilityConfigCallbackPairs = useRef([
    {viewabilityConfig, onViewableItemsChanged}
  ]);
  return (
    <View>
      <Animated.FlatList data={data} renderItem={({item, index}) => (
          <SliderItem item={item} index={index} scrollX={scrollX}/>
        )}
        ref={ref}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={onScrollHandler}
        scrollEventThrottle={16} // for smoother scrolling
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        onEndReached={() => setData([...data, ...itemList])} // on reaching the end add the itemList to data
        onEndReachedThreshold={0.5} //onEndReached is triggered when the last item is 50% visible
        onScrollBeginDrag={() => {
          setIsAutoPlay(false)
        }}
        onScrollEndDrag={() => {
          setIsAutoPlay(true)
        }}
      />
      <View style={styles.paginatinContainer}>
        <Pagination items={itemList} paginationIndex={paginationIndex} scrollX={scrollX}/>
      </View>
    </View>
  )
}

export default CustomCarousel

const styles = StyleSheet.create({
  paginatinContainer: {
    padding: 10
  }
})