import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Note = (props) => {
    return (
        <TouchableOpacity
            style={styles.note}
            onPress={() =>
                props.navigation.navigate("NoteScreen", {
                    fullNote: props.fullNote,
                })
            }
        >
            <View style={styles.noteLeft}>
                <Text style={styles.text}>
                    {props.fullNote.substring(0, 20)}...
                </Text>
            </View>
            <TouchableOpacity
                onPress={() => props.handleDeleteNote(props.index)}
            >
                <Ionicons name="md-trash-outline" size={24} color="red" />
            </TouchableOpacity>
        </TouchableOpacity>
    );
};

export default Note;

const styles = StyleSheet.create({
    note: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#ebf9ff",
        padding: 20,
        marginTop: 16,
        borderRadius: 10,
    },
    noteLeft: {
        flexDirection: "row",
        alignItems: "center",
    },
    text: {
        fontSize: 18,
    },
});
