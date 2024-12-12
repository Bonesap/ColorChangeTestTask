# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

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