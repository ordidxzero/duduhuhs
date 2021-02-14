import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { useContextState } from '../lib/context';

const useMatching = () => {
  const {
    input: { name, department, studentId },
  } = useContextState();
  const formattedStudentID = studentId.slice(2, 4);
  const startMatching = () => {
    firestore()
      .collection('waiting')
      .add({ uid: auth().currentUser?.uid, name, department, studentId: formattedStudentID, date: Date.now() });
  };
  return startMatching;
};

export default useMatching;
