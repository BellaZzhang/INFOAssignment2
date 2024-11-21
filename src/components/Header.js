import React, { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContext';

const Header = () => {
  const { uncompletedCount, totalCount } = useContext(TaskContext);
  const [search, setSearch] = useState('');

  return (
    <header>
      <div id="header-left-side">
        <img src="assets/menu_icon.png" alt="Menu" />
        <div id="quick-find-container">
          <img id="search-icon" src="assets/search_icon.png" alt="Search" />
          <input
            id="quick-find"
            type="text"
            placeholder="Quick Find"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div id="header-right-side">
        <p>{totalCount}/{uncompletedCount}</p>
      </div>
    </header>
  );
};

export default Header;
