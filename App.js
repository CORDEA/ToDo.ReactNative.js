import React from 'react';
import {StyleSheet} from 'react-native';
import {createStore} from "redux";
import todoReducer from './TodoReducer';
import {Provider} from "react-redux";
import MainScreen from "./MainScreen";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import AddScreen from "./AddScreen";

const store = createStore(todoReducer);

const mainNavigator = createStackNavigator({
    MainScreen: {screen: MainScreen},
    AddScreen: {screen: AddScreen},
});

const Navigation = createAppContainer(mainNavigator);

export default function App() {
    return (
        <Provider store={store}>
            <Navigation/>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
