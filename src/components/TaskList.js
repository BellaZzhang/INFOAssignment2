import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import AddTask from './AddTask';

const TaskList = () => {
  const { tasks, completeTask } = useContext(TaskContext);

  return (
    <main id="main-nav">
      <h1>Inbox</h1>
      <ul>
        {tasks.map(task => (
          !task.completed && (
            <li key={task.id}>
              <input type="checkbox" onChange={() => completeTask(task.id)} />
              {task.text}
            </li>
          )
        ))}
      </ul>
      <AddTask />
    </main>
  );
};

export default TaskList;
