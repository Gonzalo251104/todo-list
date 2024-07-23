import React from 'react';

function Task({ task, toggleTask, removeTask }) {
  return (
    <div className="task">
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={() => toggleTask(task.id)} 
      />
      <span className={task.completed ? 'completed' : ''}>{task.text}</span>
      <button onClick={() => removeTask(task.id)}>X</button>
    </div>
  );
}

export default Task;