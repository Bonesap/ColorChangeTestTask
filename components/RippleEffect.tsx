import React from 'react';
import Animated, { useAnimatedStyle, SharedValue } from 'react-native-reanimated';

type RippleEffectProps = {
  rippleX: SharedValue<number>;
  rippleY: SharedValue<number>;
  rippleRadius: SharedValue<number>;
  color: string;
};

const RippleEffect: React.FC<RippleEffectProps> = ({ rippleX, rippleY, rippleRadius, color }) => {
  const rippleStyle = useAnimatedStyle(() => ({
    position: 'absolute',
    width: rippleRadius.value * 2,
    height: rippleRadius.value * 2,
    borderRadius: rippleRadius.value,
    backgroundColor: color,
    opacity: 0.8,
    left: rippleX.value - rippleRadius.value,
    top: rippleY.value - rippleRadius.value,
  }));

  return <Animated.View style={rippleStyle} pointerEvents="none" />;
};

export default RippleEffect;
