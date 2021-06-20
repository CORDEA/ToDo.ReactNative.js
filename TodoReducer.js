import Item from "./Item";
import { v4 as uuidv4 } from "uuid";

const InitialState = {
    addTodoError: null,
    showCompletedTodo: true,
    list: [],
};

const todoReducer = (state = InitialState, action) => {
    const {list} = state;
    switch (action.type) {
        case 'ADD_TODO':
            const {title, description} = action.payload;
            const item = new Item(uuidv4(), title, description);
            return {...state, addTodoError: null, list: list.concat(item)};
        case 'CHANGE_TODO_STATE':
            const {key, completed} = action.payload;
            const newList = list.slice();
            newList.find(item => item.key === key).completed = completed;
            return {...state, list: newList};
        case 'CHANGE_TODO_VISIBILITY':
            return {...state, showCompletedTodo: action.payload};
        case 'DELETE_TODO':
            return {...state, list: list.filter(item => item.key !== action.payload).slice()};
        default:
            return state;
    }
};

export default todoReducer;
