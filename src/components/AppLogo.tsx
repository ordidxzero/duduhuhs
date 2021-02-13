import React from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('screen');

const AppLogo = () => {
  return (
    <Image
      style={styles.container}
      source={{ uri: 'https://fedoramagazine.org/wp-content/uploads/2015/03/test-days-945x400.png' }}
    />
  );
};

const styles = StyleSheet.create({ container: { height: height * 0.3, width } });

export default AppLogo;
