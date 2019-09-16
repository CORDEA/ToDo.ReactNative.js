import {Image, StyleSheet, TouchableNativeFeedback, View} from "react-native";
import React from "react";
import Menu from "react-native-material-menu";

export default class MainMenu extends React.PureComponent {
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
