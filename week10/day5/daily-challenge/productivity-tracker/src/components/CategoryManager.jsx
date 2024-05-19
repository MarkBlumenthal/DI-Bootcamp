import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, editCategory, deleteCategory } from '../store/categoriesSlice';
import { selectCategories } from '../store/selectors';

const CategoryManager = () => {
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();
  const [newCategoryName, setNewCategoryName] = useState('');
  const [editCategoryName, setEditCategoryName] = useState('');

  const handleAddCategory = () => {
    if (newCategoryName) {
      const newCategory = { id: Date.now().toString(), name: newCategoryName };
      dispatch(addCategory(newCategory));
      setNewCategoryName('');
    }
  };

  const handleEditCategory = (id) => {
    dispatch(editCategory({ id, newCategory: { id, name: editCategoryName } }));
    setEditCategoryName('');
  };

  const handleDeleteCategory = (id) => {
    dispatch(deleteCategory(id));
  };

  return (
    <div>
      <h2>Manage Categories</h2>
      <input 
        type="text" 
        value={newCategoryName} 
        onChange={e => setNewCategoryName(e.target.value)} 
        placeholder="New category name" 
      />
      <button onClick={handleAddCategory}>Add Category</button>
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            {category.name}
            <input 
              type="text" 
              value={editCategoryName} 
              onChange={e => setEditCategoryName(e.target.value)} 
              placeholder="Edit category name" 
            />
            <button onClick={() => handleEditCategory(category.id)}>Edit</button>
            <button onClick={() => handleDeleteCategory(category.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryManager;
