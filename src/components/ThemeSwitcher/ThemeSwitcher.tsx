import React from 'react';

// Hooks
import { useThemeContext } from '../../hooks/useThemeContext';

// Styles
import './ThemeSwitcher.css';

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = ({
  className,
}: ThemeSwitcherProps) => {
  // Hooks
  const {
    toggleTheme,
  } = useThemeContext();

  return (
    <div className={`ThemeSwitcher ${className}`}>
      <button
        onClick={toggleTheme}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default React.memo(ThemeSwitcher);
