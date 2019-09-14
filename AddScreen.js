import {StyleSheet, TextInput, View} from "react-native";
import React from "react";
import AddFloatingActionButton from "./AddFloatingActionButton";

export default class AddScreen extends React.Component {
    static navigationOptions = {
        title: 'Add ToDo',
    };

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder={"ToDo"}
                />
                <AddFloatingActionButton/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
});
