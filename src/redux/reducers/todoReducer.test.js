import {
    ADD_TODO,
    TODO_COMPLETE,
    DELETE_TODO,
    FETCH_TODOS,
} from '../types/actionTypes';
import todoReducer from './todoReducer';

describe('todoReducer tests', () => {
    it('should return default state', () => {
        const state = todoReducer([], {});
        expect(state).toHaveLength(0);
    });

    it('should fetch existing todos', () => {
        const state = todoReducer([], { type: FETCH_TODOS });
        expect(state).toHaveLength(0);
    });

    it('should add the first todo', () => {
        const state = todoReducer([], {
            type: ADD_TODO,
            payload: 'first todo',
        });
        expect(state).toHaveLength(1);
        const { id, todoText, finished } = state[0];
        expect(id).toBe(1);
        expect(finished).toBeFalsy();
        expect(todoText).toBe('first todo');
    });

    it('should add another todo', () => {
        const state = todoReducer([{ id: 12, finished: false }], {
            type: ADD_TODO,
            payload: 'first todo',
        });
        expect(state).toHaveLength(2);
        const { id, todoText, finished } = state[1];
        expect(id).toBe(13);
        expect(finished).toBeFalsy();
        expect(todoText).toBe('first todo');
    });

    it('should mark TODO as complete', () => {
        const state = todoReducer([{ id: 12, finished: false }], {
            type: TODO_COMPLETE,
            payload: 12,
        });
        expect(state).toHaveLength(1);
        const { id, finished } = state[0];
        expect(id).toBe(12);
        expect(finished).toBeTruthy();
    });

    it('should not mark TODO as complete', () => {
        const state = todoReducer([{ id: 12, finished: false }], {
            type: TODO_COMPLETE,
            payload: 22,
        });
        const { finished } = state[0];
        expect(finished).toBeFalsy();
    });
    it('should unmark TODO as complete', () => {
        const state = todoReducer([{ id: 12, finished: true }], {
            type: TODO_COMPLETE,
            payload: 12,
        });
        expect(state).toHaveLength(1);
        const { id, finished } = state[0];
        expect(id).toBe(12);
        expect(finished).toBeFalsy();
    });

    it('should delete TODO', () => {
        const state = todoReducer([{ id: 12, finished: true }], {
            type: DELETE_TODO,
            payload: 12,
        });
        expect(state).toHaveLength(0);
    });

    it('should not delete TODO', () => {
        const state = todoReducer([{ id: 12, finished: true }], {
            type: DELETE_TODO,
            payload: 22,
        });
        expect(state).toHaveLength(1);
    });
});
