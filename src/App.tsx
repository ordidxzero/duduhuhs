import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from './screens/AuthScreen';
import MatchingScreen from './screens/MatchingScreen';
import { RootStackParamList } from './screens/types';
import ChatRoomScreen from './screens/ChatRoomScreen';
import { ThemeContextProvider } from './lib/context';
import VerifyScreen from './screens/VerifyScreen';

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <ThemeContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Auth" screenOptions={{ headerShown: false, gestureEnabled: false }}>
          <Stack.Screen name="Auth" component={AuthScreen} />
          <Stack.Screen name="Verify" component={VerifyScreen} />
          <Stack.Screen name="Matching" component={MatchingScreen} />
          <Stack.Screen name="ChatRoom" component={ChatRoomScreen} options={{ headerShown: true, headerLeft: () => null }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeContextProvider>
  );
};

export default App;
