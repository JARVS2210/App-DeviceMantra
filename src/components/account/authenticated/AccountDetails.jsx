import { Platform, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AccountHeader from './AccountHeader';
import AccountSettings from './AccountSettings';

// initialize the stack
const Stack = createNativeStackNavigator();

const AccountDetails = ({navigation}) => {
  return (
    <ScrollView >
        {/* AccountHeader */}
        <View style={styles.accountHeaderContainer}>
            <AccountHeader props={{username: "Sample Name"}}></AccountHeader>
        </View>

        {/* AccountSettings */}
        <View style={styles.accountSettingsText}>
            <Text>Account Settings</Text>
        </View>
        <View>
            <AccountSettings navigation={navigation}></AccountSettings>
        </View>
    </ScrollView>
  )
}

export default AccountDetails

const styles = StyleSheet.create({
    accountHeaderContainer: {
        marginTop: Platform.OS === "ios" ? 50 : 0,
    },
    accountSettingsText: {
        paddingLeft: 10,
        paddingBottom: 2,
    }
})