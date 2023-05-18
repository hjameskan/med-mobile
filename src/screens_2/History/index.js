/**
 * Copyright (c) 2023 Xiaxi Shen
 */

import React, { Component } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";

import Task from "../../components/HistoryComponents";
export default class Home extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.tasksWrapper}>
            {/* <Text style={styles.sectionTitle}>History</Text> */}
            {/* <Text style={styles.dataFirst}>Apr 11, 2023</Text> */}
            <View style={styles.items}>
              <Task style={styles.tasks} time="Apr 11, 2023" />
              <Task time="Apr 12, 2023" />
              <Task time="Apr 13, 2023" />
              <Task time="Apr 14, 2023" />
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
    fontSize: 10,
  },
});
