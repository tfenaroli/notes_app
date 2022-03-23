import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    KeyboardAvoidingView,
    TextInput,
    SafeAreaView,
    FlatList,
} from "react-native";
import Note from "./Note";

const Home = (props) => {
    const [note, setNote] = useState();
    const [notes, setNotes] = useState([
        "Note 1!Note 1!Note 1!Note 1!Note 1!Note 1!Note 1!Note 1!Note 1!Note 1!Note 1!Note 1!Note 1!Note 1!Note 1!Note 1!Note 1!Note 1!Note 1!Note 1!Note 1!Note 1!Note 1!Note 1!Note 1!",
        "Note 2!Note 2!Note 2!Note 2!Note 2!Note 2!Note 2!Note 2!Note 2!Note 2!Note 2!Note 2!Note 2!Note 2!Note 2!Note 2!Note 2!Note 2!Note 2!Note 2!Note 2!Note 2!Note 2!Note 2!Note 2!Note 2!Note 2!Note 2!",
        "Note 3!Note 3!Note 3!Note 3!Note 3!Note 3!Note 3!Note 3!Note 3!Note 3!Note 3!Note 3!Note 3!Note 3!Note 3!Note 3!Note 3!Note 3!Note 3!Note 3!Note 3!Note 3!Note 3!Note 3!Note 3!Note 3!Note 3!Note 3!Note 3!Note 3!",
    ]);

    return (
        <View style={styles.container}>
            <View style={styles.contentWrapper}>
                {/* <Button
                    title="Go to Note"
                    onPress={() => props.navigation.navigate("NoteScreen")}
                /> */}
                {/* <Text style={styles.title}>Notes</Text> */}
                <SafeAreaView style={styles.contentWrapper}>
                    <FlatList
                        keyExtractor={(item) => item}
                        data={notes}
                        renderItem={({ item }) => (
                            <Note
                                fullNote={item}
                                navigation={props.navigation}
                            />
                        )}
                    />
                </SafeAreaView>
                {/* <View>
                    <Note text="Note 1" navigation={props.navigation} />
                    <Note text="Note 2" navigation={props.navigation} />
                    <Note text="Note 3" navigation={props.navigation} />
                </View> */}
            </View>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <TextInput placeholder={"Write a note!"} />
                <TouchableOpacity>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    contentWrapper: {
        marginHorizontal: 10,
    },
    title: {
        color: "black",
        fontSize: 28,
        fontWeight: "bold",
    },
});
