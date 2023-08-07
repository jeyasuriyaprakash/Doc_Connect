import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from "react-native";
import React from "react";
import { Card } from "react-native-paper";

export default function Startpage({navigation}) {
  return (
    <View style={styles.container}>
              <StatusBar  style='auto' backgroundColor={"#ffffff"} barStyle={'dark-content'} />
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Image source={require("../assets/strimg.png")} />
      </View>
      <View style={{ flex: 2, justifyContent: "flex-end" }}>
        <Card
          style={{
            height: 339,
            width: "100%",
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            backgroundColor: "#EDF3FF",
            shadowColor: "#417FFF",
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowRadius: 5,
            shadowOpacity: 5,
            elevation: 10,
          }}
        >
          <View style={{}}>
            <View>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: "700",
                  color: "#0856FF",
                  textAlign: "center",
                  marginTop:30
                }}
              >
                Thousands of {'\n'} doctors & experts to {'\n'} help your health!
              </Text>
            </View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 100,
              }}
            >
              <TouchableOpacity
                style={{
                  height: 50,
                  width: 338,
                  backgroundColor: "#0856FF",
                  borderRadius: 10,
                  elevation: 5,
                  alignItems: "center",
                  justifyContent: "center",
                }} onPress={() => navigation.navigate ('Login')}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: "500",
                    color: "#ffffff",
                  }}
                >
                  Next
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Card>
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
