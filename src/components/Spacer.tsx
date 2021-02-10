import React from 'react';
import { StyleSheet, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { isIphoneX, getBottomSpace } from 'react-native-iphone-x-helper';
import { useThemeState } from '../lib/context';

type SpacerProps = {
  position: 'top' | 'bottom';
};

const Spacer: React.FC<SpacerProps> = ({ position }) => {
  const {
    theme: {
      spacer: { theme },
    },
  } = useThemeState();
  if (position === 'top') {
    return <View style={styles.topSpacer} />;
  } else {
    return <View style={[styles.bottomSpacer, theme.bottomSpacer]} />;
  }
};

const styles = StyleSheet.create({
  topSpacer: {
    height: 2 * getStatusBarHeight(true) + 10,
  },
  bottomSpacer: {
    height: isIphoneX() ? getBottomSpace() : 0,
  },
});

export default React.memo(Spacer);
