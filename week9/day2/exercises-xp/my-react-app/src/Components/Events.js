import React, { useState } from 'react';

function Events() {
    
    const [inputValue, setInputValue] = useState('');
    const [isToggleOn, setIsToggleOn] = useState(true);

    const clickMe = () => {
        alert('I was clicked');
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            alert(`The Enter key was pressed, your input is: ${inputValue}`);
        }
    };

    const toggleButton = () => {
        setIsToggleOn(!isToggleOn);
    };

    return (
        <div>
            {}
            <button onClick={clickMe}>Click me</button>

            {}
            <input
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type here and press enter"
            />

            {}
            <button onClick={toggleButton}>
                {isToggleOn ? 'ON' : 'OFF'}
            </button>
        </div>
    );
}

export default Events;

