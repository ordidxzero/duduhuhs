import React from 'react';
import { Dimensions, Keyboard, StyleSheet } from 'react-native';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import ChatForm from '../components/ChatForm';
import ChatSafeAreaView from '../components/ChatSafeAreaView';
import Message from '../components/Message';
import Spacer from '../components/Spacer';

const { width } = Dimensions.get('screen');

const ChatRoomScreen = () => {
  return (
    <ChatSafeAreaView>
      <ScrollView style={styles.scrollView}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ height: '100%' }}>
          <Spacer position="top" />
          <Message isMe={false} text="LALASDSADKSDKFAKSDFK" date="test" />
          <Message isMe={true} text="Hi Man!" date="test" />
          <Message isMe={false} text="Fuck off" date="test" />
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
