// src/redux/reducers/rootReducer.js

import { combineReducers } from 'redux';
import taskReducer from './taskReducer';
import dateReducer from './dateReducer'; // Include this if you've created a dateReducer

const rootReducer = combineReducers({
  tasks: taskReducer,
  date: dateReducer // Include this if you've implemented the date handling
});

export default rootReducer;
