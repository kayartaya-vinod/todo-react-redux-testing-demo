import { fireEvent, render } from '@testing-library/react';
import { DELETE_TODO, TODO_COMPLETE } from '../../redux/types/actionTypes';
import Todo from './Todo';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
    useDispatch: () => mockDispatch,
}));

describe('Todo tests', () => {
    it('should render Todo component', () => {
        const { getByText } = render(<Todo todoText='Write test case' />);
        expect(getByText(/write test case/i)).toBeInTheDocument();
    });

    it('should dispatch DELETE_TODO action on clicking the button', () => {
        const { getByTestId } = render(
            <Todo id={1122} todoText='Write test case' />
        );
        fireEvent.click(getByTestId('btnDeleteTodo'));
        expect(mockDispatch).toHaveBeenCalledWith({
            type: DELETE_TODO,
            payload: 1122,
        });
    });

    it('should dispatch TODO_COMPLETE on clicking the todo text', () => {
        const { getByTestId } = render(
            <Todo id={1122} todoText='Write test case' />
        );
        fireEvent.click(getByTestId('divTodoText'));
        expect(mockDispatch).toHaveBeenCalledWith({
            type: TODO_COMPLETE,
            payload: 1122,
        });
    });
});
