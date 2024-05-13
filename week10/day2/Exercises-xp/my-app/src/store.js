import { createStore } from 'redux';

const initialState = {
  todos: []
};

function reducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          todos: [...state.todos, { id: state.todos.length, content: action.payload.content, completed: false }]
        };
      case 'TOGGLE_TODO':
        return {
          ...state,
          todos: state.todos.map(todo =>
            todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
          )
        };
      case 'EDIT_TODO':
        return {
          ...state,
          todos: state.todos.map(todo =>
            todo.id === action.payload.id ? { ...todo, content: action.payload.content } : todo
          )
        };
      case 'REMOVE_TODO':
        return {
          ...state,
          todos: state.todos.filter(todo => todo.id !== action.payload.id)
        };
      default:
        return state;
    }
  }
  

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducer, enhancer);

export default store;




