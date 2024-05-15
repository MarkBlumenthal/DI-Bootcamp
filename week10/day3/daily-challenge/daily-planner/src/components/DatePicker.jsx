import React from 'react';
import { useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../index.css'; // Ensure the CSS is imported

const Calendar = ({ selectedDate, onDateChange }) => {
  const tasks = useSelector(state => state.tasks);

  const highlightDatesWithTasks = date => {
    const dateString = date.toISOString().split('T')[0];
    const hasTask = Boolean(tasks[dateString]);
    console.log(`Checking date: ${dateString}, has tasks: ${hasTask}`);
    return hasTask ? 'highlight' : '';
  };

  return (
    <DatePicker
      selected={selectedDate}
      onChange={onDateChange}
      inline
      dayClassName={highlightDatesWithTasks}
    />
  );
};

export default Calendar;





