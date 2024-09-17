import React, { useState, useEffect } from 'react';
import Visualizer from './components/Visualizer';
import Navbar from './components/Navbar';
import './App.css'; 

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Toggle dark mode
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    // Apply dark mode class to body
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    return (
        <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
            <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
            <Visualizer />
        </div>
    );
}

export default App;
