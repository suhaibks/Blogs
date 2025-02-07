import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setIsDarkMode(savedTheme === 'dark');
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode ? 'dark' : 'light';
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const theme = {
    isDarkMode,
    toggleTheme,
    colors: {
      primary: isDarkMode ? '#2A2A2A' : '#FFFFFF',
      secondary: isDarkMode ? '#FFFFFF' : '#2A2A2A',
      accent: '#4A90E2',
      text: isDarkMode ? '#FFFFFF' : '#333333',
      background: isDarkMode ? '#1A1A1A' : '#F9F9F9',
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ 
        backgroundColor: theme.colors.background,
        color: theme.colors.text,
        minHeight: '100vh',
        transition: 'background-color 0.3s ease, color 0.3s ease'
      }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);