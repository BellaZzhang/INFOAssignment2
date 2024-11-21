import React, { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContext';

const AddTask = () => {
  const { addTask } = useContext(TaskContext);
  const [task, setTask] = useState('');
  
  const handleAddTask = () => {
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <div className="add-task">
      <input
        type="text"
        placeholder="Add a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
