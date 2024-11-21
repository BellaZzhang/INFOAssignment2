import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const Sidebar = () => {
  const { uncompletedCount } = useContext(TaskContext);

  return (
    <nav>
      <ul>
        <li>
          <img src="assets/inbox_icon.png" alt="Inbox" />
          <span className="text">Inbox <span className="count">{uncompletedCount}</span></span>
        </li>
        <li>
          <img src="assets/calendar_icon.png" alt="Calendar" />
          <span className="text">Today</span>
        </li>
        <li>
          <img src="assets/upcoming_icon.png" alt="Upcoming" />
          <span className="text">Upcoming</span>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
