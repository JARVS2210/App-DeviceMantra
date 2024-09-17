import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import Colors from '../../../constants/Colors'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const AccountSettings = ({navigation}) => {
  return (
    <View style={styles.accountSettingsContainer}>
      {/* Edit Profile */}
      <View style={styles.accountSettingsElement}>
        <FontAwesome5 name={"user-edit"} size={16} color={Colors.black} />
        <TouchableOpacity
          style={styles.linkContainer}
          onPress={() => navigation.navigate('EditProfile')
        }>
          <Text style={styles.accountSettingsElementText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      <View style = {styles.lineStyle} />

      {/* Saved Cards */}
      <View style={styles.accountSettingsElement}>
        <FontAwesome5 name={"credit-card"} size={16} color={Colors.black} />
        <TouchableOpacity
          style={styles.linkContainer}
          onPress={() => navigation.navigate('SavedCards')}
        >
          <Text style={styles.accountSettingsElementText}>Saved Debit/Credit Cards</Text>
        </TouchableOpacity>
      </View>
      <View style = {styles.lineStyle} />

      {/* Saved Addresses and Locations */}
      <View style={styles.accountSettingsElement}>
        <FontAwesome5 name={"location-arrow"} size={16} color={Colors.black} />
        <TouchableOpacity
          style={styles.linkContainer}
          onPress={() => navigation.navigate('SavedAddresses')}
        >
          <Text style={styles.accountSettingsElementText}>Saved Addresses and Locations</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AccountSettings

const styles = StyleSheet.create({
  accountSettingsContainer: {
    backgroundColor: Colors.white,
    marginHorizontal: 15,
    borderRadius: 15
  },
  accountSettingsElement:{
    flexDirection: "row",
    padding: 10,
  },
  linkContainer: {
    flexDirection: "row",
    flex: 1
  },
  accountSettingsElementText: {
    paddingHorizontal: 10,
    fontSize: 15,
  },
  lineStyle:{
    borderWidth: 0.5,
    borderColor: Colors.lightGray,
    marginHorizontal:10,
   }

})