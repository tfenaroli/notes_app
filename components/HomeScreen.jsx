import React, { useState } from "react";
import {
    StyleSheet,
    Button,
    View,
    TouchableWithoutFeedback,
    TouchableOpacity,
    KeyboardAvoidingView,
    TextInput,
    SafeAreaView,
    FlatList,
    Keyboard,
    Alert,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import Note from "./Note";
import { Ionicons } from "@expo/vector-icons";
import { useHeaderHeight } from "@react-navigation/elements";

const inputSpace = 40;

const Home = (props) => {
    const [note, setNote] = useState();
    const [notes, setNotes] = useState(["Note 1", "Note 2", "Note 3"]);

    const headerHeight = useHeaderHeight();

    const handleAddNote = () => {
        Keyboard.dismiss();
        if (note == null) {
            Alert.alert("Must enter a new note!", "Try again", [
                { text: "Got it!" },
            ]);
        } else {
            setNotes([...notes, note]);
            setNote(null);
        }
    };

    const handleDeleteNote = (index) => {
        let notesCopy = [...notes];
        notesCopy.splice(index, 1);
        setNotes(notesCopy);
    };

    // console.log(notes);

    const handleRefresh = () => {
        if (props.route.params === undefined) {
            // console.log("newNote is null");
        } else {
            let notesCopy = [...notes];
            notesCopy[props.route.params.newNoteIndex] =
                props.route.params.newNote;
            setNotes(notesCopy);
        }
        props.route.params = undefined;
    };

    return (
        <TouchableWithoutFeedback>
            <SafeAreaView style={styles.container}>
                <View style={styles.contentWrapper} nestedScrollEnabled>
                    <FlatList
                        keyExtractor={(item) => item}
                        data={notes}
                        renderItem={({ item, index }) => (
                            <Note
                                fullNote={item}
                                navigation={props.navigation}
                                handleDeleteNote={handleDeleteNote}
                                index={index}
                            />
                        )}
                    />
                </View>
                <Button title="refresh" onPress={() => handleRefresh()} />
                <KeyboardAvoidingView
                    style={styles.inputWrapper}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    keyboardVerticalOffset={headerHeight + inputSpace}
                >
                    <TextInput
                        style={styles.input}
                        placeholder={"Write a note!"}
                        value={note}
                        onChangeText={(text) => setNote(text)}
                    />
                    <TouchableOpacity onPress={() => handleAddNote()}>
                        <Ionicons
                            name="ios-add-circle-outline"
                            size={34}
                            color="#3da2cc"
                        />
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    contentWrapper: {
        // height: "88%",
        marginHorizontal: 20,
    },
    title: {
        color: "black",
        fontSize: 28,
        fontWeight: "bold",
    },
    inputWrapper: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "white",
        position: "absolute",
        paddingHorizontal: 16,
        paddingVertical: inputSpace,
        bottom: inputSpace,
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
