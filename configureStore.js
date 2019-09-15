import {AsyncStorage} from "react-native";
import {combineReducers, createStore} from "redux";
import TodoReducer from "./TodoReducer";
import persistReducer from 'redux-persist/lib/persistReducer';
import persistStore from 'redux-persist/lib/persistStore';

const rootPersistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const rootReducer = combineReducers({
    todo: TodoReducer
});

const reducer = persistReducer(rootPersistConfig, rootReducer);

export default () => {
    const store = createStore(reducer);
    const persistor = persistStore(store);
    return {store, persistor}
}
