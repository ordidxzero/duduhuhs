import React from 'react';
import { KeyboardAvoidingView, StyleSheet, View, StatusBar as OriginalStatusBar } from 'react-native';
import StatusBar from './StatusBar';
import Spacer from './Spacer';
import { useThemeState } from '../lib/context';

const ChatSafeAreaView: React.FC = ({ children }) => {
  // 여기서 backgroundColor를 바꿔야할 듯
  const {
    darkMode,
    theme: {
      chatSafeAreaView: { theme },
    },
  } = useThemeState();
  return (
    <View style={[styles.container, theme.container]}>
      <OriginalStatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
      <StatusBar />
      <KeyboardAvoidingView behavior="padding" style={styles.keyboardAvoidingView}>
        {children}
      </KeyboardAvoidingView>
      <Spacer position="bottom" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, position: 'relative' },
  keyboardAvoidingView: { flex: 1, alignItems: 'center', justifyContent: 'space-between' },
});

export default ChatSafeAreaView;
