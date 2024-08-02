Setting up a React Native app using React Native CLI, Expo, and Expo with templates:


# Setting Up a React Native App

## Table of Contents
- [Setting Up a React Native App](#setting-up-a-react-native-app)
  - [Table of Contents](#table-of-contents)
  - [Setting Up with React Native CLI](#setting-up-with-react-native-cli)
    - [Prerequisites](#prerequisites)
    - [Step-by-Step Guide](#step-by-step-guide)
  - [Setting Up with Expo](#setting-up-with-expo)
    - [Prerequisites](#prerequisites-1)
    - [Step-by-Step Guide](#step-by-step-guide-1)
  - [Setting Up with Expo Using Templates](#setting-up-with-expo-using-templates)
    - [Prerequisites](#prerequisites-2)
    - [Step-by-Step Guide](#step-by-step-guide-2)

## Setting Up with React Native CLI

### Prerequisites
- Node.js (version >= 12)
- Watchman (for macOS users)
- Java Development Kit (JDK) for Android development
- Android Studio for Android development
- Xcode for iOS development (macOS users)

### Step-by-Step Guide

1. **Install Node.js and Watchman**
   - Download and install Node.js from [nodejs.org](https://nodejs.org/).
   - Install Watchman using Homebrew (for macOS):
     ```bash
     brew install watchman
     ```

2. **Install React Native CLI**
   ```bash
   npm install -g react-native-cli
   ```

3. **Create a New React Native Project**
   ```bash
   react-native init MyReactNativeApp
   ```

4. **Navigate to the Project Directory**
   ```bash
   cd MyReactNativeApp
   ```

5. **Start the Development Server**
   ```bash
   npx react-native start
   ```

6. **Run the App on Android**
   - Start an Android emulator or connect an Android device.
   ```bash
   npx react-native run-android
   ```

7. **Run the App on iOS (macOS only)**
   - Open the project in Xcode and run it.
   ```bash
   npx react-native run-ios
   ```

## Setting Up with Expo

### Prerequisites
- Node.js (version >= 12)

### Step-by-Step Guide

1. **Install Node.js**
   - Download and install Node.js from [nodejs.org](https://nodejs.org/).

2. **Install Expo CLI**
   ```bash
   npm install -g expo-cli
   ```

3. **Create a New Expo Project**
   ```bash
   expo init MyExpoApp
   ```

4. **Navigate to the Project Directory**
   ```bash
   cd MyExpoApp
   ```

5. **Start the Development Server**
   ```bash
   expo start
   ```

6. **Run the App on an Emulator/Device**
   - Use the Expo Go app on your Android or iOS device to scan the QR code displayed in the terminal or browser.

## Setting Up with Expo Using Templates

### Prerequisites
- Node.js (version >= 12)

### Step-by-Step Guide

1. **Install Node.js**
   - Download and install Node.js from [nodejs.org](https://nodejs.org/).

2. **Install Expo CLI**
   ```bash
   npm install -g expo-cli
   ```

3. **Create a New Expo Project Using a Template**
   - To use a template, add the `--template` flag followed by the template name.
   ```bash
   expo init MyExpoTemplateApp --template <template-name>
   ```

   - Common templates include:
     - `blank`: A minimal app with the basic configuration.
     - `tabs`: A simple tab navigation example.
     - `bare-minimum`: A minimal app without the Expo managed workflow.

4. **Navigate to the Project Directory**
   ```bash
   cd MyExpoTemplateApp
   ```

5. **Start the Development Server**
   ```bash
   expo start
   ```

6. **Run the App on an Emulator/Device**
   - Use the Expo Go app on your Android or iOS device to scan the QR code displayed in the terminal or browser.

---

By following these steps, you can set up a React Native app using React Native CLI, Expo, and Expo with templates. Each method provides a different level of abstraction and flexibility, so choose the one that best fits your project requirements.
