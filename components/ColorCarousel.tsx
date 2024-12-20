import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import ColorCarouselItem from './CarouselItem';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const ITEM_WIDTH = 70;

type ColorCarouselProps = {
  colors: string[];
  onColorTap: (color: string) => void;
};

const ColorCarousel: React.FC<ColorCarouselProps> = ({ colors, onColorTap }) => {
  const contentOffset = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      contentOffset.value = event.contentOffset.x;
    },
  });

  return (
    <Animated.FlatList
      data={colors}
      keyExtractor={(_, index) => index.toString()}
      horizontal
      snapToInterval={ITEM_WIDTH + 20}
      scrollEventThrottle={16}
      onScroll={scrollHandler}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.carouselContainer}
      renderItem={({ item, index }) => (
        <ColorCarouselItem color={item} index={index} contentOffset={contentOffset} onColorTap={onColorTap} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    paddingHorizontal: SCREEN_WIDTH / 2 - ITEM_WIDTH,
    alignItems: 'center',
  },
});

export default ColorCarousel;
