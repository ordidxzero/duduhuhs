import React from 'react';
import { Dimensions, ScrollView, StyleSheet } from 'react-native';
import ChatForm from '../components/ChatForm';
import ChatSafeAreaView from '../components/ChatSafeAreaView';
import Message from '../components/Message';
import Spacer from '../components/Spacer';
import useMessages from '../hooks/useMessages';

const { width } = Dimensions.get('screen');

const ChatRoomScreen = () => {
  const messages = useMessages();
  return (
    <ChatSafeAreaView>
      <ScrollView keyboardDismissMode="on-drag" style={styles.scrollView}>
        <Spacer position="top" />
        {messages.map((message) => (
          <Message key={message.date} isMe={true} text={message.text} date={message.date} />
        ))}
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
