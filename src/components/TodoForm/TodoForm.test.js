import { render, fireEvent } from '@testing-library/react';
import { ADD_TODO } from '../../redux/types/actionTypes';
import TodoForm from './TodoForm';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
    useDispatch: () => mockDispatch,
}));

describe('TodoForm tests', () => {
    it('should dispatch action for valid todoText', () => {
        const { getByTestId } = render(<TodoForm />);

        fireEvent.change(getByTestId('todoText'), {
            target: { value: 'this is a new todo' },
        });
        fireEvent.submit(getByTestId('addTodoForm'));

        expect(mockDispatch).toHaveBeenCalledWith({
            type: ADD_TODO,
            payload: 'this is a new todo',
        });
    });

    it('should not dispatch action for empty text', () => {
        const { getByTestId } = render(<TodoForm />);

        fireEvent.change(getByTestId('todoText'), {
            target: { value: '' },
        });
        fireEvent.submit(getByTestId('addTodoForm'));

        expect(mockDispatch).toHaveBeenCalledTimes(0);
    });
});
