import React, { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskItem = ({ task, onComplete }) => {
  const { updateTask, deleteTask } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleBlur = () => {
    setIsEditing(false);
    if (newText.trim()) updateTask(task.id, newText);
  };

  return (
    <li>
      <input type="checkbox" checked={task.completed} onChange={onComplete} />
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onBlur={handleBlur}
          autoFocus
        />
      ) : (
        <span onClick={() => setIsEditing(true)}>{task.text}</span>
      )}
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default TaskItem;
