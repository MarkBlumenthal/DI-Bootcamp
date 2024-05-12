import React, { useState } from 'react';
import { TaskProvider } from './TaskContext';
import TaskList from './TaskList';

function App() {
  return (
    <TaskProvider>
      <div className="App">
        <h1>Enhanced Task Manager</h1>
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
