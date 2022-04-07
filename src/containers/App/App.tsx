import React from 'react';
import classnames from 'classnames';

// Contexts
import { ThemeProvider, Themes } from '../../contexts/theme';

// Components
import { DummyComponent } from '../../components/DummyComponent';
import { ThemeSwitcher } from '../../components/ThemeSwitcher';

// Hooks
import { useThemeContext } from '../../hooks/useThemeContext';

// Styles
import './App.css';

function InnerApp() {
  // Hooks
  const {
    theme,
  } = useThemeContext();

  return (
    <div className={classnames('App', {
      'theme-light': theme === Themes.LIGHT,
      'theme-dark': theme === Themes.DARK,
    })}>
      <DummyComponent title="Level 1">
        <DummyComponent title="Level 2">
          <DummyComponent title="Level 3">
            <DummyComponent title="Level 4">
              <DummyComponent title="Level 5">
                <DummyComponent title="Level 6">
                  <DummyComponent title="Level 7">
                    <ThemeSwitcher />
                  </DummyComponent>
                </DummyComponent>
              </DummyComponent>
            </DummyComponent>
          </DummyComponent>
        </DummyComponent>
      </DummyComponent>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <InnerApp />
    </ThemeProvider>
  );
}

export default App;
