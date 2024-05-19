import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, editCategory, deleteCategory } from '../store/categoriesSlice';
import { selectCategories } from '../store/selectors';

const CategoryManager = () => {
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();
  const [newCategoryName, setNewCategoryName] = useState('');
  const [editCategoryName, setEditCategoryName] = useState('');
  const [categoryIdBeingEdited, setCategoryIdBeingEdited] = useState(null);

  const handleAddCategory = () => {
    if (newCategoryName) {
      const newCategory = { id: Date.now().toString(), name: newCategoryName };
      dispatch(addCategory(newCategory));
      setNewCategoryName('');
    }
  };

  const handleEditCategory = (id, name) => {
    setCategoryIdBeingEdited(id);
    setEditCategoryName(name);
  };

  const handleSaveEdit = (id) => {
    dispatch(editCategory({ id, newCategory: { id, name: editCategoryName } }));
    setCategoryIdBeingEdited(null);
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
            {categoryIdBeingEdited === category.id ? (
              <div>
                <input 
                  type="text" 
                  value={editCategoryName} 
                  onChange={e => setEditCategoryName(e.target.value)} 
                  placeholder="Edit category name" 
                />
                <button onClick={() => handleSaveEdit(category.id)}>Save</button>
                <button onClick={() => setCategoryIdBeingEdited(null)}>Cancel</button>
              </div>
            ) : (
              <div>
                {category.name}
                <div>
                  <button onClick={() => handleEditCategory(category.id, category.name)}>Edit</button>
                  <button onClick={() => handleDeleteCategory(category.id)}>Delete</button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryManager;




