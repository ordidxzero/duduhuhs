import React, { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import firebase from '@react-native-firebase/firestore';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useThemeState } from '../lib/context';
import Input from './Input';

const ChatForm = () => {
  // 나중에 Firebase 함수로 교체 후 지울 것
  const navigation = useNavigation();
  const [input, setInput] = useState('');
  const onPress = useCallback(() => {
    firebase().collection('chatroom').add({ text: input, date: Date.now() });
    setInput('');
  }, [input]);
  const {
    theme: {
      chatForm: { theme },
    },
  } = useThemeState();
  return (
    <View style={[styles.container, theme.container]}>
      <Input value={input} onChangeText={setInput} placeholder="Write Message" customStyle={styles.chatInput} />
      <TouchableWithoutFeedback
        onPress={onPress}
        onLongPress={() => navigation.navigate('Matching')}
        style={[styles.chatSubmit, theme.chatSubmit]}>
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
