import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Dimensions, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RootStackParamList } from '../screens/types';
import { useThemeState } from '../lib/context';

type NavigationButtonProps = {
  text: string;
  navigateTo: keyof RootStackParamList;
  customBgColor?: string;
  customTextColor?: string;
};

const NavigationButton: React.FC<NavigationButtonProps> = ({ text, navigateTo, customBgColor, customTextColor }) => {
  const navigation = useNavigation();
  const {
    components: {
      navigationButton: { theme },
    },
  } = useThemeState();
  const backgroundColor = customBgColor || theme.container.backgroundColor;
  const color = customTextColor || theme.text.color;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(navigateTo)}
      style={[styles.container, theme.container, { backgroundColor }]}>
      <Text style={[styles.text, theme.text, { color }]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2ecc71',
    width: Dimensions.get('screen').width * 0.9,
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  text: { fontSize: 19, fontWeight: '700', color: 'white' },
});

export default NavigationButton;
