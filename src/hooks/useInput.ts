import { useCallback } from 'react';
import { useContextDispatch, useContextState, InputFields } from '../lib/context';

const useInput = () => {
  const { input } = useContextState();
  const dispatch = useContextDispatch();
  const setInput = useCallback(
    (field: keyof InputFields) => (value: string) => dispatch({ type: 'SET_INPUT', payload: { field, value } }),
    [dispatch],
  );
  return { input, setInput };
};

export default useInput;
