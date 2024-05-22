import React, { useState } from 'react';
import { Todo } from '../types';
import { List } from './List';

export const TodoApp: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = () => {
        const newTodo: Todo = {
            id: todos.length + 1,
            text: `Todo ${new Date().toLocaleString()}`
        };
        setTodos([...todos, newTodo]);
    };

    return (
        <div>
            <h1>Todo List</h1>
            <button onClick={addTodo}>Add Todo</button>
            <List<Todo>
                items={todos}
                renderItem={(todo) => (
                    <div>
                        {todo.id}: {todo.text}
                    </div>
                )}
            />
        </div>
    );
};
