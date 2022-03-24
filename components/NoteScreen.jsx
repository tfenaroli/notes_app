import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import React from "react";

const NoteScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.noteText}>{props.route.params.fullNote}</Text>
            {/* <TouchableOpacity style={styles.editButtonWrapper}>
                <Text>Edit</Text>
            </TouchableOpacity> */}
        </View>
    );
};

export default NoteScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#ebf9ff",
    },

    noteText: {
        fontSize: 18,
        padding: 20,
    },
});
