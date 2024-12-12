import React from 'react';
import { StyleSheet, Text } from 'react-native';

type CounterDisplayProps = {
  tapCount: number;
};

const CounterDisplay: React.FC<CounterDisplayProps> = ({ tapCount }) => {
  return <Text style={styles.counter}>Taps: {tapCount}</Text>;
};

const styles = StyleSheet.create({
  counter: {
    position: 'absolute',
    top: 50,
    right: 20,
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    zIndex: 1,
  },
});

export default CounterDisplay;
