import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Animated, Easing, TouchableOpacity, Image, EasingFunction, Text } from 'react-native';

type PulseProps = {
  interval: number;
  size: number;
  pulseMaxSize: number;
  borderColor: string;
  backgroundColor: string;
};

type PulseButtonProps = {
  interval?: number;
  size?: number;
  pulseMaxSize?: number;
  avatar?: string;
  text?: string;
  pressInValue?: number;
  pressDuration?: number;
  pressInEasing?: EasingFunction;
  pressOutEasing?: EasingFunction;
  pulseBorderColor?: string;
  pulseBackgroundColor?: string;
  buttonBackgroundColor?: string;
  onPress?: () => void;
};

export const Pulse: React.FC<PulseProps> = ({ interval, size, pulseMaxSize, borderColor, backgroundColor }) => {
  const anim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(anim, {
      toValue: 1,
      duration: interval,
      easing: Easing.cubic,
      useNativeDriver: true,
    }).start();
  }, [interval, anim]);
  return (
    <View
      style={[
        styles.circleWrapper,
        {
          width: pulseMaxSize,
          height: pulseMaxSize,
          marginLeft: -pulseMaxSize / 2,
          marginTop: -pulseMaxSize / 2,
        },
      ]}>
      <Animated.View
        style={[
          styles.circle,
          {
            borderColor,
            backgroundColor,
            width: size,
            height: size,
            transform: [
              {
                scale: anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.9, pulseMaxSize / size],
                }),
              },
            ],
            borderRadius: pulseMaxSize / 2,
            opacity: anim.interpolate({
              inputRange: [0, 0.7, 1],
              outputRange: [1, 0.1, 0],
            }),
          },
        ]}
      />
    </View>
  );
};

const PulseButton: React.FC<PulseButtonProps> = ({
  interval = 2000,
  size = 100,
  avatar,
  text = 'Press',
  pulseMaxSize = 250,
  pressInValue = 0.9,
  pressDuration = 150,
  pressInEasing = Easing.ease,
  pressOutEasing = Easing.ease,
  pulseBorderColor = '#D8335B',
  pulseBackgroundColor = '#ED225B55',
  buttonBackgroundColor = 'white',
  onPress = () => {},
}) => {
  const pulseProps = { interval, size, pulseMaxSize, borderColor: pulseBorderColor, backgroundColor: pulseBackgroundColor };
  const [circles, setCircles] = useState<number[]>([]);
  const counter = useRef(1);
  const intervalId = useRef<NodeJS.Timeout | null>(null);
  const anim = useRef(new Animated.Value(1)).current;

  const setCircleInterval = () => {
    intervalId.current = setInterval(addCircle, interval * 0.7);
    addCircle();
  };

  const addCircle = () => {
    counter.current++;
    setCircles((prev) => prev.concat(counter.current));
  };

  const onPressIn = () => {
    Animated.timing(anim, {
      toValue: pressInValue,
      duration: pressDuration,
      easing: pressInEasing,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.timing(anim, {
      toValue: 1,
      duration: pressDuration,
      easing: pressOutEasing,
      useNativeDriver: true,
    }).start(onPress);
  };

  useEffect(() => {
    setCircleInterval();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View
      style={{
        flex: 1,
        position: 'relative',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {circles.map((circle) => (
        <Pulse key={circle} {...pulseProps} />
      ))}

      <Animated.View
        style={{
          transform: [
            {
              scale: anim,
            },
          ],
        }}>
        <TouchableOpacity
          activeOpacity={1}
          style={[
            { width: size, height: size, backgroundColor: buttonBackgroundColor, borderRadius: size / 2 },
            styles.pulseLoaderButton,
          ]}
          onPressIn={onPressIn}
          onPressOut={onPressOut}>
          {avatar ? (
            <Image
              source={{ uri: avatar }}
              style={{
                width: size,
                height: size,
                borderRadius: size / 2,
                backgroundColor: 'white',
              }}
            />
          ) : (
            <Text>{text}</Text>
          )}
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  circleWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  circle: {
    borderWidth: 4 * StyleSheet.hairlineWidth,
  },
  pulseLoaderButton: { justifyContent: 'center', alignItems: 'center' },
});

export default PulseButton;
