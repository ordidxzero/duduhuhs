import React from 'react';
import { Dimensions, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CenterView from '../components/CenterView';
import { useThemeDispatch, useThemeState } from '../lib/context';
import { CustomStackScreenProp } from './types';

const { width } = Dimensions.get('screen');

const MatchingScreen = ({ navigation }: CustomStackScreenProp<'Matching'>) => {
  const { darkMode } = useThemeState();
  const dispatch = useThemeDispatch();
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

export default MatchingScreen;
