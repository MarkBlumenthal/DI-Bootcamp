// src/redux/store.js
import { createStore, combineReducers } from 'redux';
import taskReducer from './reducers/taskReducer';

const rootReducer = combineReducers({
  // Ensure taskReducer is properly added here
  tasks: taskReducer
});

const store = createStore(rootReducer);
export default store;


