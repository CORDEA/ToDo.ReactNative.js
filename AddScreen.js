import {StyleSheet, TextInput, View} from "react-native";
import React from "react";
import {FloatingAction} from "react-native-floating-action";

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
                <FloatingAction
                    overrideWithAction
                    actions={[
                        {
                            name: "add",
                            icon: require("./img/baseline_add_white_24pt.png"),
                        },
                    ]}
                    iconHeight={24}
                    iconWidth={24}
                    onPressItem={() => {
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
