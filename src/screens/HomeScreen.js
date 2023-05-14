/**
 * Copyright (c) 2023 Xiaxi Shen
 */

import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

import Task from "../components/TaskComponents";
export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Tracking</Text>
          <Text style={styles.date}>Apr 11, 2023</Text>
          <View style={styles.items}>
            <Task style={styles.tasks} time="MORNING" />
            <Task style={styles.tasks} time="AFTERNOON" />
            <Task style={styles.tasks} time="EVENING" />
            <Task style={styles.tasks} time="NIGHT" />
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
  tasks: {
    marginTop: 30,
  },
});
