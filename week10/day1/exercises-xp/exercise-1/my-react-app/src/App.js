import React from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ backgroundColor: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#333" : "#fff" }}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current Theme: {theme}</p>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <h1>Theme Switcher Example</h1>
        <ThemeSwitcher />
      </div>
    </ThemeProvider>
  );
}

export default App;

