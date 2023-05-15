import React from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import Task from "../components/TaskComponents";

function categorizeData(data) {
  const categorizedData = {};

  data.forEach(item => {
    const date = new Date(item.dateTime);
    const dateStr = date.toISOString().split('T')[0];

    // Define time of day based on hour
    let timeOfDay = '';
    const hour = date.getUTCHours();
    if (hour >= 5 && hour < 12) timeOfDay = 'MORNING';
    else if (hour >= 12 && hour < 18) timeOfDay = 'AFTERNOON';
    else if (hour >= 18 && hour < 21) timeOfDay = 'EVENING';
    else timeOfDay = 'NIGHT';

    // If this date is not already in the categorizedData object, add it
    if (!categorizedData[dateStr]) {
      categorizedData[dateStr] = {
        MORNING: [],
        AFTERNOON: [],
        EVENING: [],
        NIGHT: []
      };
    }

    // Add this item to the correct time of day for this date
    categorizedData[dateStr][timeOfDay].push(item);
  });

  return categorizedData;
}

const Home = ({drugsTakenRecord}) => {
  console.log("drugsTakenRecord", drugsTakenRecord);
  const categorizedData = categorizeData(drugsTakenRecord);
  
  const renderDays = () => {
    return Object.keys(categorizedData).map((date) => {
      const dayData = categorizedData[date];
      console.log("dayData", dayData);
      return (
        <View key={date}>
          <Text style={styles.date}>{date}</Text>
          <View style={styles.items}>
            {dayData.MORNING && dayData.MORNING.length ? <Task style={styles.tasks} time="MORNING" items={dayData.MORNING} /> : null}
            {dayData.AFTERNOON && dayData.AFTERNOON.length ? <Task time="AFTERNOON" items={dayData.AFTERNOON} /> : null}
            {dayData.EVENING && dayData.EVENING.length ? <Task time="EVENING" items={dayData.EVENING} /> : null}
            {dayData.NIGHT && dayData.NIGHT.length ? <Task time="NIGHT" items={dayData.NIGHT} /> : null}
          </View>
        </View>
      );
    });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>History</Text>
          {renderDays()}
        </View>
      </View>
    </ScrollView>
  );
  
  // return (
  //   <ScrollView>
  //     <View style={styles.container}>
  //       <View style={styles.tasksWrapper}>
  //         <Text style={styles.sectionTitle}>History</Text>
  //         <Text style={styles.dataFirst}>Apr 11, 2023</Text>
  //         <View style={styles.items}>
  //           <Task style={styles.tasks} time="MORNING" />
  //           <Task time="AFTERNOON" />
  //           <Task time="EVENING" />
  //           <Task time="NIGHT" />
  //         </View>
  //         <Text style={styles.date}>Apr 10, 2023</Text>
  //         <View style={styles.items}>
  //           <Task style={styles.tasks} time="MORNING" />
  //           <Task time="AFTERNOON" />
  //           <Task time="EVENING" />
  //           <Task time="NIGHT" />
  //         </View>
  //         <Text style={styles.date}>Apr 9, 2023</Text>
  //         <View style={styles.items}>
  //           <Task style={styles.tasks} time="MORNING" />
  //           <Task time="AFTERNOON" />
  //           <Task time="EVENING" />
  //           <Task time="NIGHT" />
  //         </View>
  //         <Text style={styles.date}>Apr 8, 2023</Text>
  //         <View style={styles.items}>
  //           <Task style={styles.tasks} time="MORNING" />
  //           <Task time="AFTERNOON" />
  //           <Task time="EVENING" />
  //           <Task time="NIGHT" />
  //         </View>
  //       </View>
  //     </View>
  //   </ScrollView>
  // );
};

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

export default Home;
