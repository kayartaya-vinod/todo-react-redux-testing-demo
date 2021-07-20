import React from 'react';
import { useDispatch } from 'react-redux';
import {
    deleteTodo,
    toggleTodoComplete,
} from '../../redux/actionCreators/todoActionCreators';

export default function Todo({ todoText, finished, id }) {
    const dispatch = useDispatch();

    const toggleTodoState = (todoId) => {
        dispatch(toggleTodoComplete(todoId));
    };

    const removeTodo = (todoId) => {
        dispatch(deleteTodo(todoId));
    };

    return (
        <>
            <div className='row'>
                <div className='col-1'>
                    <button
                        data-testid='btnDeleteTodo'
                        onClick={() => removeTodo(id)}
                        className='btn btn-outline-danger'
                    >
                        &times;
                    </button>
                </div>
                <div className='col'>
                    <div
                        data-testid='divTodoText'
                        style={{
                            textDecoration: finished && 'line-through',
                            cursor: 'pointer',
                        }}
                        onClick={() => toggleTodoState(id)}
                    >
                        {todoText}
                    </div>
                </div>
            </div>
        </>
    );
}
