import React from 'react';
import {Link} from 'react-router-dom';
import './sidebar.scss';

function Sidebar() {
  return (
    <header className="sidebar">
      <div className="profile">
        <Link to="/" />
      </div>
      <div className="list-group">
        <Link className="list-group-item primary"
          to="/"
        >{'Home'}</Link>
        <Link className="list-group-item"
          to="/rules"
        >{'Rules'}</Link>
        <Link className="list-group-item"
          to="/players"
        >{'Players'}</Link>
        <Link className="list-group-item"
          to="/9th-seed"
        >{'9th Seed Bot'}</Link>
      </div>
    </header>
  );
}

export default Sidebar;
