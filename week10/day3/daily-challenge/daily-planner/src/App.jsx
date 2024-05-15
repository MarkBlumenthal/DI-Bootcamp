import React, { useState } from 'react';
import Calendar from './components/DatePicker';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const handleDateChange = date => {
    setSelectedDate(date.toISOString().split('T')[0]);
  };

  return (
    <div>
      <h1>Daily Planner</h1>
      <Calendar selectedDate={new Date(selectedDate)} onDateChange={handleDateChange} />
      <TaskList selectedDate={selectedDate} />
      <AddTask selectedDate={selectedDate} />
    </div>
  );
};

export default App;

