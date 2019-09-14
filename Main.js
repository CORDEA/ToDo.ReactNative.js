import {FlatList, StyleSheet, Text, View} from "react-native";
import React from "react";

export default class Main extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={[
                        {key: 'a'},
                        {key: 'b'},
                        {key: 'c'},
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    item: {},
});
