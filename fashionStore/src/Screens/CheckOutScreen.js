import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import CheckoutData from "./src/mock_Data/CheckoutData";

const App = () => {
  return (
    <SafeAreaView>
      {/** Header Section  */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 15,
        }}
      >
        {/** Logo */}
        <View style={{ alignItems: "center", marginLeft: 150 }}>
          <Image source={require("./assets /Logo.png")} />
        </View>
        {/** Search Image  */}
        <View style={{ marginRight: 40 }}>
          <Image source={require("./assets /Search.png")} />
        </View>
      </View>
      {/**  Second Header  */}
      <View style={{ alignItems: "center", marginTop: 30 }}>
        {/** Text  */}
        <View style={{ marginBottom: -140 }}>
          <Text style={{ letterSpacing: 3, fontSize: 24 }}> CHECKOUT</Text>
        </View>
        {/** Underline  */}
        <View>
          <Image source={require("./assets /underline.png")} />
        </View>
      </View>

      {/** flatlist */}
      <View style={{ marginTop: -150 }}>
        <FlatList
          data={CheckoutData}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={{}}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 10,
                }}
              >
                {/** dress image  */}
                <View>
                  <Image source={item.image} />
                </View>
                {/** Text */}
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ letterSpacing: 2.5, fontSize: 18 }}>
                    {item.name}
                  </Text>
                  <Text style={{ fontSize: 12 }}>{item.text}</Text>
                  <Text style={{ color: "brown" }}>{item.price}</Text>
                </View>
                {/** add image  */}
                <View style={{ marginTop: 180, top: 15, right: 20 }}>
                  <Image source={item.image1} />
                </View>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      {/** bottom section  */}
      <View>
        {/** text  */}
        <View style={{ flexDirection: "row" }}>
          <Text> EST. TOTAL</Text>
          <Text>$240</Text>
        </View>
        {/** Check out bottom  */}
        <TouchableOpacity style={{ color: "#000000" }}>
          <View>
            {/** icon */}
            <View></View>
            <Text> CHECKOUT</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;
