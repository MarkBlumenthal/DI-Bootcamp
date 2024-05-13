// src/redux/actions/dateActions.js

export const SET_DATE = 'SET_DATE';

export const setDate = date => ({
  type: SET_DATE,
  payload: date
});

