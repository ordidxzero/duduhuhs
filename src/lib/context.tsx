import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import React, { createContext, Dispatch, useContext, useReducer } from 'react';
import { defaultTheme, CustomTheme, darkModeTheme } from './themes';

export type InputFields = {
  name: string;
  studentId: string;
  department: string;
  phone: string;
};

type MainState = {
  darkMode: boolean;
  theme: CustomTheme;
  firebaseAuthConfirmation: FirebaseAuthTypes.ConfirmationResult | null;
  input: InputFields;
};

const MainStateContext = createContext<MainState | undefined>(undefined);

type Action =
  | { type: 'TOGGLE_DARKMODE'; payload: boolean }
  | { type: 'SET_CONFIRMATION'; payload: FirebaseAuthTypes.ConfirmationResult }
  | { type: 'SET_INPUT'; payload: { field: keyof InputFields; value: string } };

type MainDispatch = Dispatch<Action>;
const MainDispatchContext = createContext<MainDispatch | undefined>(undefined);

function themeReducer(state: MainState, { payload, type }: Action): MainState {
  switch (type) {
    case 'TOGGLE_DARKMODE':
      return { ...state, darkMode: payload as boolean, theme: payload ? darkModeTheme : defaultTheme };
    case 'SET_CONFIRMATION':
      return { ...state, firebaseAuthConfirmation: payload as FirebaseAuthTypes.ConfirmationResult };
    case 'SET_INPUT':
      const { field, value } = payload as { field: keyof InputFields; value: string };
      return { ...state, input: { ...state.input, [field]: value } };
    default:
      throw new Error('Unhandled action');
  }
}

export function ContextProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(themeReducer, {
    darkMode: false,
    theme: defaultTheme,
    firebaseAuthConfirmation: null,
    input: {
      name: '',
      studentId: '',
      department: '',
      phone: '',
    },
  });

  return (
    <MainDispatchContext.Provider value={dispatch}>
      <MainStateContext.Provider value={state}>{children}</MainStateContext.Provider>
    </MainDispatchContext.Provider>
  );
}

export function useContextState() {
  const state = useContext(MainStateContext);
  if (!state) {
    throw new Error('ContextProvider not found');
  }
  return state;
}

export function useContextDispatch() {
  const dispatch = useContext(MainDispatchContext);
  if (!dispatch) {
    throw new Error('ContextProvider not found');
  }
  return dispatch;
}
