// src/redux/reducers/taskReducer.js

const initialState = {
  tasks: []
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((_, index) => index !== action.payload)
      };
    case 'COMPLETE_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task, index) =>
          index === action.payload ? { ...task, completed: !task.completed } : task
        )
      };
    case 'EDIT_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task, index) =>
          index === action.payload.index ? { ...task, ...action.payload.newTaskDetails } : task
        )
      };
    default:
      return state;
  }
};

export default taskReducer; // Ensure it's being exported



  
  

