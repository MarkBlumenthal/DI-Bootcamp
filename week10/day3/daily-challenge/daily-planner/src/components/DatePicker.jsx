import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = ({ selectedDate, onDateChange }) => {
  return (
    <DatePicker selected={selectedDate} onChange={onDateChange} inline />
  );
};

export default Calendar;
