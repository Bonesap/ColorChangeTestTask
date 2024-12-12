## Get started

1. Install dependencies

   npm install

2. Start the app

    npx expo start

## Key Technologies

The project leverages the following technologies:

React Native

Core framework for building the mobile app.
Expo

Simplified development and testing environment.
react-native-reanimated

Used for creating smooth and performant animations, including:
Ripple effects.
Background color interpolation.
Carousel scaling and position animations.
react-native-gesture-handler

Handles tap and swipe gestures for user interaction.
TypeScript

Ensures type safety and improved developer experience.

## Project Features

This project implements an interactive theme-changing app with the following features:

1. Tap-Triggered Color Transition

   - When the user taps anywhere on the screen, the background color smoothly transitions to a randomly generated color.
   - A ripple effect originates from the tap location and expands across the screen with a smooth animation.

2. Color Carousel

   - Displays a horizontal list of previously generated colors.
   - Users can swipe the carousel to scroll through the color history.
   - Tapping a color in the carousel sets it as the background color.

3. Tap Counter

   - A counter displays the total number of taps on the screen.

4. Animated Text Component

   - The text "Hello there" scales up and down infinitely using an animated "wave" effect.

5. Smooth Animations

   - All animations (ripple, color transitions, and scaling) are implemented using react-native-reanimated for performance optimization and smoothness.