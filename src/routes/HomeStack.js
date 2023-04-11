import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens_2/Home';

const Stack = createStackNavigator();

export default class HomeStack extends Component {
  render() {
    return (
      <Stack.Navigator
        initialRouteName="Home"
        // headerMode={'none '}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'homepage',
            headerStyle: {
              backgroundColor: 'red',
            },
          }}
        />
      </Stack.Navigator>
    );
  }
}

const styles = StyleSheet.create({});
