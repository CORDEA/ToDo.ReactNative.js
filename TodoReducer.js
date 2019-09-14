import {combineReducers} from "redux";

const InitialState = {
    newTodo: '',
    list: [],
};

const todoReducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            const {list} = state;
            list.push(action.payload);
            return {newTodo: "", list};
        default:
            return state;
    }
};

export default combineReducers({todo: todoReducer})
