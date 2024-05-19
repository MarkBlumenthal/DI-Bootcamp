import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TaskList from './components/TaskList';
import CategorySelector from './components/CategorySelector';
import CategoryManager from './components/CategoryManager';
import { addCategory } from './store/categoriesSlice';
import './index.css';

const App = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    // Adding some initial categories for testing
    dispatch(addCategory({ id: '1', name: 'Work' }));
    dispatch(addCategory({ id: '2', name: 'Personal' }));
  }, [dispatch]);

  return (
    <div className="container">
      <h1>Productivity Tracker</h1>
      <CategoryManager />
      <CategorySelector selectedCategoryId={selectedCategoryId} setSelectedCategoryId={setSelectedCategoryId} />
      {selectedCategoryId && <TaskList categoryId={selectedCategoryId} />}
    </div>
  );
};

export default App;










