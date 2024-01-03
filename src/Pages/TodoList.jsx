import React, { useState } from 'react';
import UpdeteData from './UpdeteData';

const TodoList = () => {
  const [selectedTodo, setSelectedTodo] = useState(null);

  const handleUpdate = (updatedTodo) => {
    // Handle the updated todo in your state or data management logic
    console.log('Todo Updated:', updatedTodo);
    setSelectedTodo(null); // Reset the selected todo after updating
  };

  return (
    <div>
      {/* Render your todo list here */}
      {/* Each todo item should have a button or link to trigger the update */}
      {todos.map((todo) => (
        <div key={todo._id}>
          <p className='text-green-700'>{todo.name}</p>
          <button onClick={() => setSelectedTodo(todo._id)}>Update</button>
        </div>
      ))}

      {/* Conditionally render the UpdateTodo component when a todo is selected */}
      {selectedTodo && <UpdeteData todoId={selectedTodo} onUpdate={handleUpdate} />}
    </div>
  );
};

export default TodoList;
