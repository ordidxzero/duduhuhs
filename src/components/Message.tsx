import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { useThemeState } from '../lib/context';

type MessageProps = {
  isMe: boolean;
  text: string;
  date: string;
};

const { width } = Dimensions.get('screen');

const Message: React.FC<MessageProps> = ({ isMe, text, date }) => {
  const {
    theme: {
      message: { theme },
    },
  } = useThemeState();
  const messageBox = isMe ? theme.myBox : theme.partnerBox;
  const messageText = isMe ? theme.myText : theme.partnerText;
  const container = isMe ? styles.me : styles.partner;
  return (
    <Text style={[styles.container, container]}>
      <View style={[styles.messageBox, messageBox]}>
        <Text style={[styles.messageText, messageText]}>
          {text} {date}
        </Text>
      </View>
    </Text>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: width * 0.8,
  },
  partner: {
    alignSelf: 'flex-start',
  },
  me: {
    alignSelf: 'flex-end',
  },
  messageBox: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 7,
  },
  messageText: {},
});

export default Message;
