import {combineReducers} from "redux";

const todoReducer = (state = {}, action) => {
    return state
};

export default combineReducers({todo: todoReducer})
