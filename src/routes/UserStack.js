import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import UserScreen from '../screens_2/Prescription';

const Stack = createStackNavigator();

export default class UserStack extends Component {
  render() {
    return (
      <Stack.Navigator
      // headerMode={'none '}
      >
        <Stack.Screen
          name="User"
          component={UserScreen}
          options={{
            title: 'User',
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
