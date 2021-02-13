import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native';
import CenterView from '../components/CenterView';
import { useContextDispatch, useContextState } from '../lib/context';
import { CustomStackScreenProp } from './types';

const { width } = Dimensions.get('screen');

const MatchingScreen = ({ navigation }: CustomStackScreenProp<'Matching'>) => {
  const { darkMode } = useContextState();
  const dispatch = useContextDispatch();
  return (
    <CenterView>
      <TouchableOpacity onPress={() => navigation.navigate('ChatRoom')} style={styles.container}>
        <Text style={styles.text}>Match</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Auth')}>
        <Text>Go To Auth Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch({ type: 'TOGGLE_DARKMODE', payload: !darkMode })}>
        <Text>Set Dark Mode (Current: {darkMode ? 'Dark' : 'Light'})</Text>
      </TouchableOpacity>
    </CenterView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.4,
    height: width * 0.4,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width * 0.2,
  },
  text: { color: 'white', fontWeight: '800' },
});

export default React.memo(MatchingScreen);
