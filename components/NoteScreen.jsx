import { View, Text, StyleSheet } from "react-native";
import React from "react";

const NoteScreen = (props) => {
    return (
        <View>
            <Text style={styles.noteText}>{props.route.params.fullNote}</Text>
        </View>
    );
};

export default NoteScreen;

const styles = StyleSheet.create({
    noteText: {
        padding: 20,
    },
});
