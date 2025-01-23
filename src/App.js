import React, { useState, useEffect } from 'react';
import Visualizer from './components/Visualizer';
import Visualizer2 from './components/Visualizer2'; // For Insertion Sort
import Navbar from './components/Navbar';
import './App.css'; 

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [algorithm, setAlgorithm] = useState('bubbleSort');

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    const handleAlgorithmChange = (selectedAlgorithm) => {
        setAlgorithm(selectedAlgorithm);
    };

    return (
        <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
            <Navbar 
                toggleDarkMode={toggleDarkMode} 
                isDarkMode={isDarkMode} 
                onAlgorithmChange={handleAlgorithmChange}
            />
            {algorithm === 'bubbleSort' && <Visualizer />}
            {algorithm === 'insertionSort' && <Visualizer2 />}
        </div>
    );
}

export default App;

