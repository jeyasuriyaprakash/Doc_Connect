import { View, Text,Image,TextInput, TouchableOpacity, ScrollView, Animated, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import {Ionicons} from '@expo/vector-icons'
import { StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { Card } from 'react-native-paper';


export default function ProfileView ({navigation}) {

  const Separator = () => <View style={styles.separator} />;

  const [selectedTab, setSelectedTab] = useState(0);

  const [selectedClose, setSelectedClose] = useState(0);


  const starRatingOptions = [1, 2, 3, 4, 5, ];

  const [starRating, setStarRating] = useState(null);

  const animatedButtonScale = new Animated.Value(1);

  const handlePressIn = () => {
    Animated.spring(animatedButtonScale, {
      toValue: 1,
      useNativeDriver: true,
      // speed: 0,
      // bounciness: 4,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(animatedButtonScale, {
      toValue: 1,
      useNativeDriver: true,
      // speed: 0,
      // bounciness: 4,
    }).start();
  };

  const animatedScaleStyle = {
    transform: [{ scale: animatedButtonScale }],
  };



  return (
    <View style={styles.container}>
    
      <View style={{margin:20,marginTop:25}}>

{/* --------------------------------- header contant --------------------------------- */}

        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <View style={{flexDirection:'row',alignItems:'center'}}  onPress={() => navigation.navigate("Profile")}>
          <Ionicons name='arrow-back-outline' size={20} color={'#263a96'} />
          <Text style={{fontSize:16,fontWeight:'500',color:'#263a96',marginLeft:14}}>Back</Text>
          </View>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <Text style={{fontSize:16,fontWeight:'500',color:'#263a96',marginRight:11}}>Edit Mode</Text>
            <FontAwesome name="toggle-on" size={20} color="#263a96" />
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} >
<View style={{justifyContent:'center',alignItems:'center'}}>
        <Image
            style={{
              height: 94,
              width: 94,
              borderRadius: 50,
              borderWidth: 2,
              borderColor: "#ffffff",
            }}
            source={require("../assets/doc3.jpg")}
          />
        </View>

        <View style={{ marginTop: 20, alignItems: "center" }}>
          <Text
            style={{ fontSize: 16, fontWeight: "600", color: "#263a96" }}
          >
            Jeyaprakash G
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "400",
              color: "#686868",
              marginTop: 10,
            }}
          >
            8220017629
          </Text>
        </View>

{/* ------------------------------------- Body contant ------------------------------ */}

<View style={{ marginTop: 20, margin: 0 }}>
            <Text style={styles.emailText}>First Name</Text>
            <View style={styles.wrapperInput}>
              <TextInput style={styles.input} placeholder="xxxxxx" />
            </View>
          </View>


          <View style={{ marginTop: 20, margin: 0 }}>
            <Text style={styles.emailText}>Last Name</Text>
            <View style={styles.wrapperInput}>
              <TextInput style={styles.input} placeholder="xxxxxx" />
            </View>
          </View>


          <View style={{ marginTop: 20, margin: 0 }}>
            <Text style={styles.emailText}>DOB</Text>
            <View style={styles.wrapperInput}>
              <TouchableOpacity style={styles.input}
                keyboardType={"numeric"}
                placeholder="xxxxx">
                
                <Text style={{color:"#373B4A",}}>
                   {/* {selectedDate} */}
                    </Text>
              </TouchableOpacity>

              {/* <Ionicons
                name="calendar-outline"
                size={17}
                color={"#919191"}
                style={{ marginRight: 0 }}
                onPress = {()=>{showDatePicker();}}
              />
               <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      /> */}
            </View>
          </View>

          <Text
            style={{
              marginTop: 20,
              fontSize: 12,
              fontWeight: "400",
              color: "#353948",
            }}
          >
            
            Gender
          </Text>
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              style={{
                padding: 0,
                borderColor: selectedClose == 0 ? '#263a96':'#DADADA',
                borderWidth: 1,
                borderRadius: 25,
                height: 38,
                width: "48%",
                color: "#263A96",
                alignItems: "center",
                justifyContent: "center",
              }}  onPress={() => {setSelectedClose(0);}}
            >
              <Text
                style={{ color: selectedClose == 0 ? '#263A96':'#919191', fontSize: 14, fontWeight: "400" }}
              >
                
                Male
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                padding: 0,
                borderColor: selectedClose == 1 ? '#263a96':'#DADADA',
                borderWidth: 1,
                borderRadius: 25,
                height: 38,
                width: "48%",
                color: "#263A96",
                alignItems: "center",
                justifyContent: "center",
              }}  onPress={() => {setSelectedClose(1);}}
            >
              <Text
                style={{ color: selectedClose == 1 ? '#263A96':'#919191', fontSize: 14, fontWeight: "400" }}
              >
                
                Female
              </Text>
            </TouchableOpacity>
          </View>


          <View style={{marginTop:10}}>
            <Text style={styles.text}>Mobile No</Text>
            </View>
            <TextInput
              style={{
                height: 38,
                width: "100%",
                backgroundColor: "#FFFFFF",
                borderRadius: 18,
                borderWidth: 1,
                borderColor: "#DADADA",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
               
                textAlign: "left",
                paddingLeft: 20,
                color:'#373B4A'
              }}
              placeholder={"+91  7677739283"}
              
              keyboardType={"number-pad"}
            > +91  <Ionicons
            name="chevron-down-outline"
            size={20}
            color={"#919191"}
            style={{}}
          /></TextInput>


            <Text style={styles.text}>Email ID</Text>

            <TextInput
              style={{
                height: 38,
                width: "100%",
                backgroundColor: "#FFFFFF",
                borderRadius: 18,
                borderWidth: 1,
                borderColor: "#DADADA",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
                // marginBottom: 10,
                paddingLeft: 20,
              }}
              placeholder={"abcd@gmail.com"}
            ></TextInput>
            <Text style={styles.text}>Street /Apartment</Text>

            <TextInput
              style={{
                height: 38,
                width: "100%",
                backgroundColor: "#FFFFFF",
                borderRadius: 18,
                borderWidth: 1,
                borderColor: "#DADADA",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
                // marginBottom: 10,
                paddingLeft: 20,
              }}
              placeholder={"xxxxxxxxx"}
            ></TextInput>
            <Text style={styles.text}>Locality /Landmark</Text>

            <TextInput
              style={{
                height: 38,
                width: "100%",
                backgroundColor: "#FFFFFF",
                borderRadius: 18,
                borderWidth: 1,
                borderColor: "#DADADA",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
                // marginBottom: 10,
                paddingLeft: 20,
              }}
              placeholder={"xxxxxxxxx"}
            ></TextInput>
            <Text style={styles.text}>City</Text>

            <View style={styles.wrapperInput}>
              <TextInput style={styles.input} placeholder="xxxxxxx" />

              <Ionicons
                name="chevron-down-outline"
                size={20}
                color={"#919191"}
                style={{ marginRight: 10 }}
              />
            </View>

            <Text style={styles.text}>State</Text>

            <View style={styles.wrapperInput}>
              <TextInput style={styles.input} placeholder="xxxxxxx" />

              <Ionicons
                name="chevron-down-outline"
                size={20}
                color={"#919191"}
                style={{ marginRight: 10 }}
              />
            </View>
            <Text style={styles.text}>Country</Text>

            <View style={styles.wrapperInput}>
              <TextInput style={styles.input} placeholder="xxxxxxx" />

              <Ionicons
                name="chevron-down-outline"
                size={20}
                color={"#919191"}
                style={{ marginRight: 10 }}
              />
            </View>
            <Text style={styles.text}>Pincode</Text>

            <TextInput
              style={{
                height: 38,
                width: "100%",
                backgroundColor: "#FFFFFF",
                borderRadius: 18,
                borderWidth: 1,
                borderColor: "#DADADA",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
                marginBottom: 10,
                paddingLeft:20,
              }}
              placeholder={"xxxxxxxxx"}
              keyboardType={"number-pad"}
            ></TextInput>




</ScrollView>
      </View>
      
    </View>
  )
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fafafa',
  },

  wrapperInput: {
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "#DADADA",
    backgroundColor: "#fff",
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    margin: 0,
  },

  input: {
    marginLeft: 20,
    height: 38,
    width: "80%",
    justifyContent:'center'
  },
  emailText: {
    color: "#353948",
    fontWeight: "400",
    fontSize: 12,
  },
  text: {
    fontSize: 12,
    fontWeight: "400",
    color: "#353948",
    marginTop: 20,
  },

  stars: {
    display: 'flex',
    flexDirection: 'row',
  },
  starUnselected: {
    color: '#DADADA',
  },
  starSelected: {
    color: '#263A96',
  },

  separator: {
   
    borderColor: "#d5d5d5",
    // borderBottomWidth: 2,
    backgroundColor:'#d5d5d5',
    borderWidth:0.5,
   
    height: 35,
    
    // transform:[{ rotate: '90deg'}]
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginBottom: 15
  },

});