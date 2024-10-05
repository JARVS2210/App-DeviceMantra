import { StyleSheet, Text, View, Dimensions, Image, ScrollView, Platform, StatusBar} from 'react-native'
import React from 'react'
import CustomCarousel from '../../common/carousel/CustomCarousel'

//import the fetched data from service
import { imageCarouselData } from '../../../services/home/FetchImageCarousel'
import LinearGradient from 'react-native-linear-gradient'
import Colors from '../../../constants/Colors'
import LookingForWhatList from './LookingForWhatList'


const HomePage = ({navigation}) => {
  return (
    <ScrollView>
        <LinearGradient colors={Colors.homeScreenGradientBackground}>
            <View style={styles.carouselContainer}>
                <CustomCarousel itemList={imageCarouselData}/>
            </View>
            <View style = {styles.lineStyle} />
            <Text style={styles.textLookingFor}>What are you looking for?</Text>
            <LookingForWhatList navigation={navigation}/>
        </LinearGradient>
    </ScrollView>
    );
}

export default HomePage

const styles = StyleSheet.create({
    brandName: {
        fontSize: 25,
        fontFamily: "georgia",
        fontWeight: '400',
        color: Colors.black
    },
    carouselContainer: {
        flex: 1,
        paddingTop: 10
    },
    lineStyle:{
    borderWidth: 0.5,
    borderColor: Colors.lightGray,
    marginHorizontal:10,
   },
   textLookingFor: {
    color: Colors.black,
    padding: 10,
    fontSize: 20
   }
})