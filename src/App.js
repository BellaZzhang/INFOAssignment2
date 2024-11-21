import React from 'react';
import TaskProvider from './context/TaskContext';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import TaskList from './components/TaskList';
import './styles.css';

function App() {
  return (
    <TaskProvider>
      <div className="app">
        <Header />
        <div className="content">
          <Sidebar />
          <TaskList />
        </div>
      </div>
    </TaskProvider>
  );
}

export default App;
