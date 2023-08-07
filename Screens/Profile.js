import { View, Text, StyleSheet, TouchableOpacity, Image, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginLeft: 10,
          marginTop: 10,
        }}
      >
        <Ionicons
          name="chevron-back-outline"
          color={"#1a1a1a"}
          size={25}
          onPress={() => navigation.navigate("History")}
        />
        {/* <Entypo name="chevron-left" size={28} color="black"  onPress={()=>navigation.navigate('History')}/> */}
        <Text
          style={{
            fontSize: 23,
            fontWeight: "600",
            color: "#1a1a1a",
            paddingLeft: 10,
          }}
        >
          Profile
        </Text>
      </View>
      <View style={{ alignItems: "center", marginTop: 30 }}>
        {/* <View style={{height:110,width:110,backgroundColor:'#baba',borderRadius:80,alignItems:'center',justifyContent:'center'}}> */}
        <Image
          style={{ height: 100, width: 100, borderRadius: 50 }}
          source={require("../assets/doc3.jpg")}
        />

        {/* </View> */}
        <Text style={{ fontSize: 20, fontWeight: "600" }}>Andrew Ainsely</Text>
        <Text style={{ fontSize: 13, fontWeight: "400", marginTop: 5 }}>
          +1 111 467 387 300
        </Text>
      </View>
      <View style={{ alignItems: "center", marginTop: 60 }}>
        <View
          style={{
            height: 0,
            width: 320,
            backgroundColor: "#bfbfbf",
            borderWidth: 0.1,
          }}
        ></View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
          marginLeft: 20,
          marginRight: 20,
        }}
      >
        <Pressable
          style={{
            marginLeft: 0,
            marginTop: 20,
            marginBottom: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => navigation.navigate("ProfileView")}
        >
          <MaterialIcons name="person-outline" size={20} color="black" />
          <Text style={{ marginLeft: 20, fontSize: 17, fontWeight: "500" }}>
           Edit Profile
          </Text>
        </Pressable>
        <View style={{ marginTop: 20 }}>
          <Entypo name="chevron-small-right" size={24} color="black" />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginLeft: 20,
          marginRight: 20,
        }}
      >
        <View
          style={{
            marginLeft: 0,
            marginTop: 20,
            marginBottom: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MaterialCommunityIcons name="bell-outline" size={20} color="black" />
          <Text style={{ marginLeft: 20, fontSize: 17, fontWeight: "500" }}>
            Notification
          </Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Entypo name="chevron-small-right" size={24} color="black" />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginLeft: 20,
          marginRight: 20,
        }}
      >
        <View
          style={{
            marginLeft: 0,
            marginTop: 20,
            marginBottom: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MaterialIcons name="payment" size={20} color="black" />
          <Text style={{ marginLeft: 20, fontSize: 17, fontWeight: "500" }}>
            Payment
          </Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Entypo name="chevron-small-right" size={24} color="black" />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginLeft: 20,
          marginRight: 20,
        }}
      >
        <View
          style={{
            marginLeft: 0,
            marginTop: 20,
            marginBottom: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FontAwesome name="language" size={20} color="black" />
          <Text style={{ marginLeft: 20, fontSize: 17, fontWeight: "500" }}>
            Language
          </Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Entypo name="chevron-small-right" size={24} color="black" />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginLeft: 20,
          marginRight: 20,
        }}
      >
        <Pressable 
          onPress={()=> navigation.navigate('Login')}
          style={{
            marginLeft: 0,
            marginTop: 20,
            marginBottom: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }} 
        >
          <MaterialIcons name="logout" size={20} color="#ff0707"/>
          <Text
            style={{
              marginLeft: 20,
              fontSize: 17,
              fontWeight: "500",
              color: "#FF0707",
            }}
          >
            Logout
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});
