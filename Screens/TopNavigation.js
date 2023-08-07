import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Appointment2 from './Appointment2';
import Appointment3 from './Appointment3';
import {Ionicons} from '@expo/vector-icons'
import Appointment from './Appointment';



const TopTab = createMaterialTopTabNavigator();

export default function TopNavigation({navigation}) {
  return (


    <View style={{flex:1,backgroundColor:'#ffffff'}}>
         <View style={{ flexDirection: "row", alignItems: "center",height:50,backgroundColor:'#ffffff',marginTop:0 }}>
          <Ionicons style={{marginLeft:20}} name="chevron-back-outline" color={"#1a1a1a"} size={25} onPress={()=> navigation.navigate('Home')} />
          <Text
            style={{
              fontSize: 23,
              fontWeight: "600",
              color: "#1a1a1a",
              marginLeft: 10,
            }}
          >
            Appointment
          </Text>
        </View> 
    <TopTab.Navigator screenOptions={{
       headerShown: false,
        tabBarStyle: {
        //   height: 60,
          paddingBottom: -50,
        //   borderTopColor: "#c1c1c1",
        // marginTop:20,
        // paddingTop:30,
        backgroundColor:'#fff'

        },
        tabBarInactiveTintColor:'#ababab',
        tabBarActiveTintColor:'#0856FF'
      }} >    
    <TopTab.Screen  name="Upcoming" component={Appointment} />
    <TopTab.Screen name="Completed" component={Appointment2} />
    <TopTab.Screen name="Cancelled" component={Appointment3} />
  </TopTab.Navigator>
  </View>
  )
}
