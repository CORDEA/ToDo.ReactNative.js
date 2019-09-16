export const addTodo = text => (
    {
        type: 'ADD_TODO',
        payload: text,
    }
);

export const completeTodo = state => (
    {
        type: 'CHANGE_TODO_STATE',
        payload: state
    }
);
