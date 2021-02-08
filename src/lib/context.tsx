import React, { createContext, Dispatch, useContext, useReducer } from 'react';
import { defaultTheme, CustomTheme } from './themes';

type ThemeState = CustomTheme; // 나중에 Theme으로 바꿔야됨

const ThemeStateContext = createContext<ThemeState | undefined>(undefined);

type Action = { type: 'TOGGLE_DARKMODE'; payload: boolean };

type ThemeDispatch = Dispatch<Action>;
const ThemeDispatchContext = createContext<ThemeDispatch | undefined>(undefined);

function themeReducer(state: ThemeState, action: Action): ThemeState {
  switch (action.type) {
    case 'TOGGLE_DARKMODE':
      return defaultTheme;
    default:
      throw new Error('Unhandled action');
  }
}

export function ThemeContextProvider({ children }: { children: React.ReactNode }) {
  const [theme, dispatch] = useReducer(themeReducer, defaultTheme);

  return (
    <ThemeDispatchContext.Provider value={dispatch}>
      <ThemeStateContext.Provider value={theme}>{children}</ThemeStateContext.Provider>
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
