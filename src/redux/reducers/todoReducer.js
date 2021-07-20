import {
    ADD_TODO,
    DELETE_TODO,
    FETCH_TODOS,
    TODO_COMPLETE,
} from '../types/actionTypes';

const initialState = [
    { id: 1, todoText: 'Create React App', finished: true },
    { id: 2, todoText: 'Add redux reducer', finished: true },
    { id: 3, todoText: 'Add redux action creators', finished: true },
    { id: 4, todoText: 'Create components', finished: true },
    { id: 5, todoText: 'Write tests', finished: false },
    { id: 6, todoText: 'Run tests', finished: false },
];

function todoReducer(state = initialState, action = {}) {
    switch (action.type) {
        case ADD_TODO: {
            const currentState = [...state];

            const newId =
                currentState.length > 0
                    ? Math.max(...currentState.map((td) => td.id)) + 1
                    : 1;
            currentState.push({
                id: newId,
                todoText: action.payload,
                finished: false,
            });
            return [...currentState];
        }
        case DELETE_TODO: {
            const currentState = [...state];
            const index = currentState.findIndex(
                (td) => td.id === action.payload
            );
            if (index !== -1) {
                currentState.splice(index, 1);
            }
            return [...currentState];
        }
        case TODO_COMPLETE: {
            const currentState = [...state];
            const index = currentState.findIndex(
                (td) => td.id === action.payload
            );
            if (index !== -1) {
                currentState[index].finished = !currentState[index].finished;
            }
            return [...currentState];
        }
        case FETCH_TODOS: {
            return state;
        }
        default: {
            return state;
        }
    }
}

export default todoReducer;
