import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import ColorCarouselItem from './CarouselItem';
import { GestureHandlerRootView, TapGestureHandler } from 'react-native-gesture-handler';

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
    <GestureHandlerRootView>
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
          <TapGestureHandler onActivated={() => onColorTap(item)}>
            <Animated.View>
              <ColorCarouselItem
                color={item}
                index={index}
                contentOffset={contentOffset}
              />
            </Animated.View>
          </TapGestureHandler>
        )}
      />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    paddingHorizontal: SCREEN_WIDTH / 2 - ITEM_WIDTH, 
    alignItems: 'center',
  },
});

export default ColorCarousel;
