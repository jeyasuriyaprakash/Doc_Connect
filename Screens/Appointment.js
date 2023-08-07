import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import AwesomeAlert from "react-native-awesome-alerts";

export default function Appointment({ navigation }) {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedTab1, setSelectedTab1] = useState(0);
  const [selectedTab2, setSelectedTab2] = useState(0);

  const [showAlert, setShowAlert] = useState(false);

  // const [selectHead, setSelectedHead] = useState(0);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.main}>
          {/* <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="chevron-back-outline" color={"#1a1a1a"} size={25} />
          <Text
            style={{
              fontSize: 23,
              fontWeight: "600",
              color: "#1a1a1a",
              marginLeft: 20,
            }}
          >
            Appointmen  t
          </Text>
        </View> */}

          {/* <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <View>
            <TouchableOpacity onPress={()=> {setSelectedHead(0);}}>
              <Text
                style={{ color: selectHead == 0 ? "#0856FF" : "#ababab" , fontSize: 16, fontWeight: "500" }}
              >
                Upcoming
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity onPress={()=> {setSelectedHead(1);}} >
              <Text
                style={{ color: selectHead == 1 ? "#0856ff" : "#ababab" , fontSize: 16, fontWeight: "500" }}
              >
                Completed
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity>
              <Text
                style={{ color: "#ABABAB", fontSize: 16, fontWeight: "500" }}
              >
                Cancelled
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            backgroundColor: "#D3D3D3",
            height: 1,
            marginTop: 10,
          }}
        ></View> */}

          {/* ----------------------- first card view --------------------------------- */}

          <View>
            <View
              style={{
                height: 241,
                width: "100%",
                backgroundColor: "#f3f3f3",
                borderRadius: 30,
                padding: 15,
                // borderWidth:1,
                // borderColor:'#d4d4d4',
                // marginTop: 20,
                // shadowColor: "#ffffff",
                justifyContent: "space-evenly",
              }}
            >
              {/* <View style={{justifyContent:'space-evenly',}}> */}

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Image
                  style={{ height: 100, width: 100 }}
                  source={require("../assets/cardimg.png")}
                />
                <View
                  style={{ marginRight: 30, justifyContent: "space-evenly" }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "500",
                      color: "#1a1a1a",
                    }}
                  >
                    Dr. Tom jacksom
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "500",
                      color: "#1a1a1a",
                    }}
                  >
                    General Doctor
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text
                      style={{
                        color: "#ABABAB",
                        fontSize: 10,
                        fontWeight: "500",
                      }}
                    >
                      Dec 12, 2023
                    </Text>
                    <View
                      style={{
                        height: 10,
                        backgroundColor: "#ABABAB",
                        width: 1,
                        marginRight: 10,
                        marginLeft: 10,
                      }}
                    ></View>
                    <Text
                      style={{
                        color: "#ABABAB",
                        fontSize: 10,
                        fontWeight: "500",
                      }}
                    >
                      10 : 30 AM
                    </Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{ color: "#1a1a1a", fontSize: 15, fontWeight: "500" }}
                >
                  Name : Mikkle{" "}
                </Text>
                <Text
                  style={{ color: "#1a1a1a", fontSize: 15, fontWeight: "500" }}
                >
                  Token no : Abc1{" "}
                  <Text
                    style={{
                      color: "#F93939",
                      fontSize: 15,
                      fontWeight: "500",
                    }}
                  >
                    {" "}
                    (Upcoming)
                  </Text>{" "}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <TouchableOpacity
                    onPressIn={() => setShowAlert(!showAlert)}
                    style={{
                      width: 134,
                      height: 30,
                      borderColor: "#0856ff",
                      backgroundColor: selectedTab == 0 ? "#0856ff" : "#ebebeb",
                      borderWidth: 1,
                      borderRadius: 10,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onPress={() => {
                      setSelectedTab(0);
                    }}
                  >
                    <Text
                      style={{
                        color: selectedTab == 0 ? "#ffffff" : "#0856ff",
                        fontSize: 10,
                        fontWeight: "600",
                      }}
                    >
                      Cancel Appointment
                    </Text>
                  </TouchableOpacity>
                  <AwesomeAlert 
                    show={showAlert}
                    title="Cancel Appointment"
                    titleStyle={{ fontSize: 20, color: "red",fontWeight:'500' }}
                    message="Are you sure want to cancel your appointment?"
                    showCancelButton={true}
                    cancelText="Back"
                    cancelButtonStyle={{backgroundColor:'#ebebeb',borderRadius:15,borderRadius:20,height:40,width:80,justifyContent:'center'}}
                    cancelButtonTextStyle={{color:'#0856ff',textAlign:'center'}}
                    onCancelPressed={() => {
                      console.log("confirm button pressed")
                  setShowAlert(false)
                  }}

                    showConfirmButton={true}
                    confirmText="Submit"
                    confirmButtonStyle={{backgroundColor:'#0856ff',borderRadius:20,height:40,width:80,justifyContent:'center'}}
                      confirmButtonTextStyle={{color:'#ffffff',textAlign:'center'}}
                  onConfirmPressed={()=> navigation.navigate('History')
                  
                  }
                  />
                </View>

                <TouchableOpacity
                  style={{
                    width: 134,
                    height: 30,
                    borderColor: "#0856ff",
                    borderWidth: 1,
                    borderRadius: 10,
                    backgroundColor: selectedTab == 1 ? "#0856ff" : "#ebebeb",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onPress={() => {
                    setSelectedTab(1);
                  }}
                >
                  <Text
                    style={{
                      color: selectedTab == 1 ? "#ffffff" : "#0856ff",
                      fontSize: 10,
                      fontWeight: "600",
                    }}
                  >
                    Reschedule
                  </Text>
                </TouchableOpacity>
              </View>

              {/* </View> */}
            </View>
          </View>
          {/* ----------------------- second card view --------------------------------- */}

          <View>
            <View
              style={{
                height: 241,
                width: "100%",
                backgroundColor: "#f3f3f3",
                borderRadius: 30,
                padding: 15,
                marginTop: 20,
                // shadowColor: "#ffffff",
                justifyContent: "space-evenly",
              }}
            >
              {/* <View style={{justifyContent:'space-evenly',}}> */}

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Image
                  style={{ height: 100, width: 100 }}
                  source={require("../assets/cardimg1.png")}
                />
                <View
                  style={{ marginRight: 30, justifyContent: "space-evenly" }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "500",
                      color: "#1a1a1a",
                    }}
                  >
                    Dr. Meekasha
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "500",
                      color: "#1a1a1a",
                    }}
                  >
                    Eye specialist
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text
                      style={{
                        color: "#ABABAB",
                        fontSize: 10,
                        fontWeight: "500",
                      }}
                    >
                      Dec 12, 2023
                    </Text>
                    <View
                      style={{
                        height: 10,
                        backgroundColor: "#ABABAB",
                        width: 1,
                        marginRight: 10,
                        marginLeft: 10,
                      }}
                    ></View>
                    <Text
                      style={{
                        color: "#ABABAB",
                        fontSize: 10,
                        fontWeight: "500",
                      }}
                    >
                      11 : 00 AM
                    </Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{ color: "#1a1a1a", fontSize: 15, fontWeight: "500" }}
                >
                  Name : Jones{" "}
                </Text>
                <Text
                  style={{ color: "#1a1a1a", fontSize: 15, fontWeight: "500" }}
                >
                  Token no : Abc2{" "}
                  <Text
                    style={{
                      color: "#F93939",
                      fontSize: 15,
                      fontWeight: "500",
                    }}
                  >
                    {" "}
                    (Upcoming)
                  </Text>{" "}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View>
                <TouchableOpacity
                 onPressIn={() => setShowAlert(!showAlert)}
                  style={{
                    width: 134,
                    height: 30,
                    borderColor: "#0856ff",
                    backgroundColor: selectedTab1 == 0 ? "#0856ff" : "#ebebeb",
                    borderWidth: 1,
                    borderRadius: 10,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onPress={() => {
                    setSelectedTab1(0);
                  }}
                 
                >
                  <Text
                    style={{
                      color: selectedTab1 == 0 ? "#ffffff" : "#0856ff",
                      fontSize: 10,
                      fontWeight: "600",
                    }}
                  >
                    Cancel Appointment
                  </Text>
                </TouchableOpacity>
                <AwesomeAlert 
                    show={showAlert}
                    title="Cancel Appointment"
                    titleStyle={{ fontSize: 20, color: "red",fontWeight:'500' }}
                    message="Are you sure want to cancel your appointment?"
                    showCancelButton={true}
                    cancelText="Back"
                    cancelButtonStyle={{backgroundColor:'#ebebeb',borderRadius:15,borderRadius:20,height:40,width:80,justifyContent:'center'}}
                    cancelButtonTextStyle={{color:'#0856ff',textAlign:'center'}}
                    onCancelPressed={() => {
                      console.log("confirm button pressed")
                  setShowAlert(false)
                  }}

                    showConfirmButton={true}
                    confirmText="Submit"
                    confirmButtonStyle={{backgroundColor:'#0856ff',borderRadius:20,height:40,width:80,justifyContent:'center'}}
                      confirmButtonTextStyle={{color:'#ffffff',textAlign:'center'}}
                  onConfirmPressed={()=> navigation.navigate('History')
                  
                  }
                  />
                </View>

                <TouchableOpacity
                  style={{
                    width: 134,
                    height: 30,
                    borderColor: "#0856ff",
                    borderWidth: 1,
                    borderRadius: 10,
                    backgroundColor: selectedTab1 == 1 ? "#0856ff" : "#ebebeb",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onPress={() => {
                    setSelectedTab1(1);
                  }}
                >
                  <Text
                    style={{
                      color: selectedTab1 == 1 ? "#ffffff" : "#0856ff",
                      fontSize: 10,
                      fontWeight: "600",
                    }}
                  >
                    Reschedule
                  </Text>
                </TouchableOpacity>
              </View>

              {/* </View> */}
            </View>
          </View>

          {/* ----------------------- third card view --------------------------------- */}

          <View>
            <View
              style={{
                height: 241,
                width: "100%",
                backgroundColor: "#f3f3f3",
                borderRadius: 30,
                padding: 15,
                marginTop: 20,
                // shadowColor: "#ffffff",
                justifyContent: "space-evenly",
                marginBottom: 30,
              }}
            >
              {/* <View style={{justifyContent:'space-evenly',}}> */}

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Image
                  style={{ height: 100, width: 100 }}
                  source={require("../assets/cardimg2.png")}
                />
                <View
                  style={{ marginRight: 30, justifyContent: "space-evenly" }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "500",
                      color: "#1a1a1a",
                    }}
                  >
                    Dr. Jacksom
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "500",
                      color: "#1a1a1a",
                    }}
                  >
                    General Doctor
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text
                      style={{
                        color: "#ABABAB",
                        fontSize: 10,
                        fontWeight: "500",
                      }}
                    >
                      Dec 12, 2023
                    </Text>
                    <View
                      style={{
                        height: 10,
                        backgroundColor: "#ABABAB",
                        width: 1,
                        marginRight: 10,
                        marginLeft: 10,
                      }}
                    ></View>
                    <Text
                      style={{
                        color: "#ABABAB",
                        fontSize: 10,
                        fontWeight: "500",
                      }}
                    >
                      11 : 30 AM
                    </Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{ color: "#1a1a1a", fontSize: 15, fontWeight: "500" }}
                >
                  Name : Aleei{" "}
                </Text>
                <Text
                  style={{ color: "#1a1a1a", fontSize: 15, fontWeight: "500" }}
                >
                  Token no : Abc3{" "}
                  <Text
                    style={{
                      color: "#F93939",
                      fontSize: 15,
                      fontWeight: "500",
                    }}
                  >
                    {" "}
                    (Upcoming)
                  </Text>{" "}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View>
                <TouchableOpacity
                onPressIn={() => setShowAlert(!showAlert)}
                  style={{
                    width: 134,
                    height: 30,
                    borderColor: "#0856ff",
                    backgroundColor: selectedTab2 == 0 ? "#0856ff" : "#ebebeb",
                    borderWidth: 1,
                    borderRadius: 10,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onPress={() => {
                    setSelectedTab2(0);
                  }}
                  
                >
                  <Text
                    style={{
                      color: selectedTab2 == 0 ? "#ffffff" : "#0856ff",
                      fontSize: 10,
                      fontWeight: "600",
                    }}
                  >
                    Cancel Appointment
                  </Text>
                </TouchableOpacity>
                <AwesomeAlert 
                    show={showAlert}
                    title="Cancel Appointment"
                    titleStyle={{ fontSize: 20, color: "red",fontWeight:'500' }}
                    message="Are you sure want to cancel your appointment?"
                    showCancelButton={true}
                    cancelText="Back"
                    cancelButtonStyle={{backgroundColor:'#ebebeb',borderRadius:15,borderRadius:20,height:40,width:80,justifyContent:'center'}}
                    cancelButtonTextStyle={{color:'#0856ff',textAlign:'center'}}
                    onCancelPressed={() => {
                      console.log("confirm button pressed")
                  setShowAlert(false)
                  }}

                    showConfirmButton={true}
                    confirmText="Submit"
                    confirmButtonStyle={{backgroundColor:'#0856ff',borderRadius:20,height:40,width:80,justifyContent:'center'}}
                      confirmButtonTextStyle={{color:'#ffffff',textAlign:'center'}}
                  onConfirmPressed={()=> navigation.navigate('CancelAppointment')
                  
                  }
                  />
                </View>

                <TouchableOpacity
                  style={{
                    width: 134,
                    height: 30,
                    borderColor: "#0856ff",
                    borderWidth: 1,
                    borderRadius: 10,
                    backgroundColor: selectedTab2 == 1 ? "#0856ff" : "#ebebeb",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onPress={() => {
                    setSelectedTab2(1);
                  }}
                >
                  <Text
                    style={{
                      color: selectedTab2 == 1 ? "#ffffff" : "#0856ff",
                      fontSize: 10,
                      fontWeight: "600",
                    }}
                  >
                    Reschedule
                  </Text>
                </TouchableOpacity>
              </View>

              {/* </View> */}
            </View>
          </View>
        </View>
      </ScrollView>
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
    // marginTop: 30,
  },
});
