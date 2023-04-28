/**
 * Copyright (c) 2023 Xiaxi Shen
 */

import React, { Component } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";

import Task from "../../components/TaskComponents";
export default class Home extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.tasksWrapper}>
            <Text style={styles.sectionTitle}>History</Text>
            <Text style={styles.dataFirst}>Apr 11, 2023</Text>
            <View style={styles.items}>
              <Task style={styles.tasks} time="MORNING" />
              <Task time="AFTERNOON" />
              <Task time="EVENING" />
              <Task time="NIGHT" />
            </View>
            <Text style={styles.date}>Apr 10, 2023</Text>
            <View style={styles.items}>
              <Task style={styles.tasks} time="MORNING" />
              <Task time="AFTERNOON" />
              <Task time="EVENING" />
              <Task time="NIGHT" />
            </View>
            <Text style={styles.date}>Apr 9, 2023</Text>
            <View style={styles.items}>
              <Task style={styles.tasks} time="MORNING" />
              <Task time="AFTERNOON" />
              <Task time="EVENING" />
              <Task time="NIGHT" />
            </View>
            <Text style={styles.date}>Apr 8, 2023</Text>
            <View style={styles.items}>
              <Task style={styles.tasks} time="MORNING" />
              <Task time="AFTERNOON" />
              <Task time="EVENING" />
              <Task time="NIGHT" />
            </View>
          </View>
        </View>
      </ScrollView>
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
  dataFirst: {
    fontSize: 30,
  },
  date: {
    fontSize: 30,
    marginTop: 10,
  },
  tasks: {
    marginTop: 10,
  },
});
