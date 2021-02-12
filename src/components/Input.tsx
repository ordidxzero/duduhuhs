import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { Dimensions, KeyboardType, ReturnKeyType, StyleProp, StyleSheet, TextStyle } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { INPUT_PLACEHOLDER_COLOR } from '../lib/color.constant';
import { useContextState } from '../lib/context';
import departments from '../lib/departments';

type InputProps = {
  placeholder: string;
  keyboardType?: KeyboardType;
  returnKeyType?: ReturnKeyType;
  value?: string;
  onChangeText?: (text: string) => void;
  customStyle?: StyleProp<TextStyle>;
};

type PickerProps = {
  value: string;
  onValueChange: (value: string, index: number) => void;
};

const Input: React.FC<InputProps> = ({ placeholder, keyboardType, returnKeyType = 'done', value, onChangeText, customStyle }) => {
  const {
    darkMode,
    theme: {
      input: { theme },
    },
  } = useContextState();
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      style={[styles.container, customStyle, theme.container]}
      keyboardType={keyboardType}
      returnKeyType={returnKeyType}
      keyboardAppearance={darkMode ? 'dark' : 'light'}
      placeholderTextColor={INPUT_PLACEHOLDER_COLOR}
    />
  );
};

export const Picker: React.FC<PickerProps> = ({ value = departments[0].value, onValueChange }) => {
  const {
    theme: {
      input: { theme },
    },
  } = useContextState();
  const inputIOS = { ...styles.container, ...theme.container };
  return (
    <RNPickerSelect
      placeholder={{ label: 'Department', value: '' }}
      items={departments}
      style={{ inputIOS, placeholder: { color: INPUT_PLACEHOLDER_COLOR } }}
      value={value}
      onValueChange={onValueChange}
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

export default React.memo(Input);
