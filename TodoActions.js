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

export const changeTodoVisibility = state => (
    {
        type: 'CHANGE_TODO_VISIBILITY',
        payload: state
    }
);

export const deleteTodo = key => (
    {
        type: 'DELETE_TODO',
        payload: key,
    }
);
