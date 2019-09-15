const InitialState = {
    addTodoError: null,
    list: [],
};

const todoReducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            const {title, description} = action.payload;
            const {list} = state;
            return {addTodoError: null, list: list.concat({key: title, value: description})};
        default:
            return state;
    }
};

export default todoReducer;
