import React from 'react';


export enum Themes {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}

export type ThemeType = Themes.LIGHT | Themes.DARK;

export interface IThemeContext {
  theme: ThemeType;
  toggleTheme: () => void;
}

const noop = function() {
  console.warn('FUNCTION NOT IMPLEMENTED YET');
}

const initialState = {
  theme: Themes.LIGHT,
  toggleTheme: noop,
};

const ThemeContext = React.createContext<IThemeContext>({
  ...initialState,
});

const ThemeProvider = ({
  children,
}: React.PropsWithChildren<{}>) => {
  // States
  const [theme, setTheme] = React.useState<ThemeType>(Themes.LIGHT);

  // Handlers
  const toggleTheme = React.useCallback(() => {
    setTheme(prevTheme => {
      if (prevTheme === Themes.LIGHT) {
        return Themes.DARK;
      }
      return Themes.LIGHT;
    });
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
