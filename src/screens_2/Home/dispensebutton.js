import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function DispenseButton({ text }) {
    return (
        <TouchableOpacity>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{ text }</Text>

            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        marginTop: 20,
        borderRadius: 8,
        paddingVertical: 14, 
        paddingHorizontal: 10,
        backgroundColor: "#4b2e83",
    },
    buttonText: {
        color: 'white',
        fontweight: 'bold',
        textTransform: 'uppercase',
        fontsize: 10,
        textAlign: 'center',
    },
})