import React from 'react';
import { useSelector } from 'react-redux';
import { selectCategories } from '../store/selectors';

const CategorySelector = ({ selectedCategoryId, setSelectedCategoryId }) => {
  const categories = useSelector(selectCategories);

  return (
    <div>
      <h2>Categories</h2>
      <select value={selectedCategoryId || ''} onChange={e => setSelectedCategoryId(e.target.value)}>
        <option value="">Select a category</option>
        {categories.map(category => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelector;







