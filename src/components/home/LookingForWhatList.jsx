import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import SimpleCard from '../common/cards/SimpleCard'


import AntDesign from 'react-native-vector-icons/AntDesign'
import Colors from '../../constants/Colors'

const LookingForWhatList = ({navigation}) => {
  return (
    <View>
      {/* First Row */}
      <View style={styles.cardRow}>
        <TouchableOpacity 
          onPress={() => navigation.navigate('BookATechnician')}
          style={styles.cardColumn}
        >
          <SimpleCard title={'Book A Technician'} 
                      imagePath={require('../../assets/images/cards/technician.png')} 
                      description={''}/>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => navigation.navigate('GetDeviceRepaired')}
          style={styles.cardColumn}
        >
          <SimpleCard title={'Get Device Repaired'} 
                      imagePath={require('../../assets/images/cards/get_device_repaired.png')} 
                      description={''}/>
        </TouchableOpacity>
      </View>
      
      {/* Second Row */}
      <View style={styles.cardRow}>
        <TouchableOpacity 
          onPress={() => navigation.navigate('BuyNewElectronics')}
          style={styles.cardColumn}
        >
          <SimpleCard title={'New Devices'} 
                      imagePath={require('../../assets/images/cards/new_phones.png')} 
                      description={''}/>
        </TouchableOpacity>
        
        <TouchableOpacity 
          onPress={() => navigation.navigate('BuyRefurbishedElectronics')}
          style={styles.cardColumn}
        >
          <SimpleCard title={'Refurbished Devices'} 
                      imagePath={require('../../assets/images/cards/refurbished_phones.png')} 
                      description={''}/>
        </TouchableOpacity>
      </View>

      {/* Third Row */}
      <View style={styles.cardRow}>
        <TouchableOpacity 
          onPress={() => navigation.navigate('BecomeACertifiedTechnician')}
          style={styles.cardColumn}
        >
          <SimpleCard title={'Become A Certified Technician'} 
                      imagePath={require('../../assets/images/cards/certified_technician.png')} 
                      description={''}/>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => navigation.navigate('GetSolutionWithAI')}
          style={styles.cardColumn}
        >
          <SimpleCard title={'Get Repair Solution With AI'} 
                      imagePath={require('../../assets/images/cards/solution_with_AI.png')} 
                      description={''}/>
        </TouchableOpacity>
      </View>

      {/* App Made Message */}
      <View style={styles.appMadeMessageContainer}>
        <Text style={styles.appMadeMessage}>Made with</Text>
        <AntDesign name={"heart"} size={20} color={Colors.love} style={styles.icon}/>
        <Text style={styles.appMadeMessage}>in India.</Text>
      </View>
    </View>
  )
}

export default LookingForWhatList

const styles = StyleSheet.create({
  cardRow: {
    flexDirection: 'row',
    paddingVertical: 5
  },
  cardColumn: {
    width: "50%"
  },
  appMadeMessageContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  appMadeMessage: {
    textAlign: 'center',
    fontSize: 18,
    color: Colors.darkGray
  },
  icon:{
    paddingHorizontal: 5,
    paddingTop: -5
  }
})