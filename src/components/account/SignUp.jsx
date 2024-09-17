import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

import Colors from '../../constants/Colors'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import LinearGradient from 'react-native-linear-gradient'

const SignUp = ({navigation}) => {
  return (
    <KeyboardAwareScrollView>
        <View style={styles.logoContainer}>
            <Image source={require("../../assets/images/logo/logo-no-background.png")} style={styles.logoImage}/>
        </View>

        <View>
            <Text style={styles.registerText}>Register Now for Unlimited Possibilities!</Text>
        </View>

        {/* input field for First Name */}
        <View style={styles.inputBlockContainer}>
            <View style={styles.labelContainer}>
                <Text style={styles.labelText}>First Name</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput placeholder='Rahul' placeholderTextColor={Colors.lightGray} style={styles.inputText}/>
            </View>
        </View>

        {/* input field for Last Name */}
        <View style={styles.inputBlockContainer}>
            <View style={styles.labelContainer}>
                <Text style={styles.labelText}>Last Name</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput placeholder='Agarwal' placeholderTextColor={Colors.lightGray} style={styles.inputText}/>
            </View>
        </View>

        {/* input field for Email */}
        <View style={styles.inputBlockContainer}>
            <View style={styles.labelContainer}>
                <Text style={styles.labelText}>Email Address</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput placeholder='example@example.com' placeholderTextColor={Colors.lightGray} style={styles.inputText}/>
            </View>
        </View>

        {/* input field for Password */}
        <View style={styles.inputBlockContainer}>
            <View style={styles.labelContainer}>
                <Text style={styles.labelText}>Password</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput placeholder='**********' placeholderTextColor={Colors.lightGray} style={styles.inputText} secureTextEntry={true} textContentType='oneTimeCode'/>
            </View>
        </View>

        {/* input field for Confirm Password */}
        <View style={styles.inputBlockContainer}>
            <View style={styles.labelContainer}>
                <Text style={styles.labelText}>Confirm Password</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput placeholder='**********' placeholderTextColor={Colors.lightGray} style={styles.inputText} secureTextEntry={true} textContentType='oneTimeCode'/>
            </View>
        </View>

        {/* Sign Up button */}
        <View style={styles.signUpButtonContainer}>
            <Text style={styles.signUpButtonText}>Sign Up
            </Text>
            <TouchableOpacity >
                <LinearGradient colors={[Colors.darkGray, Colors.primary]} style={styles.signUpButtonGradient}>           
                <AntDesign name='arrowright' size={24} color={Colors.white}></AntDesign>
                </LinearGradient>
            </TouchableOpacity>
        </View>

        {/* Already have an account? */}
        <View style={styles.alreadyHaveAccountContainer}>
          <Text style={styles.alreadyHaveAccountText}>Already have an account? </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.alreadyHaveAccountSignUpText}>Login</Text>
          </TouchableOpacity>
        </View>
    </KeyboardAwareScrollView>
  )
}

export default SignUp

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
    registerText: {
        textAlign: "center",
        fontSize: 25,
        padding: 20,
        fontWeight: "400",
        fontFamily: "georgia",
        color: Colors.primary
    },
    inputBlockContainer: {
        marginVertical: 7
    },
    labelContainer: {
        paddingLeft: 25,
        padding: 1
    },
    labelText: {
        fontSize: 18,
        color: Colors.black
    },
    inputContainer: {
        backgroundColor: Colors.white,
        flexDirection: "row",
        borderRadius: 20,
        marginHorizontal: 25, 
        elevation: 10,
        shadowOffset: { width: 5, height: 5 },  
        shadowColor: Colors.lightGray,  
        shadowOpacity: 1,  
        zIndex:10, 
    },
    inputText: {
        padding: 10,
        paddingLeft: 20,
        fontSize: 18,
        flex:1,
    },
    signUpButtonContainer: {
      flexDirection: "row",
      marginTop: 20,
      width: '90%',
      justifyContent: 'flex-end',
    },
    signUpButtonText: {
      textAlign: 'center',
      fontSize: 20,
      color: Colors.black,
    },
    signUpButtonGradient: {
      height: 30,
      width: 60,
      marginLeft: 10,
      borderRadius: 20,
      paddingLeft: 17,
      paddingTop: 2
    },
    alreadyHaveAccountContainer:{
      flexDirection:"row",
      justifyContent: "flex-end",
      padding: 20
    },
    alreadyHaveAccountText: {
      color: Colors.darkGray,
      fontSize: 15
    },
    alreadyHaveAccountSignUpText: {
      color: Colors.primary,
      fontStyle: "italic"
    }
})