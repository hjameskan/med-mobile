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
  imgPath = require("../../assets/icons/green_tick.png");
  down = require("../../assets/icons/down.png");
  up = require("../../assets/icons/up.png");

  render() {
    return (
      <View style={styles.item}>
        <View style={styles.itemLeft}>
          <View style={styles.square}></View>
          <Text style={styles.itemText}>{this.props.text}</Text>
        </View>
        <View style={styles.sectionImage}>
          <Image source={this.imgPath} style={styles.tick_cross} />
          <Text>Taken</Text>
          <TouchableOpacity onPress={this.props.toggleContent}>
            <Image source={this.down} style={styles.tick_cross} />
          </TouchableOpacity>
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
    flexDirection: "row",
    alignItems: "center",
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
  tick_cross: {
    width: 16,
    height: 16,
    marginRight: 5,
    marginLeft: 10,
  },
});
