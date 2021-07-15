import { useContext } from 'react';

import { ThemeContext, ThemeContextData } from '../contexts/ThemeContext';

export function useTheme(): ThemeContextData {
  const value = useContext(ThemeContext);
  return value;
}
