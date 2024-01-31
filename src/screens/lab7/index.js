import React from "react";
import { View, Image, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./HomeScreen";
import User from "./UserScreen";

const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const TopTabScreen1 = () => {
  return (
    <View>
      <Text>Tab1</Text>
    </View>
  );
};

const TopTabScreen2 = () => {
  return (
    <View>
      <Text>Tab2</Text>
    </View>
  );
};

const Lab7 = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        initialRouteName="TopTabs"
        tabBarOptions={{
          showLabel: false, // Ẩn tiêu đề của Bottom Tab
        }}
      >
        <BottomTab.Screen
          name="TopTabs"
          component={TopTabs}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Image
                  source={require("../../assets/traitim.webp")}
                  resizeMode="contain"
                  style={{ width: 26 }}
                />
              </View>
            ),
          }}
        />
        <BottomTab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Image
                  source={require("../../assets/home.png")}
                  resizeMode="contain"
                  style={{ width: 25 }}
                />
              </View>
            ),
          }}
        />
        <BottomTab.Screen
         
          name="User"
          component={User}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Image
                  source={require("../../assets/profile.png")}
                  resizeMode="contain"
                  style={{ width: 25 }}
                />
              </View>
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

const TopTabs = () => {
  return (
    <TopTab.Navigator
      tabBarOptions={{
       
        indicatorStyle: {
          backgroundColor: "red", // Màu của hiệu ứng khi đang ở trang đó
        },
        style: {
          backgroundColor: "transparent", // Màu nền của Top Tab
        },
      }}
    >
      <TopTab.Screen name="Tab1" component={TopTabScreen1} />
      <TopTab.Screen name="Tab2" component={TopTabScreen2} />
    </TopTab.Navigator>
  );
};

export default Lab7;
