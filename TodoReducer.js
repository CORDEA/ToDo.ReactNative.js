import Item from "./Item";
import uuid from "uuid/v4";

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
            const item = new Item(uuid(), title, description);
            return {...state, addTodoError: null, list: list.concat(item)};
        case 'CHANGE_TODO_STATE':
            const {key, completed} = action.payload;
            const newList = list.slice();
            newList.find(item => item.key === key).completed = completed;
            return {...state, list: newList};
        case 'CHANGE_TODO_VISIBILITY':
            return {...state, showCompletedTodo: action.payload};
        default:
            return state;
    }
};

export default todoReducer;
