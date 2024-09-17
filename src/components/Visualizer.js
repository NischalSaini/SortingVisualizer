import React, { useState, useEffect } from 'react';
import { bubbleSort } from '../sortingAlgorithms/bubbleSort';
import './h.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Visualizer = () => {
    const [array, setArray] = useState([]);
    const [steps, setSteps] = useState([]);
    const [stepIndex, setStepIndex] = useState(0);
    const [isSorting, setIsSorting] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleSort = () => {
        if (array.length === 0) return;
        const sortSteps = bubbleSort([...array]);
        setSteps(sortSteps);
        setStepIndex(0);
        setIsSorting(true);
    };

    useEffect(() => {
        let interval;
        if (isSorting && steps.length && stepIndex < steps.length) {
            interval = setInterval(() => {
                setStepIndex(prev => prev + 1);
            }, 500);
        } else if (stepIndex >= steps.length) {
            setIsSorting(false);
        }
        return () => clearInterval(interval);
    }, [isSorting, stepIndex, steps]);

    const handleInputChange = (e) => {
        const input = e.target.value;
        setInputValue(input);

        const numbers = input
            .split(',')
            .map(num => parseInt(num.trim(), 10))
            .filter(num => !isNaN(num));

        setArray(numbers);
    };

    const handleReset = () => {
        setStepIndex(0);
        setIsSorting(false);
        setArray([]);
        setSteps([]);
    };

    const handleInputSubmit = () => {
        const numbers = inputValue
            .split(',')
            .map(num => parseInt(num.trim(), 10))
            .filter(num => !isNaN(num));

        setArray(numbers);
        setInputValue('');
    };

    const currentStep = steps[stepIndex] || array;
    const maxBarHeight = Math.max(...array, 1); 

    return (
        <div className="container text-center mt-5">
            <h1 className="display-4 mb-4">Sorting Visualizer</h1>

            <div className="row mb-4 justify-content-center">
                <div className="col-md-6 mb-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter numbers separated by commas"
                        value={inputValue}
                        onChange={handleInputChange}
                        onBlur={handleInputSubmit}
                        disabled={isSorting}
                    />
                </div>
            </div>

            <div className="row mb-4 justify-content-center">
                <div className="col-md-3 mb-2">
                    <button
                        onClick={handleSort}
                        className="btn btn-primary btn-lg w-100"
                        disabled={isSorting || array.length === 0}
                    >
                        Start Sorting
                    </button>
                </div>
                <div className="col-md-3 mb-2">
                    <button
                        onClick={handleReset}
                        className="btn btn-danger btn-lg w-100"
                        disabled={!isSorting && array.length === 0}
                    >
                        Reset
                    </button>
                </div>
            </div>

            <div className="array-container">
                {currentStep.map((value, index) => (
                    <div
                        key={index}
                        className="bar"
                        style={{
                            height: `${(value / maxBarHeight) * 100}%`, 
                            width: '40px',
                            transition: 'height 0.5s ease-out' 
                        }}
                    >
                        <span className="bar-value">{value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Visualizer;
