/**
 * Copyright (c) 2023 Xiaxi Shen
 */

import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";

export default class content extends Component {
  imgPath = require("../../screens_2/Home/images/green_tick.png");
  
  render() {
    return (
      <View>
        <View style={styles.item}>
        <Text> MORNING </Text>
        <View style={styles.sectionImage}>
          <Image source={this.imgPath} style={styles.tick_cross} />
          <Text>Taken</Text>
        </View>
        </View>

        <View style={styles.item}>
        <Text> AFTERNOON </Text>
        <View style={styles.sectionImage}>
          <Image source={this.imgPath} style={styles.tick_cross} />
          <Text>Taken</Text>
        </View>
        </View>

        <View style={styles.item}>
        <Text> EVENING </Text>
        <View style={styles.sectionImage}>
          <Image source={this.imgPath} style={styles.tick_cross} />
          <Text>Taken</Text>
        </View>
        </View>

        <View style={styles.item}>
        <Text> NIGHT </Text>
        <View style={styles.sectionImage}>
          <Image source={this.imgPath} style={styles.tick_cross} />
          <Text>Taken</Text>
        </View>
        </View>

      </View>
      
      

      // <View>
      //   <Text> MORNING </Text>
      //   <Text> Donepezil (5mg) </Text>
      //   <Text> Heparin (10mg) </Text>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  sectionImage: {
    flexDirection: "row",
  },
  item: {
    // backgroundColor: "#FFF",
    padding: 5,
    borderRadius: 10,
    // borderRadius: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 0,
    marginTop: 10,
  },
  tick_cross: {
    width: 16,
    height: 16,
    marginRight: 5,
    marginLeft: 10,
  },

});
