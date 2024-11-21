import React, { createContext, useState, useEffect } from 'react';

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  
  // Load tasks from localStorage
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);
  
  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    const newTask = { id: Date.now(), text: task, completed: false };
    setTasks([...tasks, newTask]);
  };

  const completeTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: true } : task));
  };

  const updateTask = (id, newText) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, text: newText } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const uncompletedCount = tasks.filter(task => !task.completed).length;
  const totalCount = tasks.length;

  return (
    <TaskContext.Provider value={{ tasks, addTask, completeTask, updateTask, deleteTask, uncompletedCount, totalCount }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
