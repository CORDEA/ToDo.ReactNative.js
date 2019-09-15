import React from 'react';
import {StyleSheet} from 'react-native';
import {Provider} from "react-redux";
import MainScreen from "./MainScreen";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import AddScreen from "./AddScreen";
import configureStore from "./configureStore";
import {PersistGate} from 'redux-persist/lib/integration/react';

const {store, persistor} = configureStore();

const mainNavigator = createStackNavigator({
    MainScreen: {screen: MainScreen},
    AddScreen: {screen: AddScreen},
});

const Navigation = createAppContainer(mainNavigator);

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Navigation/>
            </PersistGate>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
