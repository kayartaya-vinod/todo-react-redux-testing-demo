import {
    ADD_TODO,
    DELETE_TODO,
    FETCH_TODOS,
    TODO_COMPLETE,
} from '../types/actionTypes';

export const fetchTodos = () => {
    return { type: FETCH_TODOS };
};

export const addTodo = (todoText) => {
    return { type: ADD_TODO, payload: todoText };
};

export const deleteTodo = (id) => {
    return { type: DELETE_TODO, payload: id };
};

export const toggleTodoComplete = (id) => {
    return { type: TODO_COMPLETE, payload: id };
};
