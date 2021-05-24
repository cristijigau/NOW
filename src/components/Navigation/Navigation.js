import React from 'react';

import logo from './assets/logo.svg';

const navItems = ['Now', 'How to ride', 'How to drive', 'Features'];

export default function Navigation({ current, setCurrent }) {
  const handleCurrent = ({ target: { name } }) => {
    setCurrent(name);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <a className="navbar-brand" href="#">
        <img src={logo} className="App-logo" alt="logo" />
      </a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          {navItems.map((item, index) => (
            <li
              className={`nav-item ${current === item ? 'active' : ''}`}
              key={index}
            >
              <a
                className="nav-link"
                href={`#${item}`}
                name={item}
                onClick={handleCurrent}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-nav ml-auto flex-nowrap flex-row">
        <span className="get-the-app navbar-text collapse">Get the app</span>
        <div className="appstore"></div>
        <div className="play-market"></div>
      </div>
    </nav>
  );
}
