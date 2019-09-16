import {FlatList, Image, StyleSheet, Text, TouchableNativeFeedback, View} from "react-native";
import React from "react";
import {connect} from "react-redux";
import AddFloatingActionButton from "./AddFloatingActionButton";
import Swipeable from "react-native-swipeable";
import {bindActionCreators} from "redux";
import {completeTodo} from "./TodoActions";

class MainScreen extends React.Component {
    static navigationOptions = () => {
        return {
            title: 'ToDo',
            headerRight: (
                <TouchableNativeFeedback
                    background={TouchableNativeFeedback.SelectableBackgroundBorderless()}
                    onPress={() => {
                    }}>
                    <View style={styles.menu}>
                        <Image
                            source={require('./img/baseline_more_vert_black_24pt.png')}
                        />
                    </View>
                </TouchableNativeFeedback>
            )
        }
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
                                <View style={item.completed ? styles.incomplete : styles.complete}>
                                    {item.completed ?
                                        <Text style={styles.leftText}>Mark as incomplete</Text> :
                                        <Text style={styles.leftText}>Mark as completed</Text>}
                                </View>
                            }
                            onLeftActionActivate={() =>
                                this.props.completeTodo({key: item.key, completed: !item.completed})
                            }
                            rightButtons={[
                                <View style={styles.rightContent}>
                                    <Text style={styles.rightText}>Delete</Text>
                                </View>
                            ]}>
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
    menu: {
        height: 24,
        width: 24,
        marginEnd: 16,
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
    complete: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#2e7d32',
    },
    incomplete: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#757575',
    },
    leftText: {
        alignSelf: 'flex-end',
        margin: 16,
        fontSize: 16,
        color: '#fff',
    },
    rightContent: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#d81b60',
    },
    rightText: {
        margin: 16,
        fontSize: 16,
        color: '#fff',
    },
});

const mapStateToProps = (state) => {
    const {todo: {list}} = state;
    return {list}
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({completeTodo}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
