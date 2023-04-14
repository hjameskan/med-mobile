/**
 * Copyright (c) 2023 Xiaxi Shen
 */

import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import Task from "./task";
export default class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Tracking</Text>
          <Text style={styles.date}>Apr 11, 2023</Text>
          <View style={styles.items}>
            <Task time="MORNING" />
            <Task time="AFTERNOON" />
            <Task time="EVENING" />
            <Task time="NIGHT" />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 40,
    fontWeight: "bold",
    // textAlign: 'center',
    justifyContent: "center",

    marginBottom: 20,
  },
  date: {
    fontSize: 30,
  },
  // items: {
  //   marginTop: 30,
  // },
});
