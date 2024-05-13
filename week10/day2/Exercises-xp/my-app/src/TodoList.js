import React, { useState } from 'react';
import { connect } from 'react-redux';
import { toggleTodo, editTodo, removeTodo } from './actions';

const TodoItem = ({ todo, dispatch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.content);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    setEditText(e.target.value);
  };

  const handleSave = () => {
    if (editText.trim() !== '') {
      dispatch(editTodo(todo.id, editText));
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditText(todo.content);
    setIsEditing(false);
  };

  return (
    <li className={`list-group-item ${todo.completed ? 'list-group-item-success' : ''}`}>
      {isEditing ? (
        <div>
          <input
            type="text"
            className="form-control"
            value={editText}
            onChange={handleChange}
            autoFocus
          />
          <button className="btn btn-success btn-sm mr-2" onClick={handleSave}>Save</button>
          <button className="btn btn-secondary btn-sm" onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div>
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.content}
          </span>
          <button className="btn btn-info btn-sm float-right" onClick={handleEdit}>Edit</button>
          <button className="btn btn-secondary btn-sm float-right mr-2" onClick={() => dispatch(toggleTodo(todo.id))}>
            Completed
          </button>
          <button className="btn btn-danger btn-sm float-right mr-2" onClick={() => dispatch(removeTodo(todo.id))}>
            Remove
          </button>
        </div>
      )}
    </li>
  );
};

const TodoList = ({ todos, dispatch }) => (
  <ul className="list-group">
    {todos.map(todo => (
      <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
    ))}
  </ul>
);

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(TodoList);





