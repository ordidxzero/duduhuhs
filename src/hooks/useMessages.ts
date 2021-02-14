import { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';

const useMessages = () => {
  const [messages, setMessages] = useState<any[]>([]);
  useEffect(() => {
    firestore()
      .collection('chatroom')
      .orderBy('date')
      .onSnapshot((snapshot) => {
        const FBMessages = snapshot.docs.map((message) => ({ id: message.id, ...message.data() }));
        setMessages(FBMessages);
      });
  }, []);
  return messages;
};

export default useMessages;
