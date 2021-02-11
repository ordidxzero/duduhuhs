import React, { useEffect, useState } from 'react';
import { Dimensions, Keyboard, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import ChatForm from '../components/ChatForm';
import ChatSafeAreaView from '../components/ChatSafeAreaView';
import Message from '../components/Message';
import Spacer from '../components/Spacer';

const { width } = Dimensions.get('screen');

const ChatRoomScreen = () => {
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
  return (
    <ChatSafeAreaView>
      <ScrollView style={styles.scrollView}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ height: '100%' }}>
          <Spacer position="top" />
          {messages.map((message) => (
            <Message key={message.date} isMe={true} text={message.text} date={message.date} />
          ))}
        </TouchableWithoutFeedback>
      </ScrollView>
      <ChatForm />
    </ChatSafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    width,
    paddingHorizontal: 10,
  },
});

export default React.memo(ChatRoomScreen);
