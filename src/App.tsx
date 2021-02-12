import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from './screens/AuthScreen';
import MatchingScreen from './screens/MatchingScreen';
import { RootStackParamList } from './screens/types';
import ChatRoomScreen from './screens/ChatRoomScreen';
import { ContextProvider } from './lib/context';
import VerifyScreen from './screens/VerifyScreen';

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <ContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Auth" screenOptions={{ headerShown: false, gestureEnabled: false }}>
          <Stack.Screen name="Auth" component={AuthScreen} />
          <Stack.Screen name="Verify" component={VerifyScreen} />
          <Stack.Screen name="Matching" component={MatchingScreen} />
          <Stack.Screen name="ChatRoom" component={ChatRoomScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
};

export default App;
