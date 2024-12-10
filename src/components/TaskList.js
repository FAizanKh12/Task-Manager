import React from 'react';
import { FaCheckCircle, FaTrashAlt } from 'react-icons/fa';

const TaskList = ({ tasks, deleteTask, toggleComplete }) => {
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <div key={index} className={`task-item ${task.completed ? 'completed' : ''}`}>
          <span onClick={() => toggleComplete(index)}>{task.text}</span>
          <button onClick={() => deleteTask(index)}>
            <FaTrashAlt />
          </button>
          <span onClick={() => toggleComplete(index)}>
            {task.completed ? <FaCheckCircle /> : 'Mark Complete'}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
