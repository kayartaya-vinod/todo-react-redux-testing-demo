import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchTodos } from '../../redux/actionCreators/todoActionCreators';
import Todo from '../Todo/Todo';

export default function TodoList() {
    const todos = useSelector((state) => state.todos);
    useEffect(() => {
        fetchTodos();
    }, []);

    const todosJsx =
        todos && todos.length
            ? todos.map((td) => (
                  <li className='list-group-item' key={td.id}>
                      <Todo {...td} />
                  </li>
              ))
            : null;
    return (
        <>
            <h3>Things to do today...</h3>
            <ul data-testid='todoList' className='list-group'>
                {todosJsx}
            </ul>
        </>
    );
}
