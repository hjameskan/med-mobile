import React from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";

export default function Contraindication ({ text }) {
    const imgPath = require('../../screens_2/Home/images/exclamation_mark.jpg');

    return (
         <View style={styles.item}>
            <View style={styles.itemLeft}>
                <Image source={imgPath} style={styles.exclamationmark} />
                <Text style={styles.itemText}>contraindication</Text>
            </View>
            <View style={styles.contraindicationContent}>
                <View>
                    <Text>{text}{"\n"}</Text>
                </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#FFF",
        borderColor: "#FED8B1",
        borderWidth: 5,
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
    exclamationmark: {
        width: 20,
        height: 20,
        marginRight: 10,
        // marginLeft: 10,
    },
    itemText: {
        fontSize: 20,
        fontWeight: "bold",
        textTransform: 'uppercase'
      },
    contraindicationContent: {
     marginTop: 10,
    },
})