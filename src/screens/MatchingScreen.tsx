import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CenterView from '../components/CenterView';
import { CustomStackScreenProp } from './types';

const MatchingScreen = ({ navigation }: CustomStackScreenProp<'Matching'>) => {
  return (
    <CenterView>
      <Text>Hello Matching</Text>
      <TouchableOpacity onPress={() => navigation.navigate('ChatRoom')}>
        <Text>Go To ChatRoom Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Auth')}>
        <Text>Go To Auth Screen</Text>
      </TouchableOpacity>
    </CenterView>
  );
};

export default MatchingScreen;
