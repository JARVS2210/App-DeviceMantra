
import { Dimensions, Platform, StatusBar, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'


import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import DeviceMantraBottomTabs from './DeviceMantraBottomTabs';
import DMCommunityBottomTabs from './DMCommunityBottomTabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Colors from '../constants/Colors';


const {width} = Dimensions.get('screen')

// Initialize the top Tab
const TopTab = createMaterialTopTabNavigator();

const TopTabs = () => {
  insets = useSafeAreaInsets();
  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor='transparent' barStyle={'dark-content'}/>
      <TopTab.Navigator
        initialRouteName='DeviceMantra'
        tabBarPosition='top'
        screenOptions = {{
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveTintColor: Colors.darkGray,
          swipeEnabled: false,
          tabBarIndicatorStyle: {
            backgroundColor: Colors.primary,
            height: 5,
            width: 0.4*width,
            marginLeft: 0.05*width
          },
          tabBarAccessibilityLabel: "DeviceMantra",
          tabBarPressColor: 'transparent',
          tabBarPressOpacity: 1,
          tabBarLabelStyle: {
            fontSize: 16,
            fontWeight: 'bold',
            textTransform: 'none'
          },
          tabBarStyle: {
            paddingTop: StatusBar.currentHeight,
            backgroundColor: Colors.statusBarColor
          },

        }}
        style = {{
          paddingTop: Platform.OS === 'ios' ? insets.top : null,
          backgroundColor: Colors.statusBarColor
        }}      
      >
        <TopTab.Screen 
          name='DeviceMantra' 
          component={DeviceMantraBottomTabs} 
          options={{tabBarLabel: "DeviceMantra"}}

        />
        <TopTab.Screen 
          name='DMCommunity' 
          component={DMCommunityBottomTabs} 
          options={{tabBarLabel: "DM Community"}}
        />
      </TopTab.Navigator>
      </View>
  )
}

export default TopTabs

const styles = StyleSheet.create({

})