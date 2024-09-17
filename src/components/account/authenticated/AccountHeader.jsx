import { StyleSheet, Text, View, ScrollView, Platform, Image } from 'react-native'
import React from 'react'
import Colors from '../../../constants/Colors'

const AccountHeader = ({props}) => {
  return (
    <ScrollView>
      <View style={styles.headerContainer}>
        <Image source={require("../../../assets/images/profile_pictures/sample.jpeg")} style={styles.profilePicture}></Image>
        <Text style={styles.profileName}> {props.username}</Text>
      </View>
    </ScrollView>
  )
}

export default AccountHeader

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: "row",
        padding: 5,
        backgroundColor: Colors.white,
        margin: 15,
        borderRadius: 15
    },
    profilePicture: {
        width: 60,
        height: 60,
        borderRadius: 50,
        borderColor: Colors.black,
        borderWidth: 1
    },
    profileName: {
        paddingLeft: 8,
        fontSize: 27,
        paddingTop: 12,
        color: Colors.black
    }
})