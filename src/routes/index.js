import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
// import HomeScreen from "../screens/HomeScreen.js";
import HomeScreenContainer from "../containers/HomeScreenContainer.js";
import HistoryScreen from "../screens/HistoryScreen.js";
import PrescriptionsScreen from "../screens/PrescriptionsScreen.js";
import MoreScreen from "../screens/MoreScreen.js";

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
        <Tab.Screen name="Home" component={HomeScreenContainer} />
        <Tab.Screen name="Prescriptions" component={PrescriptionsScreen} />
        <Tab.Screen name="History" component={HistoryScreen} />
        <Tab.Screen name="More" component={MoreScreen} />
      </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({});
