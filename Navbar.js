import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">📚 Online Bookstore</div>
      <ul className="nav-links">
        <li><a href="#add">Add Book</a></li>
        <li><a href="#search">Search Book</a></li>
        <li><a href="#update">Update Book</a></li>
        <li><a href="#list">Book List</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
