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
                    onPressItem={() => {
                        this.props.addTodo(this.state.text);
                        this.setState({text: ''})
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
