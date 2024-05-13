// src/redux/reducers/taskReducer.js

const initialState = {
    tasks: []  // Ensure this is an array
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
      default:
        return state;
    }
  };
  
  export default taskReducer;
  
  

