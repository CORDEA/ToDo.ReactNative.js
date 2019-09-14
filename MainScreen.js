import {FlatList, StyleSheet, Text, View} from "react-native";
import React from "react";
import {connect} from "react-redux";
import {FloatingAction} from "react-native-floating-action";

class MainScreen extends React.Component {
    static navigationOptions = {
        title: 'ToDo',
    };

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.list}
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
                    onPressItem={(name) => {
                    }
                    }/>
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

const mapStateToProps = (state) => {
    const {todo: {list}} = state;
    return {list}
};

export default connect(mapStateToProps)(MainScreen);
