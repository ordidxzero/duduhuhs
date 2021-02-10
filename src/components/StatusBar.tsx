import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { useThemeState } from '../lib/context';

const StatusBar = () => {
  const {
    theme: {
      statusBar: { theme },
    },
  } = useThemeState();
  return (
    <>
      <View style={[styles.container, theme.container]} />
      <View style={[styles.container, styles.header, theme.container]}>
        <Text style={[styles.headerText, theme.headerText]}>익명</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: getStatusBarHeight(true),
    width: '100%',
    zIndex: 50,
    position: 'absolute',
    top: 0,
  },
  header: {
    top: getStatusBarHeight(true),
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 17,
    fontWeight: '800',
  },
});

export default React.memo(StatusBar);
