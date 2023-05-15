import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Task from '../components/TaskComponents';
import { format } from 'date-fns';

function categorizeDrugs(data) {
  const categorized = {
    MORNING: [],
    AFTERNOON: [],
    EVENING: [],
    NIGHT: [],
  };

  data.forEach((item) => {
    const { frequency, drug } = item;

    if (frequency >= 1) categorized.MORNING.push(item);
    if (frequency >= 2) categorized.AFTERNOON.push(item);
    if (frequency >= 3) categorized.EVENING.push(item);
    if (frequency >= 4) categorized.NIGHT.push(item);
  });

  return categorized;
}

// Assuming you will get your data from props or any other source
// const data = this.props.data;
// const categorizedData = categorizeDrugs(data);

const Home = ({prescriptions}) => {
  const categorizedData = categorizeDrugs(prescriptions);
  const todaysFormattedDate = format(new Date(), 'MMMM dd, yyyy');

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Tracking</Text>
        <Text style={styles.date}>Today is {todaysFormattedDate}</Text>
        <View style={styles.items}>
          {categorizedData.MORNING.length ? <Task style={styles.tasks} mode = {"HOME"} items = {categorizedData.MORNING} time="MORNING" /> : null}
          {categorizedData.AFTERNOON.length ? <Task style={styles.tasks} mode = {"HOME"} items = {categorizedData.AFTERNOON} time="AFTERNOON" /> : null}
          {categorizedData.EVENING.length ? <Task style={styles.tasks} mode = {"HOME"} items = {categorizedData.EVENING} time="EVENING" /> : null}
          {categorizedData.NIGHT.length ? <Task style={styles.tasks} mode = {"HOME"} items = {categorizedData.NIGHT} time="NIGHT" /> : null}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    justifyContent: 'center',
    marginBottom: 20,
  },
  date: {
    fontSize: 30,
  },
  tasks: {
    marginTop: 30,
  },
});

export default Home;
