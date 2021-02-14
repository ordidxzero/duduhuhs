import React from 'react';
import { Dimensions, Text, TouchableOpacity } from 'react-native';
import CustomSafeAreaView from '../components/CustomSafeAreaView';
import PulseButton from '../components/PulseButton';
import useMatching from '../hooks/useMatching';
import { useContextDispatch, useContextState } from '../lib/context';
import { CustomStackScreenProp } from './types';

const { width } = Dimensions.get('screen');

const MatchingScreen = ({ navigation }: CustomStackScreenProp<'Matching'>) => {
  const { darkMode } = useContextState();
  const dispatch = useContextDispatch();
  const startMatching = useMatching();
  const onPress = () => {
    startMatching();
    navigation.navigate('ChatRoom');
  };
  return (
    <CustomSafeAreaView>
      <PulseButton onPress={onPress} text="Match" size={width * 0.3} pulseMaxSize={width * 0.6} />
      <TouchableOpacity onPress={() => dispatch({ type: 'TOGGLE_DARKMODE', payload: !darkMode })}>
        <Text>Set Dark Mode (Current: {darkMode ? 'Dark' : 'Light'})</Text>
      </TouchableOpacity>
    </CustomSafeAreaView>
  );
};

export default React.memo(MatchingScreen);
