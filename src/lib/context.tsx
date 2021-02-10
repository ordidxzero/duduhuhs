import React, { createContext, Dispatch, useContext, useReducer } from 'react';
import { defaultTheme, CustomTheme, darkModeTheme } from './themes';

type ThemeState = {
  darkMode: boolean;
  theme: CustomTheme;
};

const ThemeStateContext = createContext<ThemeState | undefined>(undefined);

type Action = { type: 'TOGGLE_DARKMODE'; payload: boolean };

type ThemeDispatch = Dispatch<Action>;
const ThemeDispatchContext = createContext<ThemeDispatch | undefined>(undefined);

function themeReducer(_: ThemeState, { payload, type }: Action): ThemeState {
  switch (type) {
    case 'TOGGLE_DARKMODE':
      return { darkMode: payload, theme: payload ? darkModeTheme : defaultTheme };
    default:
      throw new Error('Unhandled action');
  }
}

export function ThemeContextProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(themeReducer, { darkMode: false, theme: defaultTheme });

  return (
    <ThemeDispatchContext.Provider value={dispatch}>
      <ThemeStateContext.Provider value={state}>{children}</ThemeStateContext.Provider>
    </ThemeDispatchContext.Provider>
  );
}

export function useThemeState() {
  const state = useContext(ThemeStateContext);
  if (!state) {
    throw new Error('ThemeProvider not found');
  }
  return state;
}

export function useThemeDispatch() {
  const dispatch = useContext(ThemeDispatchContext);
  if (!dispatch) {
    throw new Error('ThemeProvider not found');
  }
  return dispatch;
}
