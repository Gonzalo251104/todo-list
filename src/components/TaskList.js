import React from 'react';
import Task from './Task';

function TaskList({ tasks, toggleTask, removeTask }) {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <Task 
          key={task.id} 
          task={task} 
          toggleTask={toggleTask} 
          removeTask={removeTask} 
        />
      ))}
    </div>
  );
}

export default TaskList;