import messaging from '@react-native-firebase/messaging';
import { useEffect } from 'react';

const requestMessagingPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED || authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
};

const useMessagingPermission = () => {
  useEffect(() => {
    requestMessagingPermission();
  }, []);
};

export default useMessagingPermission;
