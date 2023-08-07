import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    ScrollView,
    StatusBar,
  } from "react-native";
  import React from "react";
  import { TouchableOpacity } from "react-native";
  import { Checkbox } from "react-native-paper";
  import { useState} from "react";
  import {Ionicons} from '@expo/vector-icons'
  
  
  export default function Login({ navigation }) {

    const [checked, setChecked] = React.useState(false);
    
  
  const [username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = () => {
    if (username && Password) {
      setAuthenticated(true);
      navigation.navigate('BottomNavigation')
    } else {
      alert('please enter username and password')
    }
  };
  
    return (
      <View style={styles.container}>
        <StatusBar  style='auto' backgroundColor={"#ffffff"} barStyle={'dark-content'} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ alignItems: "center" }}>
            <Image
              style={{ marginTop: 70 }}
              source={require("../assets/Dsymbol.png")}
            />
            <Text style={{ fontSize: 28, color: "#ffffff", fontWeight: "600" }}>
              Welcome
            </Text>
          </View>
  
          <View style={{ marginTop: 70 }}>
            <View style={styles.numberinput}>
              <Ionicons style={{paddingRight:10}} name="person-circle-outline" size={20} color={"#c1c1c1"} />
            <TextInput onChangeText={setUsername}

           style={{height: 50, width: 338,}}
              placeholder="Identification Number"
              value={username}>
  
              </TextInput>
              </View>

              <View style={styles.numberinput}>
              <Ionicons style={{paddingRight:10}} name="lock-closed-outline" size={20} color={"#c1c1c1"} />
            <TextInput
            style={{height: 50, width: 338,}}
            secureTextEntry onChangeText={setPassword} value={Password}
              placeholder="Password"
            >
            </TextInput>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Checkbox
                  style={styles.rememberme}
                  color="#ffffff"
                  uncheckedColor="#c1c1c1"
                  status={checked ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text style={{ color: "#c1c1c1" }}>Remember me</Text>
              </View>
              <View>
                <TouchableOpacity >
                  <Text style={{ color: "#c1c1c1" }}>Forget Password?</Text>
                </TouchableOpacity>
              </View>
            </View>
              
            <TouchableOpacity
              style={styles.button}
             onPress={handleLogin}
            >
              <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#0856FF",
      alignItems: "center",
    },
    text: {
      fontSize: 18,
      fontWeight: "600",
      color: "#0356ff",
      textAlign: "center",
    },
    numberinput: {
      height: 50,
      width: 338,
      backgroundColor: "#ffffff",
      borderRadius: 20,
      paddingLeft: 20,
      marginTop: 40,
      elevation: 0,
      flexDirection:'row',
      alignItems:'center',
      
    },
    icons: {
      color: "#1a1a1a",
    },
    button: {
      height: 50,
      width: 338,
      backgroundColor: "#ffffff",
      justifyContent: "center",
      alignContent: "center",
      borderRadius: 20,
      marginTop: 130,
      elevation: 4,
      marginBottom:20
    },
    rememberme: {
      color: "#0856FF",
    },
  });