import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/actionCreators/todoActionCreators';
export default function TodoForm() {
    const [todoText, setTodoText] = useState('');
    const dispatch = useDispatch();

    const changeHandler = ({ target: { value } }) => {
        setTodoText(value);
    };

    const submitHandler = (evt) => {
        evt.preventDefault();
        if (!todoText) return;
        dispatch(addTodo(todoText));
        setTodoText('');
    };
    return (
        <>
            <h3>Add a new todo:</h3>

            <form onSubmit={submitHandler} data-testid='addTodoForm'>
                <input
                    data-testid='todoText'
                    type='text'
                    value={todoText}
                    onChange={changeHandler}
                    className='form-control'
                    placeholder='enter what to do...'
                    autoFocus
                />
            </form>
        </>
    );
}
