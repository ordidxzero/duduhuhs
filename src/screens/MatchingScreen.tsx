import React from 'react';
import { Dimensions, Text, TouchableOpacity } from 'react-native';
import CustomSafeAreaView from '../components/CustomSafeAreaView';
import PulseButton from '../components/PulseButton';
import { useContextDispatch, useContextState } from '../lib/context';
import { CustomStackScreenProp } from './types';

const { width } = Dimensions.get('screen');

const MatchingScreen = ({ navigation }: CustomStackScreenProp<'Matching'>) => {
  const { darkMode } = useContextState();
  const dispatch = useContextDispatch();
  return (
    <CustomSafeAreaView>
      <PulseButton onPress={() => navigation.navigate('ChatRoom')} text="Match" size={width * 0.4} pulseMaxSize={width * 0.8} />
      <TouchableOpacity onPress={() => dispatch({ type: 'TOGGLE_DARKMODE', payload: !darkMode })}>
        <Text>Set Dark Mode (Current: {darkMode ? 'Dark' : 'Light'})</Text>
      </TouchableOpacity>
    </CustomSafeAreaView>
  );
};

export default React.memo(MatchingScreen);
