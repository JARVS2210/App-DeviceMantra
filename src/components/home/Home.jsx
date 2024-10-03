import { StyleSheet, Text, View, Dimensions, Image, ScrollView, Platform, StatusBar} from 'react-native'
import React from 'react'
import CustomCarousel from '../common/carousel/CustomCarousel'

//import the fetched data from service
import { imageCarouselData } from '../../services/home/FetchImageCarousel'
import LinearGradient from 'react-native-linear-gradient'
import Colors from '../../constants/Colors'
import LookingForWhatList from './LookingForWhatList'


const Home = ({navigation}) => {
  return (
    <ScrollView>
        <LinearGradient colors={Colors.homeScreenGradientBackground}>
            <View style={styles.brandContainer}>
                <Image source={require("../../assets/images/logo/logo-no-background.png")} style={styles.logoImage}/>
                <Text style={styles.brandName}>DeviceMantra</Text>
            </View>
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

export default Home

const styles = StyleSheet.create({
    brandContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        paddingTop: 60,
        marginLeft: 10,
    },
    brandName: {
        fontSize: 25,
        fontFamily: "georgia",
        fontWeight: '400',
        color: Colors.black
    },
    logoImage: {
        height: 40,
        width: 64
    },
    carouselContainer: {
        flex: 1,
    },
    lineStyle:{
    borderWidth: 0.5,
    borderColor: Colors.lightGray,
    marginHorizontal:10,
   },
   textLookingFor: {
    color: Colors.black,
    padding: 20,
    fontSize: 20
   }
})