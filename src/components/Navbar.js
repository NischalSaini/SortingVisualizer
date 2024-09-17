import React from 'react';
import './Navbar.css';

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
    return (
        <nav className={`navbar ${isDarkMode ? 'dark-mode' : ''}`}>
            <h1>Sorting Visualizer</h1>
            <div className="navbar-buttons">
                <button className="navbar-button" onClick={toggleDarkMode}>
                    {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
