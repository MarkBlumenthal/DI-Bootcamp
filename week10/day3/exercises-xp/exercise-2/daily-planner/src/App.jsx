// src/App.jsx
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import DatePicker from './components/DatePicker';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  return (
    <Provider store={store}>
      <div className="container">
        <h1 className="my-4">Daily Planner</h1>
        <DatePicker selectedDate={selectedDate} onDateChange={setSelectedDate} />
        <TaskForm
          date={selectedDate}
          taskToEdit={taskToEdit}
          onSave={() => setTaskToEdit(null)}
        />
        <TaskList date={selectedDate} onEdit={setTaskToEdit} />
      </div>
    </Provider>
  );
};

export default App;


