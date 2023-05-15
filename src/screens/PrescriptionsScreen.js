import React, { useEffect } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import { format } from 'date-fns';
import Task from "../components/PrescriptionCard";

// const PrescriptionsScreen = (props) => {
//   console.log('props', props);
  // useEffect(() => {
  //   fetchPrescriptions();
  // }, [fetchPrescriptions]);

const PrescriptionsScreen = ({ prescriptions, fetchPrescriptions }) => {
  // useEffect(() => {
  //   fetchPrescriptions();
  // }, [fetchPrescriptions]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Prescription</Text>
        <View style={styles.items}>
          {prescriptions.map((prescription, index) => (
            <Task
              key={index}
              style={styles.tasks}
              pillName={prescription.drug.name}
              purpose={`Purpose: Alzheimer's`}
              directions={`Directions: ${prescription.frequency} time(s) per day, ${prescription.dosage} pill(s) each time`}
              doctor={`Prescribed by: ${prescription.doctor.username}, ${format(new Date(prescription.createdAt), "MMMM dd yyyy")}`} // format(new Date(dateString), 'MM dd yy HH:mm:ss')
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default PrescriptionsScreen;

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
