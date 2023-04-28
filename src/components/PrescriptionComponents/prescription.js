/**
 * Copyright (c) 2023 Xiaxi Shen
 */

import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

/**
 * A React Native class component that displays a task item with a title, and allows the user to toggle the visibility of the task content.
 *
 * Props:
 * - text (string): The text content of the task item.
 * - toggleContent (function): A callback function that is called when the user taps the title, to toggle the visibility of the task content.
 *
 * State:
 * - None
 *
 * Methods:
 * - None
 *
 */
export default class Title extends Component {
  imgPath = require("../../screens_2/Home/images/pill.png");
  down = require("../../screens_2/Home/images/down.png");
  up = require("../../screens_2/Home/images/up.png");

  render() {
    return (
      <View style={styles.item}>
        <View style={styles.itemLeft}>
          <Image source={this.imgPath} style={styles.pill} />
          <Text style={styles.itemText}>{this.props.pillName}</Text>
        </View>
        <View style={styles.PrscriptionContent}>
          {/* <Image source={this.imgPath} style={styles.tick_cross} />
          <Text>Taken</Text> */}
          {/* <TouchableOpacity onPress={this.props.toggleContent}>
            <Image source={this.down} style={styles.tick_cross} />
          </TouchableOpacity> */}
          <View>
            <Text>
              {this.props.purpose}
              {"\n"}
            </Text>
            <Text>
              {this.props.directions}
              {"\n"}
            </Text>
            <Text>{this.props.doctor}</Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  sectionImage: {
    flexDirection: "row",
  },
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    // borderRadius: 10,
    borderRadius: 0,
    flexDirection: "column",
    alignItems: "left",
    justifyContent: "space-between",
    marginBottom: 0,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#4b2e83",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    // limit it to a range of square
    fontSize: 20,
    maxWidth: "80%",
    fontWeight: "bold",
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "#55BCF6",
    borderWidth: 2,
    borderRadius: 5,
  },
  pill: {
    width: 20,
    height: 20,
    marginRight: 10,
    // marginLeft: 10,
  },
  PrscriptionContent: {
    marginTop: 10,
  },
});
