// src/redux/reducers/dateReducer.js

import { SET_DATE } from '../actions/dateActions';

const initialState = {
  date: new Date().toISOString().split('T')[0] // Provides an initial state
};

const dateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATE:
      return { ...state, date: action.payload };
    default:
      return state;
  }
};

export default dateReducer;

