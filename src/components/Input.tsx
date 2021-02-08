import React from 'react';
import { Dimensions, KeyboardType, ReturnKeyType, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useThemeState } from '../lib/context';

type InputProps = {
  placeholder: string;
  keyboardType?: KeyboardType;
  returnKeyType?: ReturnKeyType;
  value?: string;
  onChangeText?: (text: string) => void;
};

const Input: React.FC<InputProps> = ({ placeholder, keyboardType, returnKeyType = 'done', value, onChangeText }) => {
  const {
    components: {
      input: { theme },
    },
  } = useThemeState();
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      style={[styles.container, theme.container]}
      keyboardType={keyboardType}
      returnKeyType={returnKeyType}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width * 0.9,
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
});

export default Input;
