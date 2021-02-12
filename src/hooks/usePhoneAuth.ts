import auth from '@react-native-firebase/auth';
import { useContextState, useContextDispatch } from '../lib/context';

const phoneNumberFormatter = (number: string) => {
  const head = number.slice(0, 3);
  const body = number.slice(3, 7);
  const tail = number.slice(7);
  return `+82 ${head}-${body}-${tail}`;
};

const usePhoneAuth = () => {
  const { phone, firebaseAuthConfirmation } = useContextState();
  const dispatch = useContextDispatch();
  const signInWithPhoneNumber = async (forceResend: boolean = false) => {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumberFormatter(phone), forceResend);
    dispatch({ type: 'SET_CONFIRMATION', payload: confirmation });
  };
  const setPhone = (payload: string) => dispatch({ type: 'SET_PHONE', payload });
  return { phone, firebaseAuthConfirmation, signInWithPhoneNumber, setPhone };
};

export default usePhoneAuth;
