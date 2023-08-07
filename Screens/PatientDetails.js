import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { TextInput, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

export default function PatientDetails({ navigation }) {
  const [category, setCategory] = useState("");
  const [subcategory, setSubCategoey] = useState("");


  const [selectedTab, setSelectedTab] = useState("Male");
 

  const categories = [
    { key: "MG", value: "Mahe (General)" },
    { key: "JP", value: "JP (Pediatr)" },
    { key: "SN", value: "Suganya (Neurolo)" },
    { key: "BG", value: "Bala (General)" },
    { key: "MD", value: "Muthu (Dentist)" },
  ];

  return (
    <View style={styles.container}>
      <View style={{ margin: 15, marginTop: 10 }}>
        <View
          style={{
            flexDirection: "row",
            marginLeft: 0,
            marginTop: 0,
            alignItems: "center",
          }}
        >
          <Entypo
            name="chevron-left"
            size={25}
            color="#1a1a1a"
            onPress={() => navigation.navigate("BottomNavigation")}
          />
          <Text
            style={{
              fontSize: 23,
              fontWeight: 600,
              color: "#1a1a1a",
              marginLeft: 5,
            }}
          >
            Patient Details
          </Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ margin: 0 }}>
            <View style={{ marginTop: 40 }}>
              <Text style={styles.text}>Phone Number</Text>
              <View style={{ flexDirection: "row", marginTop: 15 }}>
                <TextInput
                  style={styles.input}
                  placeholder="1234567897"
                ></TextInput>
              </View>
            </View>

            <View style={{ marginTop: 20 }}>
              <Text style={styles.text}>Name</Text>
              <View style={{ marginTop: 15 }}>
                <TextInput
                  style={styles.input}
                  placeholder="Mikkle"
                ></TextInput>
              </View>
            </View>

            <View style={{ marginTop: 20 }}>
              <Text style={styles.text}>Doctor</Text>
              <View style={{ marginTop: 15 }}>
                <SelectList
                  style={styles.dropdown}
                  setSelected={setCategory}
                  data={categories}
                  arrowicon={
                    <Ionicons name="chevron-down" size={17} color={"#0856FF"} />
                  }
                  //   searchicon={<Ionicons name="search" size={20} color={'#d4d4d4'} />}
                  placeholder={"Select Doctor"}
                  boxStyles={{
                    borderRadius: 20,
                    borderColor: "#d4d4d4",
                    height: 50,
                    alignItems: "center",
                    backgroundColor: "#fff",
                  }}
                  // defaultOption={{key:'EL', value:'Electorinics'}}
                />
              </View>
            </View>

            <View style={{ marginTop: 20 }}>
              <Text style={styles.text}>Gender</Text>
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 15,
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Pressable
                    style={{
                      height: 50,
                      width: 85,
                      borderRadius: 20,
                      borderColor:selectedTab == "Male" ? "#0856ff" : "#d4d4d4",
                      borderWidth: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}  onPress={() => {
                        setSelectedTab("Male");
                      }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "400",
                        color: selectedTab == "Male" ? "#0856ff" : "#d4d4d4",
                      }}
                    >
                      Male
                    </Text>
                  </Pressable>
                </View>
                <View>
                  <Pressable
                    style={{
                      height: 50,
                      width: 85,
                      borderRadius: 20,
                      borderColor: selectedTab == "Female" ? "#0856ff" : "#d4d4d4",
                      borderWidth: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}  onPress={() => {
                        setSelectedTab("Female");
                      }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "400",
                        color: selectedTab == "Female" ? "#0856ff" : "#d4d4d4",
                      }}
                    >
                      Female
                    </Text>
                  </Pressable>
                </View>
                <View>
                  <Pressable
                    style={{
                      height: 50,
                      width: 85,
                      borderRadius: 20,
                      borderColor: selectedTab == "Others" ? "#0856ff" : "#d4d4d4",
                      borderWidth: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}  onPress={() => {
                        setSelectedTab("Others");
                      }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "400",
                        color:selectedTab == "Others" ? "#0856ff" : "#d4d4d4",
                      }}
                    >
                      Others
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>

            <View style={{ marginTop: 20 }}>
              <Text style={styles.text}>Age</Text>
              <View style={{ flexDirection: "row", marginTop: 15 }}>
                <TextInput
                  style={styles.input}
                  placeholder="23 years"
                ></TextInput>
                {/* <MaterialCommunityIcons name="chevron-down" size={24} color="black" /> */}
              </View>
            </View>

            <View style={{ marginTop: 20 }}>
              <Text style={styles.text}>Appointment Timing</Text>
              <View style={{ flexDirection: "row", marginTop: 15 }}>
                <View style={styles.inputicon}>
                  <TextInput
                    style={{ height: 50, width: 250 }}
                    placeholder="10:00 AM"
                  ></TextInput>
                  <Ionicons name="time-outline" size={22} color="#0856ff" />
                </View>
              </View>
            </View>

            <View style={{ marginTop: 20 }}>
              <Text style={styles.text}>Token No</Text>
              <View style={{ flexDirection: "row", marginTop: 15 }}>
                <TextInput style={styles.input} placeholder="ABC1"></TextInput>
                {/* <MaterialCommunityIcons name="chevron-down" size={24} color="black" /> */}
              </View>
            </View>

            <View></View>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Appointment")}
            >
              <Text
                style={{ color: "#ffffff", fontSize: 18, fontWeight: "600" }}
              >
                Submit
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
    // marginTop:30,

    backgroundColor: "#ffffff",
  },
  numberinput: {
    height: 50,
    width: 338,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  button: {
    height: 50,
    width: "100%",
    backgroundColor: "#0856FF",
    borderRadius: 20,
    elevation: 4,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 45,
    marginBottom: 30,
  },
  text: {
    fontSize: 15,
    fontWeight: "600",
    color: "#2B2B2B",
  },
  input: {
    height: 50,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#d4d4d4",
    // backgroundColor:'#fff',
    justifyContent: "center",
    padding: 10,
  },

  inputicon: {
    height: 50,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#d4d4d4",
    // backgroundColor:'#fff',
    justifyContent: "space-between",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  inputdown: {
    height: 50,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#d4d4d4",
    // backgroundColor:'#fff',
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
  },
  dropdown: {
    backgroundColor: "#fff",
    height: 50,
    width: 300,
    borderRadius: 20,
    borderColor: "#d4d4d4",
  },
});
