import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import Title from "./title";

const Task = ({ style, time, items = [], mode, flag = false }) => {
  const [showContent, setShowContent] = useState(false);

  const toggle = () => {
    setShowContent((prevShowContent) => !prevShowContent);
  };

  return (
    <View style={style}>
      <Title text={time} toggleContent={toggle} flag={flag} />
      {mode === "HOME"
        ? showContent && items.length
          ? items.map((item, index) => (
              <Text
                style={styles.listItem}
                key={index}
              >{`${item.drug.name}, ${item.dosage} pill(s)`}</Text>
            ))
          : null
        : showContent && items.length
        ? items.map((item, index) => (
            <Text
              style={styles.listItem}
              key={index}
            >{`${item.drug.name}, ${item.prescription.dosage} pill(s)`}</Text>
          ))
        : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 40,
    fontWeight: "bold",
    justifyContent: "center",
    marginBottom: 20,
  },
  date: {
    fontSize: 30,
  },
  items: {
    marginTop: 20,
  },
  listItem: {
    fontSize: 16,
    color: "#333",
    // marginBottom: 10,
    backgroundColor: "#f8f8f8",
    padding: 10,
    borderRadius: 5,
  },
});

export default Task;
