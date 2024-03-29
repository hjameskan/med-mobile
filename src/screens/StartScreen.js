import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { connect } from 'react-redux';
import LoginScreen from './LoginScreen';
import WelcomeScreen from './WelcomeScreen';
import MainTabs from './MainTabsScreen';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Stack = createStackNavigator();

const StartScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    // todo_list: state.todos.todo_list,
  }
}

const mapDispatchToProps = { /*addTodo, deleteTodo*/ }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartScreen);
