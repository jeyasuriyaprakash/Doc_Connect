 import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import React from "react";

import { Ionicons } from "@expo/vector-icons";
import Carouselpage from "./Carouselpage";
import DocSpeciality from "./DocSpeciality";
// import Apps1 from "./Apps1";

export default function Homepage({navigation}) { 
  return (
    <View style={{flex:1,backgroundColor:'#ffffff'}}>
      
      <View style={{ margin: 20,marginTop:10,  }}>
     
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row" }}>
            <Image
              style={{ height: 50, width: 50 }}
              source={require("../assets/str1image.png")}
            />
            <View style={{ justifyContent: "center", marginLeft: 10 }}>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{ fontSize: 12, fontWeight: "400", color: "#1a1a1a" }}
                >
                  Good Morning
                </Text>
                <Image source={require("../assets/hai.png")} />
              </View>
              <Text
                style={{ fontSize: 14, fontWeight: "600", color: "#1a1a1a" }}
              >
                Andrew Ainsley
              </Text>
            </View>
          </View>
          <View style={{ justifyContent: "center" }}>
            <View style={{ flexDirection: "row" }}>
              <Ionicons
                name="notifications-outline"
                size={25}
                color={"#1a1a1a"}
                style={{marginRight:10}}
              />
              <Ionicons name="heart-outline" size={25} color={"#1a1a1a"} />
            </View>
          </View>
        </View>

        <View style={{marginTop:20}}>
          <View
            style={{
              height: 50,
              width: "100%",
              borderRadius: 20,
              borderWidth:1,
              borderColor:'#d4d4d4',
              backgroundColor: "#fff",
              flexDirection:'row',
              alignItems:'center'
            }}
          >
            <Ionicons name="search" size={25} color={"#1a1a1a"} style={{marginLeft:10,marginRight:20}} />
            <TextInput style={{fontSize:15,fontWeight:'400',color:'#1a1a1a',height:50,width:'100%'}} placeholder="Search">

            </TextInput>
          </View>
        </View>

        <View style={{marginTop:20}}>
            <Carouselpage />
        </View>

        <View style={{}}>
           <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <Text style={{color:'#1a1a1a',fontSize:17,fontWeight:'500'}}>Doctor Speciality</Text> 
           <Text style={{color:'#0856FF',fontSize:15,fontWeight:'500'}}>See All</Text>
           </View> 
        </View>

        <View style={{marginTop:20}}>
            <DocSpeciality />
        </View>

        <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 30,
                marginBottom:10,
              }}
            >
              <TouchableOpacity
                style={{
                  height: 50,
                  width: "100%",
                  backgroundColor: "#0856FF",
                  borderRadius: 20,
                  elevation: 5,
                  alignItems: "center",
                  justifyContent: "center",
                }} onPress={() => navigation.navigate ('PatientDetails')}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: "500",
                    color: "#ffffff",
                  }}
                >
                  Book Appointment
                </Text>
              </TouchableOpacity>
            </View>

            </ScrollView> 

      </View>
      
</View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroungColor: "#c1c9",
  },
});
