import {combineReducers} from "redux";

const InitialState = {
    addTodoError: null,
    list: [],
};

const todoReducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            const {list} = state;
            list.push(action.payload);
            return {addTodoError: null, list};
        default:
            return state;
    }
};

export default combineReducers({todo: todoReducer})
