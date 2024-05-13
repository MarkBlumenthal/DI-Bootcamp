import './App.css';
import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const App = () => (
  <div className="container">
    <h1 className="text-center mt-5">Todo List</h1>
    <AddTodo />
    <TodoList />
  </div>
);

export default App;



