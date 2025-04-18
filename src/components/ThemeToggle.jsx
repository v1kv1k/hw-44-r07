import React from 'react';
import { useAppContext } from '../context/AppContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useAppContext();
  
  return (
    <div className="theme-toggle">
      <h2>Current Theme: {theme}</h2>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
    </div>
  );
};

export default ThemeToggle; 