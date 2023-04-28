import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "../screens_2/Home/index.js";
import HistoryScreen from "../screens_2/History/index.js";
import PrescriptionsScreen from "../screens_2/Prescriptions/index.js";
import MoreScreen from "../screens_2/More";

const Tab = createBottomTabNavigator();

export default class index extends Component {
  render() {
    return (
      <Tab.Navigator
        // ({route}) != route
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Prescriptions") {
              iconName = focused ? "notifications" : "notifications-outline";
            } else if (route.name === "History") {
              iconName = focused ? "bandage" : "bandage-outline";
            } else if (route.name === "More") {
              iconName = focused
                ? "ellipsis-horizontal"
                : "ellipsis-horizontal-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Prescriptions" component={PrescriptionsScreen} />
        <Tab.Screen name="History" component={HistoryScreen} />
        <Tab.Screen name="More" component={MoreScreen} />
      </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({});
