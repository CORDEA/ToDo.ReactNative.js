import {StyleSheet, TextInput, View} from "react-native";
import React from "react";
import AddFloatingActionButton from "./AddFloatingActionButton";
import {addTodo} from "./TodoActions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class AddScreen extends React.Component {
    static navigationOptions = {
        title: 'Add ToDo',
    };

    constructor(props) {
        super(props);
        this.state = {title: '', description: ''}
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder={"ToDo Title"}
                    onChangeText={(text) =>
                        this.setState({title: text})
                    }
                    value={this.state.title}
                />
                <TextInput
                    style={styles.input}
                    placeholder={"Description"}
                    onChangeText={(text) =>
                        this.setState({description: text})
                    }
                    multiline={true}
                    value={this.state.description}
                />
                <AddFloatingActionButton
                    onPressItem={() => {
                        this.props.addTodo(this.state);
                        this.setState({title: '', description: ''})
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 16,
        backgroundColor: '#fff',
    },
    input: {
        marginBottom: 16,
        fontSize: 16,
        padding: 16,
        borderColor: 'rgba(0, 0, 0, 0.12)',
        borderWidth: 1,
        borderRadius: 4,
    },
});

const mapStateToProps = (state) => ({});

const mapDispatchToProps = dispatch => (
    bindActionCreators({addTodo}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(AddScreen);
