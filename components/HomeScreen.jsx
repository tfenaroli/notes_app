import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import Note from "./Note";

const Home = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.contentWrapper}>
                <Button
                    title="Go to Note"
                    onPress={() => props.navigation.navigate("NoteScreen")}
                />
                <Text style={styles.title}>Notes</Text>
                <View>
                    <Note text="Note 1" />
                    <Note text="Note 2" />
                    <Note text="Note 3" />
                </View>
            </View>
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
        paddingTop: 80,
        marginHorizontal: 20,
    },
    title: {
        color: "black",
        fontSize: 28,
        fontWeight: "bold",
    },
});
