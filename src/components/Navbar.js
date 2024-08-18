import React from 'react';
import './Navbar.css';

function Navbar({ searchTerm, setSearchTerm }) {
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-title">Character Finder</h1>
        <input
          type="text"
          placeholder="Search characters..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="navbar-search"
        />
      </div>
    </nav>
  );
}

export default Navbar;