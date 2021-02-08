import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CustomStackScreenProp } from './types';

const ChatRoomScreen = ({ navigation }: CustomStackScreenProp<'ChatRoom'>) => {
  return (
    <View>
      <Text>Hello Chat Room</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Matching')}>
        <Text>Go To Matching Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChatRoomScreen;
