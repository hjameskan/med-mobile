import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens_2/Home';
import PrescriptionScreen from '../screens_2/Prescription';
import NotificationsScreen from '../screens_2/Notifications';
import MoreScreen from '../screens_2/More';

const Tab = createBottomTabNavigator();

export default class index extends Component {
  render() {
    return (
      <Tab.Navigator
        // ({route}) != route
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Notifications') {
              iconName = focused ? 'notifications' : 'notifications-outline';
            } else if (route.name === 'Prescription') {
              iconName = focused ? 'bandage' : 'bandage-outline';
            } else if (route.name === 'More') {
              iconName = focused
                ? 'ellipsis-horizontal'
                : 'ellipsis-horizontal-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} />
        <Tab.Screen name="Prescription" component={PrescriptionScreen} />
        <Tab.Screen name="More" component={MoreScreen} />
      </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({});
