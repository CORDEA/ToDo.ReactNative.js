import Item from "./Item";
import uuid from "uuid/v4";

const InitialState = {
    addTodoError: null,
    list: [],
};

const todoReducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            const {title, description} = action.payload;
            const {list} = state;
            const item = new Item(uuid(), title, description);
            return {addTodoError: null, list: list.concat(item)};
        default:
            return state;
    }
};

export default todoReducer;
