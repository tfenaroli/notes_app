import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const Note = (props) => {
    return (
        <TouchableOpacity style={styles.note}>
            <View style={styles.noteLeft}>
                <View style={styles.circle}></View>
                <Text style={styles.text}>{props.text}</Text>
            </View>
            <View style={styles.delete}></View>
        </TouchableOpacity>
    );
};

export default Note;

const styles = StyleSheet.create({
    note: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "rgb(240, 240, 240)",
        padding: 20,
        marginTop: 16,
        borderRadius: 10,
    },
    noteLeft: {
        flexDirection: "row",
        alignItems: "center",
    },
    circle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        marginRight: 8,
        backgroundColor: "rgb(180, 180, 180)",
    },
    text: {
        fontSize: 18,
        // fontWeight: "bold",
    },
    delete: {
        width: 12,
        height: 12,
        backgroundColor: "red",
    },
});
