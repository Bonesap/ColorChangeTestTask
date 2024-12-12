import React from 'react';
import { Dimensions } from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  SharedValue,
} from 'react-native-reanimated';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

type AnimatedBackgroundProps = {
  progress: SharedValue<number>;
  previousColor: string;
  nextColor: string;
};

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  progress,
  previousColor,
  nextColor,
}) => {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
      backgroundColor: interpolateColor(progress.value, [0, 1], [
        previousColor,
        nextColor,
      ]),
    };
  });

  return <Animated.View style={animatedStyle} />;
};

export default AnimatedBackground;
