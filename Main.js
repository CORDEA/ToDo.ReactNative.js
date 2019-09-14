import {FlatList, StyleSheet, Text, View} from "react-native";
import React from "react";

export default class Main extends React.Component {
    static navigationOptions = {
        title: 'ToDo',
    };

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={[
                        {key: 'a', value: 'a'},
                        {key: 'b', value: 'a'},
                        {key: 'c', value: 'a'},
                    ]}
                    renderItem={({item}) =>
                        <View style={styles.item}>
                            <Text style={styles.title}>{item.key}</Text>
                            <Text style={styles.description}>{item.key}</Text>
                        </View>
                    }
                    ItemSeparatorComponent={() =>
                        <View style={styles.separator}/>
                    }
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
    item: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    description: {
        fontSize: 12,
    },
    separator: {
        height: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.12)',
    },
});
