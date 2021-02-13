import React, { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useContextState } from '../lib/context';
import usePhoneAuth from '../hooks/usePhoneAuth';
import { NAVIGATION_BUTTON_OTHER_BACKGROUND_COLOR } from '../lib/color.constant';

type VerifyButtonProps = {
  code: string;
  beforeNavigate: () => void;
};

const VerifyButton: React.FC<VerifyButtonProps> = ({ code, beforeNavigate }) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const { firebaseAuthConfirmation, signInWithPhoneNumber } = usePhoneAuth();
  const {
    theme: {
      navigationButton: { theme },
    },
  } = useContextState();

  const buttonMode = {
    text: code && firebaseAuthConfirmation ? '인증하기' : '인증번호 재요청',
    backgroundColor: code && firebaseAuthConfirmation ? '' : NAVIGATION_BUTTON_OTHER_BACKGROUND_COLOR,
  };

  const onPress = useCallback(async () => {
    try {
      if (code && firebaseAuthConfirmation) {
        setLoading(true);
        await firebaseAuthConfirmation.confirm(code);
        beforeNavigate();
        setLoading(false);
        return navigation.navigate('Matching');
      } else {
        await signInWithPhoneNumber(true);
        return;
      }
    } catch {
      // 어떤 걸 해야할까?
    }
  }, [code, firebaseAuthConfirmation, beforeNavigate, navigation, signInWithPhoneNumber]);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, theme.container, { backgroundColor: buttonMode.backgroundColor }]}>
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={[styles.text, theme.text, { color: theme.text.color }]}>{buttonMode.text}</Text>
      )}
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

export default React.memo(VerifyButton);
