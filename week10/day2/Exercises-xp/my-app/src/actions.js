export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const EDIT_TODO = 'EDIT_TODO';

export function addTodo(content) {
    return { type: ADD_TODO, payload: { content } };
}

export function toggleTodo(id) {
    return { type: TOGGLE_TODO, payload: { id } };
}

export function removeTodo(id) {
    return { type: REMOVE_TODO, payload: { id } };
}

export function editTodo(id, content) {
    return { type: EDIT_TODO, payload: { id, content } };
  }