import React, { useState } from 'react';
import { StyleSheet, View, Pressable, SafeAreaView, GestureResponderEvent } from 'react-native';
import Animated, { useSharedValue, withTiming, Easing } from 'react-native-reanimated';
import AnimatedBackground from '@/components/AnimatedBackground';
import RippleEffect from '@/components/RippleEffect';
import HelloWave from '@/components/HelloWave';
import ColorCarousel from '@/components/ColorCarousel';
import CounterDisplay from '@/components/CounterDisplay';
import { generateRandomColor } from '@/helper/colorHelpers';

const Index = () => {
  const [tapCount, setTapCount] = useState<number>(0);
  const [colorHistory, setColorHistory] = useState<string[]>([]);
  const [previousColor, setPreviousColor] = useState<string>('#ffffff');
  const [nextColor, setNextColor] = useState<string>('#ff5733');

  const backgroundProgress = useSharedValue(0);
  const rippleX = useSharedValue(0);
  const rippleY = useSharedValue(0);
  const rippleRadius = useSharedValue(0);

  const handlePress = (event: GestureResponderEvent) => {
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

    rippleRadius.value = withTiming(500, { duration: 5000, easing: Easing.out(Easing.exp) });
    backgroundProgress.value = withTiming(1, { duration: 5000, easing: Easing.out(Easing.exp) });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AnimatedBackground
        progress={backgroundProgress}
        previousColor={previousColor}
        nextColor={nextColor}
      />
      <RippleEffect
        rippleX={rippleX}
        rippleY={rippleY}
        rippleRadius={rippleRadius}
        color={nextColor}
      />
      <Pressable style={StyleSheet.absoluteFill} onPress={handlePress}>
        <View style={styles.container}>
          <HelloWave />
          <CounterDisplay tapCount={tapCount} />
        </View>
      </Pressable>
      <View style={styles.carouselContainer} pointerEvents="box-none">
        <ColorCarousel
          colors={colorHistory}
          onColorTap={(color) => {
            setNextColor(color);
            setPreviousColor(nextColor);
            backgroundProgress.value = 0;
            backgroundProgress.value = withTiming(1, { duration: 2000, easing: Easing.out(Easing.exp) });
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselContainer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
  },
});
