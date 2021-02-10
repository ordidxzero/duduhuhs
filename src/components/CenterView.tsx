import React from 'react';
import { SafeAreaView, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

const CenterView: React.FC = ({ children }) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    width,
    height,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CenterView;
