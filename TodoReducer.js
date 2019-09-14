import {combineReducers} from "redux";

const InitialState = {
    list: [],
};

const todoReducer = (state = InitialState, action) => {
    return state
};

export default combineReducers({todo: todoReducer})
