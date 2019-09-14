import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {createStore} from "redux";
import todoReducer from './TodoReducer';
import {Provider} from "react-redux";
import Main from "./Main";

const store = createStore(todoReducer);

export default function App() {
    return (
        <Provider store={store}>
            <SafeAreaView style={styles.container}>
                <Main/>
            </SafeAreaView>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
