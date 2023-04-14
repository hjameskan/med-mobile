/**
 * Copyright (c) 2023 Xiaxi Shen
 */

import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class content extends Component {
  render() {
    return (
      <View>
        <Text> Donepezil (5mg) - Before food</Text>
        <Text> Heparin (10mg) - After food</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
