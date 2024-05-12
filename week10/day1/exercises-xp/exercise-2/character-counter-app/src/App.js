import React, { useRef, useState } from "react";

function CharacterCounter() {
  const inputRef = useRef(null);
  const [count, setCount] = useState(0); 

  const handleInputChange = () => {
    const textLength = inputRef.current.value.length;
    setCount(textLength); 
  };

  return (
    <div>
      <h1>Character Counter</h1>
      <textarea
        ref={inputRef}
        onChange={handleInputChange}
        placeholder="Type something..."
        style={{ width: "300px", height: "150px" }}></textarea>
      <p>Character Count: {count}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <CharacterCounter />
    </div>
  );
}

export default App;

