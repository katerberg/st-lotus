import React from 'react';
import {Link} from 'react-router-dom';
import './sidebar.scss';

function Sidebar() {
  return (
    <header className="sidebar">
      <div className="profile">
        <Link to="/">
          <img alt="St Lotus logo"
            src={`${process.env.PUBLIC_URL}/logo-colour-circle-288.png`}
          />
        </Link>
      </div>
      <div className="list-group">
        <Link className="list-group-item primary"
          to="/"
        >{'Home'}</Link>
        <Link className="list-group-item"
          to="/rules"
        >{'Rules'}</Link>
      </div>
    </header>
  );
}

export default Sidebar;
