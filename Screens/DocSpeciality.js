 import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function DocSpeciality() {
  return (
    <View style={{ }}>
      <View style={{flexDirection:'row',justifyContent:'space-between',}}>
        <View>
        <TouchableOpacity
          style={{
            height: 75,
            width: 75,
            borderRadius:50,
            backgroundColor: "#D7E3FF",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons name="people" size={24} color={"#417FFF"} />
        </TouchableOpacity>
        <Text style={{ fontSize: 14, fontWeight: "400", color: "#1a1a1a",textAlign:'center' }}>
          General..
        </Text>
        </View>

        <View>
          <TouchableOpacity
            style={{
              height: 75,
              width: 75,
              borderRadius:50,
              backgroundColor: "#D7E3FF",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FontAwesome5 name="tooth" size={24} color="#417fff" />
          </TouchableOpacity>
          <Text style={{ fontSize: 14, fontWeight: "400", color: "#1a1a1a",textAlign:'center' }}>
            Dentist..
          </Text>
        </View>

        <View>
          <TouchableOpacity
            style={{
              height: 75,
              width: 75,
              borderRadius:50,
              backgroundColor: "#D7E3FF",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons name="eye" size={24} color={"#417FFF"} />
          </TouchableOpacity>
          <Text style={{ fontSize: 14, fontWeight: "400", color: "#1a1a1a",textAlign:'center' }}>
            Ophthal..
          </Text>
        </View>

        <View>
          <TouchableOpacity
            style={{
              height: 75,
              width: 75,
              borderRadius:50,
              backgroundColor: "#D7E3FF",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MaterialCommunityIcons
              name="nutrition"
              size={24}
              color="#417fff"
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 14, fontWeight: "400", color: "#1a1a1a",textAlign:'center' }}>
            Nutriti..
          </Text>
        </View>
      </View>

      <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>

        <View>
        <TouchableOpacity
          style={{
            height: 75,
            width: 75,
            borderRadius:50,
            backgroundColor: "#D7E3FF",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FontAwesome5 name="brain" size={24} color="#417fff" />
        </TouchableOpacity>
        <Text style={{ fontSize: 14, fontWeight: "400", color: "#1a1a1a", textAlign:'center' }}>
          Neurolo..
        </Text>
        </View>

        <View>
          <TouchableOpacity
            style={{
              height: 75,
              width: 75,
              borderRadius:50,
              backgroundColor: "#D7E3FF",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FontAwesome5 name="child" size={24} color="#417fff" />
          </TouchableOpacity>
          <Text style={{ fontSize: 14, fontWeight: "400", color: "#1a1a1a",textAlign:'center' }}>
            Pediatr..
          </Text>
        </View>

        <View>
          <TouchableOpacity
            style={{
              height: 75,
              width: 75,
              borderRadius:50,
              backgroundColor: "#D7E3FF",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FontAwesome5 name="bone" size={24} color="#417fff" />
          </TouchableOpacity>
          <Text style={{ fontSize: 14, fontWeight: "400", color: "#1a1a1a",textAlign:'center' }}>
            Radiolo..
          </Text>
        </View>

        <View>
          <TouchableOpacity
            style={{
              height: 75,
              width: 75,
              borderRadius:50,
              backgroundColor: "#D7E3FF",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MaterialIcons name="more" size={24} color="#417fff" />
          </TouchableOpacity>
          <Text style={{ fontSize: 14, fontWeight: "400", color: "#1a1a1a",textAlign:'center' }}>
            More
          </Text>
        </View>
      </View>
    </View>
  );
}
