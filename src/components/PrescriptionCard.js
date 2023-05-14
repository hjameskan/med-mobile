import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image
} from "react-native";
import imgPath from "../assets/icons/pill.png";

export default class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showContent: false,
    };
  }

  render() {
    return (
      <View style={styles.item}>
        <View style={styles.itemLeft}>
          <Image source={imgPath} style={styles.pill} />
          <Text style={styles.itemText}>{this.props.pillName}</Text>
        </View>
        <View style={styles.PrscriptionContent}>
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