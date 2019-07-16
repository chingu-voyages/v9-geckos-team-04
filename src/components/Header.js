import React from "react";
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="title">Vext</h1>
      <nav className="navbar">
        <ul>
          <li><a href="#feature">Features</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
    </header>
  )
}


export default Header;
