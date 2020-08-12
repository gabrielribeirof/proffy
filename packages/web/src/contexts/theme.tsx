import React, { useState, createContext } from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';

import { themes, ThemeName } from '../styles/themes';

interface ThemeContextData {
  toggleTheme(): void;
}

export const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const ThemeProvider: React.FC = ({ children }) => {
  const [themeName, setThemeName] = useState<ThemeName>('light');
  const currentTheme = themes[themeName];

  function toggleTheme() {
    setThemeName(themeName);
  }

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <StyledProvider theme={currentTheme}>
        {children}
      </StyledProvider>
    </ThemeContext.Provider>
  );
};
