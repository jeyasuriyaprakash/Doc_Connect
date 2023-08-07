import React, { useState, useRef } from "react";
import { Text, View, Dimensions, Image, TouchableOpacity } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { Ionicons } from "@expo/vector-icons";

export const SLIDER_WIDTH = Dimensions.get("window").width + 40;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

const data = [
  {
    id: 1,
    name: "Medical Checks!",
    // url: 'https://icon-library.com/images/react-icon/react-icon-29.jpg',
  },
  {
    id: 2,
    name: "Full Body Checkup",
    // url: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png',
  },
  {
    id: 3,
    name: "Heart Checkup",
    // url: 'https://upload.wikimedia.org/wikipedia/commons/6/67/NodeJS.png',
  },
  {
    id: 4,
    name: "Medical Checks!",
    // url: 'https://upload.wikimedia.org/wikipedia/commons/6/67/NodeJS.png',
  },
];

const renderItem = ({ item }) => {
  return (
    <View
      style={{
        padding: 10,
        paddingLeft: 20,
        height: 175,
        width: "100%",
        borderRadius: 15,
        // alignItems: 'center',
        justifyContent: "space-evenly",
        backgroundColor: "#0856ff",
      }}
    >
      <View style={{flexDirection:'row',}}>
      <View style={{justifyContent:'space-between'}}>
      <View style={{}}>
        <Text style={{ fontSize: 17, fontWeight: "500", color: "#ffffff" }}>
          {item.name}
        </Text>
      </View>
      {/* <Image source={{uri: item.url}} style={{width: 20, height: 20}} /> */}

      <View>
        <Text
          style={{
            fontSize: 12,
            fontWeight: "400",
            color: "#ffffff",
            lineHeight: 14,
            
          }}
        >
          Lorem ipsum dolor sit amet,{"\n"}
          consectetur adipiscing elit, sed do {"\n"}
          eiusmod tempor incididunt ut labore
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <TouchableOpacity
          style={{
            height: 32,
            width: 81,
            backgroundColor: "#ffffff",
            borderRadius: 9,
            alignItems: "center",
            justifyContent: "center",
    
          }}
        >
          <Text style={{ color: "#246bfd", fontSize: 12, fontWeight: "400" }}>
            Check Now
          </Text>
        </TouchableOpacity>

       
      </View>
      {/* 
      <Text style={{marginVertical: 10, fontSize: 20, fontWeight: 'bold'}}>
        {item.name}
      </Text> */}
    </View>
    <View style={{marginBottom:-20}}> 
      <Image style={{}} source={require("../assets/doc.png")} />
    </View>
    </View>
    </View>
  );
};

const Carouselpage = () => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  return (
    <View style={{ alignItems: "center" }}>
      <Carousel
        style={{}}
        ref={isCarousel}
        data={data}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH + 0}
        onSnapToItem={(index) => setIndex(index)}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 7,
          height: 7,
          borderRadius: 5,
          marginHorizontal: -10,
          marginTop:-6,
          backgroundColor: "#246bfd",
          
        }}
        tappableDots={true}
        inactiveDotStyle={{
          backgroundColor: "black",
          // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.3}
        inactiveDotScale={0.9}
      />
    </View>
  );
};

export default Carouselpage;
