import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions';

const AddTodo = ({ dispatch }) => {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    if (input.trim() !== '') {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter a new todo"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="button" onClick={handleSubmit}>
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default connect()(AddTodo);



