// src/components/DatePicker.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDate } from '../redux/actions/dateActions'; // Ensure this action is correctly defined

const DatePicker = () => {
  const date = useSelector(state => state.date); // Access date from Redux state
  const dispatch = useDispatch(); // Provides the Redux dispatch function

  const handleDateChange = (e) => {
    dispatch(setDate(e.target.value)); // Dispatch action on date change
  };

  return (
    <input
      type="date"
      value={date}
      onChange={handleDateChange}
    />
  );
};

export default DatePicker;

