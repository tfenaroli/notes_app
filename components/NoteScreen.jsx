import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity,
    KeyboardAvoidingView,
    TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RefreshControl, TouchableWithoutFeedback } from "react-native-web";
import { AntDesign } from "@expo/vector-icons";

const inputSpace = 40;

const NoteScreen = (props) => {
    const [fullNote, setFullNote] = useState(props.route.params.fullNote);
    const [currNote, setCurrNote] = useState(fullNote);

    const handleEditNote = (note) => {
        setCurrNote(note);
        setFullNote(currNote);
    };

    return (
        <TouchableWithoutFeedback>
            <SafeAreaView style={styles.container}>
                <Text style={styles.noteText}>{fullNote}</Text>
                <Button
                    title="Go back"
                    onPress={() =>
                        props.navigation.navigate("HomeScreen", {
                            newNote: currNote,
                            newNoteIndex: props.route.params.fullNoteIndex,
                        })
                    }
                />
                <KeyboardAvoidingView
                    style={styles.inputWrapper}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    keyboardVerticalOffset={40}
                >
                    <TextInput
                        style={styles.input}
                        placeholder={"Write a note!"}
                        value={currNote}
                        onChangeText={(text) => setCurrNote(text)}
                    />
                    <TouchableOpacity onPress={() => handleEditNote(currNote)}>
                        <AntDesign name="edit" size={24} color="black" />
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </TouchableWithoutFeedback>
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
        marginTop: 40,
        fontSize: 18,
        padding: 20,
    },
    inputWrapper: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#ebf9ff",
        position: "absolute",
        paddingHorizontal: 16,
        bottom: 40,
    },
    input: {
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderRadius: 20,
        borderColor: "rgb(200, 200, 200)",
        borderWidth: 1,
        width: 290,
    },
});
