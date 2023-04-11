import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import NewsScreen from '../screens_2/Notifications';

const Stack = createStackNavigator();

export default class NewsStack extends Component {
  render() {
    return (
      <Stack.Navigator
      // headerMode={'none '}
      >
        <Stack.Screen
          name="News"
          component={NewsScreen}
          options={{
            title: 'news',
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
