import React from 'react';
import './Navbar.css';

const Navbar = ({ toggleDarkMode, isDarkMode, onAlgorithmChange }) => {
    return (
        <nav className={`navbar ${isDarkMode ? 'dark-mode' : ''}`}>
            <h1>Sorting Visualizer</h1>
            <div className="navbar-buttons">
                <div className="dropdown">
                    <button className="navbar-button dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Choose Algorithm
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <button className="dropdown-item" onClick={() => onAlgorithmChange('bubbleSort')}>Bubble Sort</button>
                        <button className="dropdown-item" onClick={() => onAlgorithmChange('insertionSort')}>Insertion Sort</button>
                    </div>
                </div>
                <button className="navbar-button" onClick={toggleDarkMode}>
                    {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;

