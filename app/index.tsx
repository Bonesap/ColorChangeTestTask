import React, { useState } from 'react';
import { StyleSheet, Dimensions, Text, View, Pressable } from 'react-native';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  interpolateColor,
} from 'react-native-reanimated';
import { Easing } from 'react-native-reanimated';
import HelloWave from '@/components/HelloWave';
import ColorCarousel from '@/components/ColorCarousel';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const Index = () => {
  const [tapCount, setTapCount] = useState<number>(0);
  const [colorHistory, setColorHistory] = useState<string[]>([]);
  const [previousColor, setPreviousColor] = useState<string>('#ffffff');
  const [nextColor, setNextColor] = useState<string>('#ff5733');
  const backgroundProgress = useSharedValue(0);
  const rippleX = useSharedValue(0);
  const rippleY = useSharedValue(0);
  const rippleRadius = useSharedValue(0);

  const generateRandomColor = (): string => {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  };

  const handlePress = (event: any) => {
    const { locationX, locationY } = event.nativeEvent;
    rippleX.value = locationX;
    rippleY.value = locationY;
    setTapCount((prev) => prev + 1);
    const newColor = generateRandomColor();
    setPreviousColor(nextColor);
    setNextColor(newColor);
    setColorHistory((prev) => [newColor, ...prev.slice(0, 9)]);
    backgroundProgress.value = 0;
    rippleRadius.value = 0;
    rippleRadius.value = withTiming(Math.hypot(SCREEN_WIDTH, SCREEN_HEIGHT), {
      duration: 5000,
      easing: Easing.out(Easing.exp),
    });
    backgroundProgress.value = withTiming(1, { duration: 5000, easing: Easing.out(Easing.exp) });
  };

  const animatedBackgroundStyle = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: interpolateColor(
        backgroundProgress.value,
        [0, 1],
        [previousColor, nextColor]
      ),
    };
  });

  const animatedRippleStyle = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      width: rippleRadius.value * 2,
      height: rippleRadius.value * 2,
      borderRadius: rippleRadius.value,
      backgroundColor: nextColor,
      opacity: 0.8,
      left: rippleX.value - rippleRadius.value,
      top: rippleY.value - rippleRadius.value,
    };
  });

  return (
    <View style={{ flex: 1 }}>
      <Animated.View style={animatedBackgroundStyle} />
      <Animated.View style={animatedRippleStyle} pointerEvents="none" />
      <Pressable style={StyleSheet.absoluteFill} onPress={handlePress}>
        <View style={styles.container}>
          <HelloWave />
          <Text style={styles.counter}>Taps: {tapCount}</Text>
        </View>
      </Pressable>
      <View style={styles.carouselContainer} pointerEvents="box-none">
        <ColorCarousel
          colors={colorHistory}
          onColorTap={(color) => {
            setNextColor(color);
            setPreviousColor(nextColor);
            backgroundProgress.value = 0;
            backgroundProgress.value = withTiming(1, {
              duration: 2000,
              easing: Easing.out(Easing.exp),
            });
          }}
        />
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counter: {
    position: 'absolute',
    top: 50,
    right: 20,
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    zIndex: 1,
  },
  carouselContainer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
  },
});
