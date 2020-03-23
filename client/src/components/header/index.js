import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

function Header() {
  return (
    <header>
      <nav>
        <ul className="header">
          <li className="nav-item">
            <Link to="/">Add</Link>
          </li>
          <li className="nav-item">
            <Link to="/update">Update</Link>
          </li>
          <li className="nav-item">
            <Link to="/delete">Delete</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
