import Item from "./Item";
import uuid from "uuid/v4";

const InitialState = {
    addTodoError: null,
    list: [],
};

const todoReducer = (state = InitialState, action) => {
    const {list} = state;
    switch (action.type) {
        case 'ADD_TODO':
            const {title, description} = action.payload;
            const item = new Item(uuid(), title, description);
            return {addTodoError: null, list: list.concat(item)};
        case 'COMPLETE_TODO':
            const key = action.payload;
            list.find(item => item.key === key).completed = true;
            return state;
        default:
            return state;
    }
};

export default todoReducer;
