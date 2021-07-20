import { render } from '@testing-library/react';
import TodoList from './TodoList';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('TodoList tests', () => {
    const initialState = {
        // todos is the reducerName in the rootReducer.js
        // and the value for it is the default state
        todos: [
            { id: 1, todoText: 'Create React App', finished: true },
            { id: 2, todoText: 'Add redux reducer', finished: true },
            { id: 6, todoText: 'Run tests', finished: false },
        ],
    };
    const mockStore = configureStore();

    it('should render TodoList component', () => {
        let store = mockStore(initialState);
        const { getByText } = render(
            <Provider store={store}>
                <TodoList />
            </Provider>
        );
        expect(getByText(/Create React App/i)).toBeInTheDocument();
        expect(getByText(/Add redux reducer/i)).toBeInTheDocument();
        expect(getByText(/Run tests/i)).toBeInTheDocument();
    });

    it('should render empty TodoList component', () => {
        let store = mockStore({ todos: [] });
        const { getByTestId } = render(
            <Provider store={store}>
                <TodoList />
            </Provider>
        );
        expect(getByTestId('todoList')).toBeInTheDocument();
    });
});
