import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import DressData from "./src/mock_Data/DressData";

const App = () => {
  return (
    <SafeAreaView>
      {/** Header Section  */}

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        {/** Menu Image */}
        <View style={{ marginLeft: 20 }}>
          <Image source={require("./assets /Menu.png")} />
        </View>
        {/** logo Section  */}
        <View style={{ marginLeft: 65 }}>
          <Image source={require("./assets /Logo.png")} />
        </View>
        {/** Search Image  */}
        <View style={{ marginLeft: 30 }}>
          <Image source={require("./assets /Search.png")} />
        </View>
        {/** Bag Image */}
        <View style={{ marginRight: 15 }}>
          <Image source={require("./assets /shoppingBag.png")} />
        </View>
      </View>

      {/** Second Header */}
      <View
        style={{
          flexDirection: "row",
          marginTop: 30,
          justifyContent: "space-between",
          marginLeft: 15,
          marginRight: 20,
          padding: 4,
        }}
      >
        {/** Text  */}
        <View>
          <Text style={{ fontSize: 22 }}> O U R S T O R Y </Text>
        </View>
        {/** List */}
        <View
          style={{
            marginLeft: 80,
            backgroundColor: "#C4C9D6",
            padding: 10,
            borderRadius: 20,
          }}
        >
          <Image source={require("./assets /Listview.png")} />
        </View>
        {/** Filter */}
        <View
          style={{ backgroundColor: "#C4C9D6", padding: 10, borderRadius: 20 }}
        >
          <Image source={require("./assets /Filter.png")} />
        </View>
      </View>
      {/*** Flatlist  */}
      <FlatList
        data={DressData}
        renderItem={({ item }) => (
          <TouchableOpacity>
            {/**  Wardrobe/ Cardboard or whatever Anokyewaa if you laugh again i´ll knock you on your forehead View*/}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 15,
              }}
            >
              {/** Dress 1 */}
              <View>
                {/** Image*/}
                <View>
                  <Image source={item.image} />
                </View>
                {/** Texts */}
                <View>
                  <Text>{item.name} </Text>
                  <Text>reversible angora cardigan</Text>
                  <Text style={{ color: "red" }}>$120</Text>
                </View>
              </View>
              {/** Dress 2 */}
              <View>
                <View>
                  <Image source={item.image1} />
                </View>
                {/** Texts */}
                <View>
                  <Text>{item.name1} </Text>
                  <Text>{item.text}</Text>
                  <Text style={{ color: "red" }}>{item.price}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default App;
