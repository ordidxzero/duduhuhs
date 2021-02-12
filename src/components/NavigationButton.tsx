import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Dimensions, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RootStackParamList } from '../screens/types';
import { useThemeState } from '../lib/context';
import { NAVIGATION_BUTTON_DISABLED_BACKGROUND_COLOR } from '../lib/color.constant';

type NavigationButtonProps = {
  text: string;
  navigateTo: keyof RootStackParamList;
  customBgColor?: string;
  customTextColor?: string;
  disabled?: boolean;
  beforeNavigate?: () => void;
};

const NavigationButton: React.FC<NavigationButtonProps> = ({
  text,
  navigateTo,
  customBgColor,
  customTextColor,
  disabled,
  beforeNavigate,
}) => {
  const navigation = useNavigation();
  const {
    theme: {
      navigationButton: { theme },
    },
  } = useThemeState();

  const backgroundColor = disabled
    ? NAVIGATION_BUTTON_DISABLED_BACKGROUND_COLOR
    : customBgColor || theme.container.backgroundColor;

  const color = customTextColor || theme.text.color;

  const onPress = () => {
    if (beforeNavigate) {
      beforeNavigate();
    }
    return navigation.navigate(navigateTo);
  };

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled} style={[styles.container, theme.container, { backgroundColor }]}>
      <Text style={[styles.text, theme.text, { color }]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width * 0.9,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  text: { fontSize: 19, fontWeight: '700' },
});

export default React.memo(NavigationButton);
