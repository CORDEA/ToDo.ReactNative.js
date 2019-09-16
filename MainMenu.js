import {Image, StyleSheet, TouchableNativeFeedback, View} from "react-native";
import React from "react";
import Menu, {MenuItem} from "react-native-material-menu";
import {bindActionCreators} from "redux";
import {changeTodoVisibility} from "./TodoActions";
import {connect} from "react-redux";

class MainMenu extends React.PureComponent {
    _menu = null;

    render() {
        return (
            <Menu
                ref={(ref) => this._menu = ref}
                button={
                    <TouchableNativeFeedback
                        background={TouchableNativeFeedback.SelectableBackgroundBorderless()}
                        onPress={() => {
                            this._menu.show();
                        }}>
                        <View style={styles.menu}>
                            <Image
                                source={require('./img/baseline_more_vert_black_24pt.png')}
                            />
                        </View>
                    </TouchableNativeFeedback>
                }>
                <MenuItem onPress={() => {
                    this.props.changeTodoVisibility(!this.props.showCompletedTodo);
                    this._menu.hide()
                }}>Show completed todo</MenuItem>
            </Menu>
        )
    }
}

const styles = StyleSheet.create({
    menu: {
        height: 24,
        width: 24,
        marginEnd: 16,
    },
});

const mapStateToProps = (state) => {
    const {todo: {showCompletedTodo}} = state;
    return {showCompletedTodo}
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({changeTodoVisibility}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);
