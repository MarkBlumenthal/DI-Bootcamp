// src/App.js

import React from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import DatePicker from './components/DatePicker';

const App = () => (
  <div>
    <DatePicker />
    <TaskForm />
    <TaskList />
  </div>
);

export default App;



