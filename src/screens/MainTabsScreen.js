import * as React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreenContainer from "../containers/HomeScreenContainer.js";
import HistoryScreenContainer from "../containers/HistoryScreenContainer";
// import HistoryScreen from "./HistoryScreen.js";
import PrescriptionsScreenContainer from '../containers/PrescriptionsScreenContainer.js';
import MoreScreen from "./MoreScreen.js";

const Tab = createBottomTabNavigator();

function MainTabs() {
    return (
      <Tab.Navigator
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
        <Tab.Screen name="Prescriptions" component={PrescriptionsScreenContainer} />
        <Tab.Screen name="History" component={HistoryScreenContainer} />
        <Tab.Screen name="More" component={MoreScreen} />
      </Tab.Navigator>
    );
}

export default MainTabs;