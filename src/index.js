// import React, { Component } from "react";
// import { Text, StyleSheet, View } from "react-native";
// import MainTab from "./routes";
// export default class index extends Component {
//   render() {
//     return <MainTab />;
//   }
// }

// const styles = StyleSheet.create({});

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from '../app.json';

AppRegistry.registerComponent(appName, () => App);