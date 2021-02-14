import React, { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import firebase from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useContextState } from '../lib/context';
import Input from './Input';
import { CHAT_FORM_SUBMIT_DISABLED_BACKGROUND_COLOR } from '../lib/color.constant';

const ChatForm = () => {
  // 나중에 Firebase 함수로 교체 후 지울 것
  const navigation = useNavigation();
  const [text, setText] = useState('');
  const disabled = text === '' ? { backgroundColor: CHAT_FORM_SUBMIT_DISABLED_BACKGROUND_COLOR } : {};
  const onPress = useCallback(() => {
    if (text === '') {
      return;
    }
    firebase().collection('chatroom').add({ text, date: Date.now(), user: auth().currentUser?.uid });
    setText('');
  }, [text]);
  const {
    theme: {
      chatForm: { theme },
    },
  } = useContextState();
  return (
    <View style={[styles.container, theme.container]}>
      <Input value={text} onChangeText={setText} placeholder="Write Message" customStyle={styles.chatInput} />
      <TouchableWithoutFeedback
        onPress={onPress}
        disabled={text === ''}
        onLongPress={() => navigation.navigate('Matching')}
        style={[styles.chatSubmit, theme.chatSubmit, disabled]}>
        <Text>S</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    padding: 8,
  },
  chatInput: {
    marginBottom: 0,
    marginRight: 5,
    padding: 10,
    flex: 1,
  },
  chatSubmit: {
    paddingHorizontal: 13,
    zIndex: 100,
    paddingVertical: 10,
    borderRadius: 10,
  },
});

export default React.memo(ChatForm);
