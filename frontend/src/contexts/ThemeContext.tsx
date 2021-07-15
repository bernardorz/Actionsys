import { createContext, ReactNode, useState } from 'react';

import {
  DefaultTheme,
  ThemeProvider as StyledThemeProvider,
} from 'styled-components';

import { Dark, Light } from '../styles/themes';

export interface ThemeContextData {
  theme: DefaultTheme;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme: DefaultTheme;
}

export const ThemeContext = createContext({} as ThemeContextData);

export function ThemeProvider({
  children,
  defaultTheme,
}: ThemeProviderProps): JSX.Element {
  const [theme, setTheme] = useState<DefaultTheme>(defaultTheme);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? Dark : Light);
  };

  return (
    <StyledThemeProvider theme={theme}>
      <ThemeContext.Provider
        value={{
          theme,
          toggleTheme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </StyledThemeProvider>
  );
}
