import {StyleSheet, TextInput, View} from "react-native";
import React from "react";
import AddFloatingActionButton from "./AddFloatingActionButton";

export default class AddScreen extends React.Component {
    static navigationOptions = {
        title: 'Add ToDo',
    };

    constructor(props) {
        super(props);
        this.state = {text: ''}
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder={"ToDo"}
                    onChangeText={(text) =>
                        this.setState({text})
                    }
                    value={this.state.text}
                />
                <AddFloatingActionButton
                    onPressItem={(item) => {
                    }}
                />
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
