import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, Platform } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'

import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import Ionicons from "react-native-vector-icons/Ionicons"
import AntDesign from "react-native-vector-icons/AntDesign"

import LinearGradient from 'react-native-linear-gradient'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const Login = ({navigation}) => {
  
  return (
    <KeyboardAwareScrollView>
      <View style={styles.logoContainer}>
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
        <FontAwesome5 name={'user'} size={22} color={Colors.darkGray} style={styles.inputIcon}/>
        
        <TextInput placeholder='Email' placeholderTextColor={Colors.lightGray} style={styles.inputText}/>
      </View>

      {/* input field for password */}
      <View style={styles.inputContainer}>
        <Ionicons name={'key-outline'} size={22} color={Colors.darkGray} style={styles.inputIcon}/>
        
        <TextInput placeholder='Password' placeholderTextColor={Colors.lightGray} style={styles.inputText} secureTextEntry={true}/>
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
              <AntDesign name='arrowright' size={24} color={Colors.white}></AntDesign>
            </LinearGradient>
        </TouchableOpacity>
      </View>

      {/* Sign In with Google */}
      <View>
        <TouchableOpacity>
          <View style={[styles.signInWithBrandContainer, styles.signInWithGoogle]}>
            <Ionicons name="logo-google" size={25} color={Colors.white}></Ionicons>
            <Text style={styles.signInWithBrandText}>Sign In with Google</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Sign In with Apple */}
      <View>
        <TouchableOpacity>
          <View style={[styles.signInWithBrandContainer, styles.signInWithApple]}>
            <Ionicons name="logo-apple" size={25} color={Colors.white}></Ionicons>
            <Text style={styles.signInWithBrandText}>Sign In with Apple</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Don't have an account? */}
      <View>
        <View style={styles.dontHaveAccountContainer}>
          <Text style={styles.dontHaveAccountText}>Don't have an account? </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignUp')}
          >
            <Text style={styles.dontHaveAccountSignUpText}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>    
  )
}

export default Login

const styles = StyleSheet.create({
    logoContainer:{
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
        fontSize: 25,
        padding: 20,
        fontWeight: "400",
        fontFamily: "georgia",
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
        padding: 5,
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
        fontSize: 18,
        flex:1,
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
      fontSize: 20,
      color: Colors.black,
    },
    signInButtonGradient: {
      height: 30,
      width: 60,
      marginLeft: 10,
      borderRadius: 20,
      paddingLeft: 17,
      paddingTop: 2
    },
    signInWithBrandContainer: {
      flexDirection: "row",
      width: 320,
      margin: "auto",
      marginTop: 25,
      borderBlockColor: Colors.darkGray,
      paddingVertical: 8,
      borderRadius: 20,
      paddingLeft: 50
    },
    signInWithBrandText: {
      fontSize: 20,
      paddingHorizontal: 20,
      color: Colors.white, 
    },
    signInWithGoogle:{
      backgroundColor: Colors.blue
    },
    signInWithApple: {
      display: Platform.OS === "ios" ? "flex" : "none",
      backgroundColor: Colors.black,
      color: Colors.white
    },
    dontHaveAccountContainer:{
      flexDirection:"row",
      justifyContent: "flex-end",
      padding: 25
    },
    dontHaveAccountText: {
      color: Colors.darkGray,
      fontSize: 15
    },
    dontHaveAccountSignUpText: {
      color: Colors.primary,
      fontStyle: "italic"
    }
})