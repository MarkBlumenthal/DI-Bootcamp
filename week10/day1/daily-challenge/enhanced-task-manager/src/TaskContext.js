import React, { createContext, useReducer, useRef } from 'react';

export const TaskContext = createContext();

const initialState = {
  tasks: [],
  filter: 'ALL'  
};

function taskReducer(state, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, { id: Date.now(), text: action.text, completed: false }] };
    case 'REMOVE_TASK':
      return { ...state, tasks: state.tasks.filter(task => task.id !== action.id) };
    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task => task.id === action.id ? { ...task, completed: !task.completed } : task)
      };
    case 'EDIT_TASK':  
      return {
        ...state,
        tasks: state.tasks.map(task => task.id === action.id ? { ...task, text: action.text } : task)
      };
    case 'SET_FILTER':  
      return { ...state, filter: action.filter };
    default:
      return state;
  }
}

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const editRef = useRef(null);  

  const addTask = text => dispatch({ type: 'ADD_TASK', text });
  const removeTask = id => dispatch({ type: 'REMOVE_TASK', id });
  const toggleTask = id => dispatch({ type: 'TOGGLE_TASK', id });
  const editTask = (id, text) => dispatch({ type: 'EDIT_TASK', id, text });
  const setFilter = filter => dispatch({ type: 'SET_FILTER', filter });

  return (
    <TaskContext.Provider value={{ tasks: state.tasks, filter: state.filter, addTask, removeTask, toggleTask, editTask, setFilter, editRef }}>
      {children}
    </TaskContext.Provider>
  );
};

