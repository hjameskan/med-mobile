import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import Task from "../components/PrescriptionCard";

export default class PrescriptionsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Prescription</Text>
          {/* <Text style={styles.date}>Apr 11, 2023</Text> */}
          <View style={styles.items}>
            <Task
              style={styles.tasks}
              pillName="Donepezil"
              purpose="Purpose: Alzheimer's"
              directions="Directions: 1 pill, before breakfast"
              doctor="Prescribed by: Dr.John Doe, May 12 2021"
            />
            <Task
              style={styles.tasks}
              pillName="Heparin"
              purpose="Purpose: Alzheimer's"
              directions="Directions: 1 pill, before breakfast"
              doctor="Prescribed by: Dr.John Doe, May 12 2021"
            />
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
    marginBottom: 0,
  },
  items: {
    marginTop: 0,
  },
  tasks: {
    marginTop: 15,
  },
});
