import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  interpolate,
  Extrapolate,
  useAnimatedStyle,
  SharedValue,
} from 'react-native-reanimated';

const ITEM_WIDTH = 70; 

type ColorCarouselItemProps = {
  color: string;
  index: number;
  contentOffset: SharedValue<number>;
};

const ColorCarouselItem: React.FC<ColorCarouselItemProps> = ({
  color,
  index,
  contentOffset,
}) => {
  const animatedStyle = useAnimatedStyle(() => {
    const inputRange = [
      (index - 2) * ITEM_WIDTH,
      (index - 1) * ITEM_WIDTH,
      index * ITEM_WIDTH,
      (index + 1) * ITEM_WIDTH,
      (index + 2) * ITEM_WIDTH,
    ];

    const scale = interpolate(
      contentOffset.value,
      inputRange,
      [0.7, 0.9, 1, 0.9, 0.7],
      Extrapolate.CLAMP
    );

    const translateY = interpolate(
      contentOffset.value,
      inputRange,
      [20, 10, 0, 10, 20],
      Extrapolate.CLAMP
    );

    const opacity = interpolate(
      contentOffset.value,
      inputRange,
      [0.5, 0.8, 1, 0.8, 0.5],
      Extrapolate.CLAMP
    );

    return {
      transform: [{ scale }, { translateY }],
      opacity,
    };
  });

  return (
    <Animated.View
      style={[styles.circle, animatedStyle, { backgroundColor: color }]}
    />
  );
};

const styles = StyleSheet.create({
  circle: {
    width: ITEM_WIDTH,
    height: ITEM_WIDTH,
    aspectRatio: 1,
    borderRadius: ITEM_WIDTH / 2,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: 'white',
    overflow: 'hidden',
    marginBottom: 5
  },
});

export default ColorCarouselItem;
