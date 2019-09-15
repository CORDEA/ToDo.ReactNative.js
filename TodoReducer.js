import {combineReducers} from "redux";

const InitialState = {
    addTodoError: null,
    list: [],
};

const todoReducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            const {list} = state;
            return {addTodoError: null, list: list.concat(action.payload)};
        default:
            return state;
    }
};

export default combineReducers({todo: todoReducer})
