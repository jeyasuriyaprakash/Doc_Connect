import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Entypo } from '@expo/vector-icons';  
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function History({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{flexDirection:'row',alignItems:'center'}}>
            
          <Ionicons name="chevron-back-outline" color={"#1a1a1a"} size={25}  onPress={()=>navigation.navigate('Appointment')} />
          <Text style={{ fontSize: 23, fontWeight: "600", color: "#1a1a1a",paddingLeft:10 }}>
            History
          </Text>
          </View>
          <View
            // style={{
            //   height: 35,
            //   width: 204,
            //   backgroundColor: "rgba(217, 217, 217, 0.5);",

            //   borderRadius: 20,
            //   flexDirection: "row",
            //   justifyContent: "space-between",
            //   alignItems: "center",
            //   paddingLeft: 10,
            //   paddingRight: 10,
            // }}
          >
            {/* <TextInput
              style={{ fontSize: 13, fontWeight: "400",width:150,height:35, }}
              placeholderTextColor={"#9d9d9d"}
              placeholder="Search"
            ></TextInput> */}
            <TouchableOpacity>
              <Ionicons name="search" size={25} color={"#1a1a1a"} />
            </TouchableOpacity>
          </View>
        </View>

{/* ------------------------------ main detalis ------------------------------- */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop:20
          }}
        >
          <View>
            <Image
              style={{
                resizeMode: "cover",
                height: 40,
                width: 40,
                borderRadius: 50,
              }}
              source={require("../assets/str1image.png")}
            />
          </View>
          {/* <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}} > */}
          <View style={{paddingRight:25}}>
            <Text style={{ fontSize: 16, fontWeight: "600", color: "#1a1a1a" }}>
              Dr.Tom jackson
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "500",
                color: "#737373",
                paddingTop: 10,
              }}
            >
              Name : Mikkle Token no : ABC15
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 11,
                fontWeight: "400",
                color: "#737373",
                paddingTop: 10,
              }}
            >
              Today,{"\n"}
              <Text
                style={{ fontSize: 12, fontWeight: "400", color: "#737373" }}
              >
                10:00 AM{" "}
              </Text>{" "}
            </Text>
          </View>
          {/* </View> */}
        </View>

        {/* ---------------------------- history Detalis ---------------------------------- */}


              {/* ------------------------------ main detalis ------------------------------- */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop:20
          }}
        >
          <View>
            <Image
              style={{
                resizeMode: "cover",
                height: 40,
                width: 40,
                borderRadius: 50,
              }}
              source={require("../assets/cardimg1.png")}
            />
          </View>
          {/* <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}} > */}
          <View style={{paddingRight:25}}>
            <Text style={{ fontSize: 16, fontWeight: "600", color: "#1a1a1a" }}>
              Dr.Salvatore Heredia
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "500",
                color: "#737373",
                paddingTop: 10,
              }}
            >
              Name : Jack Token no : ABC11
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 11,
                fontWeight: "400",
                color: "#737373",
                paddingTop: 10,
              }}
            >
              Yesterday,{"\n"}
              <Text
                style={{ fontSize: 12, fontWeight: "400", color: "#737373" }}
              >
                02:30 PM{" "}
              </Text>{" "}
            </Text>
          </View>
          {/* </View> */}
        </View>

        {/* ---------------------------- history Detalis ---------------------------------- */}


              {/* ------------------------------ main detalis ------------------------------- */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop:20
          }}
        >
          <View>
            <Image
              style={{
                resizeMode: "cover",
                height: 40,
                width: 40,
                borderRadius: 50,
              }}
              source={require("../assets/cardimg2.png")}
            />
          </View>
          {/* <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}} > */}
          <View style={{paddingRight:25}}>
            <Text style={{ fontSize: 16, fontWeight: "600", color: "#1a1a1a" }}>
              Dr.Delaney Mangino
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "500",
                color: "#737373",
                paddingTop: 10,
              }}
            >
              Name : Mikkle Token no : ABC5
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 11,
                fontWeight: "400",
                color: "#737373",
                paddingTop: 10,
              }}
            >
              02/02/2023,{"\n"}
              <Text
                style={{ fontSize: 12, fontWeight: "400", color: "#737373" }}
              >
                09:00 AM{" "}
              </Text>{" "}
            </Text>
          </View>
          {/* </View> */}
        </View>

        {/* ---------------------------- history Detalis ---------------------------------- */}


{/* ------------------------------ main detalis ------------------------------- */}
<View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop:20
          }}
        >
          <View>
            <Image
              style={{
                resizeMode: "cover",
                height: 40,
                width: 40,
                borderRadius: 50,
              }}
              source={require("../assets/doc3.jpg")}
            />
          </View>
          {/* <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}} > */}
          <View style={{paddingRight:25}}>
            <Text style={{ fontSize: 16, fontWeight: "600", color: "#1a1a1a" }}>
              Dr.Bernard Calger
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "500",
                color: "#737373",
                paddingTop: 10,
              }}
            >
              Name : Mikkle Token no : ABC6
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 11,
                fontWeight: "400",
                color: "#737373",
                paddingTop: 10,
              }}
            >
              02/03/2023,{"\n"}
              <Text
                style={{ fontSize: 12, fontWeight: "400", color: "#737373" }}
              >
                10:00 AM{" "}
              </Text>{" "}
            </Text>
          </View>
          {/* </View> */}
        </View>

        {/* ---------------------------- history Detalis ---------------------------------- */}



              {/* ------------------------------ main detalis ------------------------------- */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop:20
          }}
        >
          <View>
            <Image
              style={{
                resizeMode: "cover",
                height: 40,
                width: 40,
                borderRadius: 50,
              }}
              source={require("../assets/doc2.jpg")}
            />
          </View>
          {/* <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}} > */}
          <View style={{paddingRight:25}}>
            <Text style={{ fontSize: 16, fontWeight: "600", color: "#1a1a1a" }}>
              Dr.Tom jackson
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "500",
                color: "#737373",
                paddingTop: 10,
              }}
            >
              Name : Tom Token no : ABC10
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 11,
                fontWeight: "400",
                color: "#737373",
                paddingTop: 10,
              }}
            >
               12/03/2023,{"\n"}
              <Text
                style={{ fontSize: 12, fontWeight: "400", color: "#737373" }}
              >
                01:00 PM{" "}
              </Text>{" "}
            </Text>
          </View>
          {/* </View> */}
        </View>

        {/* ---------------------------- history Detalis ---------------------------------- */}



              
              {/* ------------------------------ main detalis ------------------------------- */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop:20
          }}
        >
          <View>
            <Image
              style={{
                resizeMode: "cover",
                height: 40,
                width: 40,
                borderRadius: 50,
              }}
              source={require("../assets/doc4.jpg")}
            />
          </View>
          {/* <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}} > */}
          <View style={{paddingRight:25}}>
            <Text style={{ fontSize: 16, fontWeight: "600", color: "#1a1a1a" }}>
              Dr.Tom jacksom
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "500",
                color: "#737373",
                paddingTop: 10,
              }}
            >
              Name : Rose Token no : ABC9
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 11,
                fontWeight: "400",
                color: "#737373",
                paddingTop: 10,
              }}
            >
               15/03/2023,{"\n"}
              <Text
                style={{ fontSize: 12, fontWeight: "400", color: "#737373" }}
              >
                10:30 AM{" "}
              </Text>{" "}
            </Text>
          </View>
          {/* </View> */}
        </View>

        {/* ---------------------------- history Detalis ---------------------------------- */}



              
              {/* ------------------------------ main detalis ------------------------------- */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop:20
          }}
        >
          <View>
            <Image
              style={{
                resizeMode: "cover",
                height: 40,
                width: 40,
                borderRadius: 50,
              }}
              source={require("../assets/doc6.jpg")}
            />
          </View>
          {/* <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}} > */}
          <View style={{paddingRight:25}}>
            <Text style={{ fontSize: 16, fontWeight: "600", color: "#1a1a1a" }}>
              Dr.Tom jackson
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "500",
                color: "#737373",
                paddingTop: 10,
              }}
            >
              Name : Mikkle Token no : ABC18
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 11,
                fontWeight: "400",
                color: "#737373",
                paddingTop: 10,
              }}
            >
               22/02/2023,{"\n"}
              <Text
                style={{ fontSize: 12, fontWeight: "400", color: "#737373" }}
              >
                10:00 AM{" "}
              </Text>{" "}
            </Text>
          </View>
          {/* </View> */}
        </View>

        {/* ---------------------------- history Detalis ---------------------------------- */}



              
              {/* ------------------------------ main detalis ------------------------------- */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop:20
          }}
        >
          <View>
            <Image
              style={{
                resizeMode: "cover",
                height: 40,
                width: 40,
                borderRadius: 50,
              }}
              source={require("../assets/doc6.jpg")}
            />
          </View>
          {/* <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}} > */}
          <View style={{paddingRight:25}}>
            <Text style={{ fontSize: 16, fontWeight: "600", color: "#1a1a1a" }}>
              Dr.Delaney Mikey
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "500",
                color: "#737373",
                paddingTop: 10,
              }}
            >
              Name : Mike Token no : ABC15
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 11,
                fontWeight: "400",
                color: "#737373",
                paddingTop: 10,
              }}
            >
               25/01/2023,{"\n"}
              <Text
                style={{ fontSize: 12, fontWeight: "400", color: "#737373" }}
              >
                11:00 AM{" "}
              </Text>{" "}
            </Text>
          </View>
          {/* </View> */}
        </View>

        {/* ---------------------------- history Detalis ---------------------------------- */}



              
              {/* ------------------------------ main detalis ------------------------------- */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop:20
          }}
        >
          <View>
            <Image
              style={{
                resizeMode: "cover",
                height: 40,
                width: 40,
                borderRadius: 50,
              }}
              source={require("../assets/doc2.jpg")}
            />
          </View>
          {/* <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}} > */}
          <View style={{paddingRight:25}}>
            <Text style={{ fontSize: 16, fontWeight: "600", color: "#1a1a1a" }}>
              Dr.Tom jackson
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "500",
                color: "#737373",
                paddingTop: 10,
              }}
            >
              Name : Mikkle Token no : ABC1
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 11,
                fontWeight: "400",
                color: "#737373",
                paddingTop: 10,
              }}
            >
              Today,{"\n"}
              <Text
                style={{ fontSize: 12, fontWeight: "400", color: "#737373" }}
              >
                10:00 AM{" "}
              </Text>{" "}
            </Text>
          </View>
          {/* </View> */}
        </View>

        {/* ---------------------------- history Detalis ---------------------------------- */}


        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop:20
          }}
        >
          <View>
            <Image
              style={{
                resizeMode: "cover",
                height: 40,
                width: 40,
                borderRadius: 50,
              }}
              source={require("../assets/doc2.jpg")}
            />
          </View>
          {/* <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}} > */}
          <View style={{paddingRight:25}}>
            <Text style={{ fontSize: 16, fontWeight: "600", color: "#1a1a1a" }}>
              Dr.Tom jackson
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "500",
                color: "#737373",
                paddingTop: 10,
              }}
            >
              Name : Mikkle Token no : ABC1
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 11,
                fontWeight: "400",
                color: "#737373",
                paddingTop: 10,
              }}
            >
              Today,{"\n"}
              <Text
                style={{ fontSize: 12, fontWeight: "400", color: "#737373" }}
              >
                10:00 AM{" "}
              </Text>{" "}
            </Text>
          </View>
          {/* </View> */}
        </View>


        </ScrollView>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  main: {
    margin: 20,
    marginTop: 10,
  },
});
