import React from 'react';
import { Text, Dimensions, Keyboard, StyleSheet } from 'react-native';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import ChatForm from '../components/ChatForm';
import ChatSafeAreaView from '../components/ChatSafeAreaView';
import Spacer from '../components/Spacer';

const { width } = Dimensions.get('screen');

const ChatRoomScreen = () => {
  return (
    <ChatSafeAreaView>
      <ScrollView style={styles.scrollView}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ height: '100%' }}>
          <Spacer position="top" />
          <Text>Hello Chat Room</Text>
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

export default ChatRoomScreen;
