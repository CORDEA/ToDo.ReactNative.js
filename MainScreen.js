import {FlatList, StyleSheet, Text, View} from "react-native";
import React from "react";
import {connect} from "react-redux";
import AddFloatingActionButton from "./AddFloatingActionButton";
import Swipeable from "react-native-swipeable";

class MainScreen extends React.Component {
    static navigationOptions = {
        title: 'ToDo',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.list}
                    renderItem={({item}) =>
                        <Swipeable
                            leftContent={
                                <View style={styles.leftContent}>
                                    <Text style={styles.leftText}>Mark as completed</Text>
                                </View>
                            }>
                            <View style={styles.item}>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.description}>{item.description}</Text>
                            </View>
                        </Swipeable>
                    }
                    ItemSeparatorComponent={() =>
                        <View style={styles.separator}/>
                    }
                />
                <AddFloatingActionButton
                    onPressItem={() => {
                        navigate('AddScreen')
                    }}
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
    leftContent: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#aed581',
    },
    leftText: {
        alignSelf: 'flex-end',
        margin: 16,
        fontSize: 16,
        color: '#fff',
    },
});

const mapStateToProps = (state) => {
    const {todo: {list}} = state;
    return {list}
};

export default connect(mapStateToProps)(MainScreen);
