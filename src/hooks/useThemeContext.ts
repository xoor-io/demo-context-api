import { useContext } from 'react';

// Contexts
import { ThemeContext, IThemeContext } from '../contexts/theme';

export const useThemeContext = (): IThemeContext => {
  const context = useContext<IThemeContext>(ThemeContext);

  return context;
};
