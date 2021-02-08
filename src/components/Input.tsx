import React from 'react';
import { Dimensions, KeyboardType, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useThemeState } from '../lib/context';

type InputProps = {
  placeholder: string;
  keyboardType?: KeyboardType;
};

const Input: React.FC<InputProps> = ({ placeholder, keyboardType }) => {
  const {
    components: {
      input: { theme },
    },
  } = useThemeState();
  return <TextInput placeholder={placeholder} style={[styles.container, theme.container]} keyboardType={keyboardType} />;
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
