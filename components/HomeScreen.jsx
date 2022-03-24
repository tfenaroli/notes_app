import React, { useState } from "react";
import {
    StyleSheet,
    Text,
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
import Note from "./Note";
import { Ionicons } from "@expo/vector-icons";
import { useHeaderHeight } from "@react-navigation/elements";

const inputSpace = 40;

const Home = (props) => {
    const [note, setNote] = useState();
    const [notes, setNotes] = useState([
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tristique aliquam ligula. Etiam porta rhoncus elit, vitae congue lorem maximus et. Nunc vitae sem id lectus porta feugiat non non erat. Donec ac blandit eros. Ut laoreet vehicula metus a vulputate. Cras sit amet lorem id erat bibendum pulvinar vitae at nibh. Donec quis metus mauris. Phasellus convallis tristique nisi eget blandit. Nulla facilisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean vestibulum mi ut aliquam efficitur. Duis eget varius nunc. Ut ut sem posuere justo aliquam congue. Vestibulum faucibus tellus in nulla dapibus varius. In pellentesque dapibus eleifend. In id ligula sem.",
        "Maecenas sapien justo, aliquet id scelerisque non, tempus quis est. Curabitur sit amet lectus maximus, sollicitudin ligula semper, fermentum nisl. Donec et mauris mi. Vestibulum euismod turpis at tellus gravida finibus. Donec eu eros et augue convallis porttitor vel in nulla. Vestibulum imperdiet lobortis quam. Suspendisse pharetra mi felis, a tincidunt ipsum egestas sed. Etiam imperdiet, eros sit amet maximus tempus, turpis lorem rhoncus leo, sed laoreet sem nisl ac ipsum. Etiam euismod dui vitae lorem dignissim iaculis. Nulla facilisi.",
        "Phasellus luctus porttitor lacus non mollis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec vehicula tortor eu ullamcorper egestas. Aenean pulvinar diam ut lobortis ullamcorper. Sed in ante vel libero pellentesque mattis. Praesent ut condimentum lectus. Curabitur ut neque eu orci suscipit ultricies eget ac tellus. Praesent eget turpis arcu. Sed hendrerit consectetur mauris, eu vestibulum erat rhoncus at. Proin auctor massa in egestas laoreet. Vestibulum pretium dui sit amet ipsum suscipit, ut tincidunt sem sagittis. Nunc elementum tortor at est placerat vehicula. Etiam sed metus et ex tristique dignissim",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tristique aliquam ligula. Etiam porta rhoncus elit, vitae congue lorem maximus et. Nunc vitae sem id lectus porta feugiat non non erat. Donec ac blandit eros. Ut laoreet vehicula metus a vulputate. Cras sit amet lorem id erat bibendum pulvinar vitae at nibh. Donec quis metus mauris. Phasellus convallis tristique nisi eget blandit. Nulla facilisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean vestibulum mi ut aliquam efficitur. Duis eget varius nunc. Ut ut sem posuere justo aliquam congue. Vestibulum faucibus tellus in nulla dapibus varius. In pellentesque dapibus eleifend.  id ligula sem",
        "Maecenas sapien justo, aliquet id scelerisque non, tempus quis est. Curabitur sit amet lectus maximus, sollicitudin ligula semper, fermentum nisl. Donec et mauris mi. Vestibulum euismod turpis at tellus gravida finibus. Donec eu eros et augue convallis porttitor vel in nulla. Vestibulum imperdiet lobortis quam. Suspendisse pharetra mi felis, a tincidunt ipsum egestas sed. Etiam imperdiet, eros sit amet maximus tempus, turpis lorem rhoncus leo, sed laoreet sem nisl ac ipsum. Etiam euismod dui vitae lorem iaculis. Nulla facilisi.",
        "Phasellus luctus porttitor lacus non mollis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec vehicula tortor eu ullamcorper egestas. Aenean pulvinar diam ut lobortis ullamcorper. Sed in ante vel libero pellentesque mattis. Praesent ut condimentum lectus. Curabitur ut neque eu orci suscipit ultricies eget ac tellus. Praesent eget turpis arcu. Sed hendrerit consectetur mauris, eu vestibulum erat rhoncus at. Proin auctor massa in egestas laoreet. Vestibulum pretium dui sit amet ipsum suscipit, ut tincidunt sem sagittis. Nunc elementum tortor at est placerat vehicula. Etiam sed metus et ex tristique ",
    ]);

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
