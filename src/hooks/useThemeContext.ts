import { useContext } from 'react';

// Contexts
import { ThemeContext, IThemeContext } from '../contexts/theme';

export const useThemeContext = (): IThemeContext => {
  const context = useContext<IThemeContext>(ThemeContext);

  if (context === undefined) {
    throw new Error('useGrid must be used within the GridProvider');
  }

  return context;
};