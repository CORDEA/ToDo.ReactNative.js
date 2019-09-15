export const addTodo = text => (
    {
        type: 'ADD_TODO',
        payload: text,
    }
);

export const completeTodo = key => (
    {
        type: 'COMPLETE_TODO',
        payload: key
    }
);
