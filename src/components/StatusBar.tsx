import React from 'react';
import { StyleSheet, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { useThemeState } from '../lib/context';

const StatusBar = () => {
  const {
    theme: {
      statusBar: { theme },
    },
  } = useThemeState();
  return <View style={[styles.container, theme.container]} />;
};

const styles = StyleSheet.create({
  container: {
    height: getStatusBarHeight(true),
    width: '100%',
    opacity: 0.7,
    zIndex: 50,
    position: 'absolute',
    top: 0,
  },
});

export default StatusBar;
