import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Colors from '../../../constants/Colors'
import CircularCard from '../../common/cards/CircularCard'
import SimpleCard from '../../common/cards/SimpleCard'

const ServicesPage = ({navigation}) => {
  return (
    <ScrollView>
      <LinearGradient colors={Colors.servicesOfferedScreenGradientBackground}>
        <View style={styles.servicePageContainer}>
          <Text style={styles.serviceOfferedText}>Services Offered</Text>
          <Text style={styles.serviceOfferedDescriptionText}>Explore our curated selection of services offered just for you</Text>
          <View style={styles.circularCardContainer}>
            {/* Services Card First Row */}
            <View style={styles.circularCardRow}>
              {/* Sales page link */}
              <TouchableOpacity 
                onPress={() => navigation.navigate('Sales')}
                style={styles.circularCardColumn}
              >
                <CircularCard title={'Sales'} imagePath={require("../../../assets/images/cards/sales.png")}/>
              </TouchableOpacity>

              {/* Resale page link */}
              <TouchableOpacity 
                onPress={() => navigation.navigate('Resale')}
                 style={styles.circularCardColumn}
              >
                <CircularCard title={'Resale'} imagePath={require("../../../assets/images/cards/resale.png")}/>
              </TouchableOpacity>
            </View>
            
            {/* Services Card Second Row for Brand*/}
            <View style={styles.circularCardRow}>
              {/* Home page link */}
              <TouchableOpacity 
                onPress={() => navigation.navigate('HomePage')}
                 style={styles.circularCardBrand}
              >
                <CircularCard title={''} imagePath={require("../../../assets/images/logo/logo.png")}/>
              </TouchableOpacity>
            </View>

            {/* Services Card Third Row */}
            <View style={styles.circularCardRow}>
              {/* Repair page link */}
              <TouchableOpacity 
                onPress={() => navigation.navigate('Repair')}
                 style={styles.circularCardColumn}
              >
                <CircularCard title={'Repair'} imagePath={require("../../../assets/images/cards/repair.png")}/>
              </TouchableOpacity>
              {/* Warranty page link */}
              <TouchableOpacity 
                onPress={() => navigation.navigate('Warranty')}
                 style={styles.circularCardColumn}
              >
                <CircularCard title={'Warranty'} imagePath={require("../../../assets/images/cards/warranty.png")}/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.otherServicesContainer}>
            <Text style={styles.otherServicesText}>We also provide the opportunities to enhance your skill through our comprehensive 
            training program "Fu-Tech" which essentially means Future Technicians.
            </Text>
            <View style={styles.trainingCardContainer}>
              <SimpleCard 
                title={"Fu-Tech"} 
                imagePath={require("../../../assets/images/cards/certified_technician.png")} 
                description={"Join our mission to build a future-ready workforce. Device Mantra provides top-notch training and certification in electronics repair and maintenance, creating a steady pipeline of highly skilled technicians who meet our exacting standards."}
                isButtonEnabled={true}
                buttonName={"Know More"}
                navTarget={"BecomeACertifiedTechnician"} 
                navigation={navigation}
              />
            </View>
            <View style = {styles.lineStyle} />
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  )
}

export default ServicesPage

const styles = StyleSheet.create({
  servicePageContainer: {
    paddingTop: 60,
    padding: 10
  },
  serviceOfferedText: {
    fontSize: 25,
    color: Colors.black,
    fontWeight: 'bold'
  },
  serviceOfferedDescriptionText: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    color: Colors.black,
    fontSize: 18
  },
  circularCardContainer: {

  },
  circularCardRow: {
    flex: 1,
    flexDirection: 'row',
    width: "100%",
    paddingVertical: 5,
    justifyContent: 'center',
  },
  circularCardColumn: {
    width: "33%",
    marginHorizontal: 40
  },
  circularCardBrand: {
    width: "33%",
    alignContent: 'center',
    marginVertical: -35
  },
  otherServicesContainer: {
    padding: 10,
    paddingVertical: 20
  },
  otherServicesText: {
    textAlign: 'left',
    fontSize: 18,
    color: Colors.black
  },
  trainingCardContainer:{
    paddingVertical: 20
  },
  lineStyle:{
    borderWidth: 0.5,
    borderColor: Colors.darkGray,
    marginHorizontal:10,
   },
})