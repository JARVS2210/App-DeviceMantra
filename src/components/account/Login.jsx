import { Image, StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'

import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import Ionicons from "react-native-vector-icons/Ionicons"
import AntDesign from "react-native-vector-icons/AntDesign"

import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'


const Login = ({navigation}) => {
  
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image source={require("../../assets/images/logo/logo-no-background.png")} style={styles.logoImage}/>
      </View>
      <View>
        <Text style={styles.helloText}>Hi, Welcome to DeviceMantra!</Text>
      </View>
      <View>
        <Text style={styles.signInText}>Sign in to your account</Text>
      </View>

      {/* input field for Email */}
      <View style={styles.inputContainer}>
        <FontAwesome5 name={'user'} size={25} color={Colors.darkGray} style={styles.inputIcon}/>
        
        <TextInput placeholder='Email' style={styles.inputText}/>
      </View>

      {/* input field for password */}
      <View style={styles.inputContainer}>
        <Ionicons name={'key-outline'} size={25} color={Colors.darkGray} style={styles.inputIcon}/>
        
        <TextInput placeholder='Password' style={styles.inputText} secureTextEntry={true}/>
      </View>

      {/* Forgot password */}
      <View>
        <TouchableOpacity 
          onPress={() => navigation.navigate('ForgotPassword')}
        >
        <Text style={styles.forgotPassword}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
      
      {/* Sign In button */}
      <View style={styles.signInButtonContainer}>
        <Text style={styles.signInButtonText}>Sign In
         </Text>
        <TouchableOpacity >
            <LinearGradient colors={[Colors.darkGray, Colors.primary]} style={styles.signInButtonGradient}>           
              <AntDesign name='arrowright' size={25} color={Colors.white}></AntDesign>
            </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    imageContainer:{
        marginLeft: "auto",
        marginRight: "auto"
    },
    logoImage: {
        height: 80,
        width: 128,
        marginTop: 60,
        marginLeft: 25

    },
    helloText: {
        textAlign: "center",
        fontSize: 40,
        padding: 20,
        fontWeight: "500",
        color: Colors.primary
    },
    signInText: {
        textAlign: "center",
        fontSize: 20,
        color: Colors.black,
        marginBottom: 30
    },
    inputContainer: {
        backgroundColor: Colors.white,
        flexDirection: "row",
        padding: 10,
        borderRadius: 20,
        marginHorizontal: 20,
        marginVertical: 10, 
        elevation: 20,
        shadowOffset: { width: 5, height: 5 },  
        shadowColor: Colors.lightGray,  
        shadowOpacity: 1,  
        zIndex:10, 
    },
    inputIcon: {
        padding: 5
    },
    inputText: {
        padding: 5,
        fontSize: 20
    },
    forgotPassword:{
      fontStyle: "italic",
      color: Colors.darkGray,
      textAlign: "right",
      paddingRight: 30,
      fontSize: 17
    },
    signInButtonContainer: {
      flexDirection: "row",
      marginTop: 30,
      width: '90%',
      justifyContent: 'flex-end',
    },
    signInButtonText: {
      textAlign: 'center',
      fontSize: 20
    },
    signInButtonGradient: {
      height: 30,
      width: 60,
      marginLeft: 10,
      borderRadius: 20,
      paddingLeft: 15
    }

})