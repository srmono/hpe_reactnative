Overview of the fundamentals of React Native:

## React Native Fundamentals

### What is React Native?

React Native is an open-source framework created by Facebook for building mobile applications using JavaScript and React. It allows developers to create apps for both iOS and Android platforms with a single codebase.

### Core Concepts

#### 1. **Components**
- **Building Blocks**: Components are the basic building blocks of a React Native application. They can be either class components or functional components.
- **Reusable**: Components are reusable and can be nested, managed, and handled independently.

#### 2. **JSX (JavaScript XML)**
- **Syntax Extension**: JSX is a syntax extension that looks similar to XML or HTML. It allows you to write elements and components in a readable format.
- **Example**:
  ```jsx
  import React from 'react';
  import { Text, View } from 'react-native';

  const MyComponent = () => (
    <View>
      <Text>Hello, world!</Text>
    </View>
  );

  export default MyComponent;
  ```

#### 3. **State and Props**
- **State**: State is an object that holds data that may change over the lifecycle of the component. It is managed within the component.
- **Props**: Props (short for properties) are read-only attributes passed from a parent component to a child component. They allow data to be shared and components to be reused.

#### 4. **Lifecycle Methods**
- **Class Components**: Lifecycle methods such as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` are used to manage side effects and handle component updates.
- **Functional Components with Hooks**: The `useEffect` hook serves a similar purpose for functional components, allowing you to perform side effects.

#### 5. **Styling**
- **Inline Styles**: React Native uses JavaScript objects for styling components.
  ```jsx
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ fontSize: 20 }}>Hello, world!</Text>
  </View>
  ```
- **StyleSheet**: A more efficient way to create styles.
  ```jsx
  import { StyleSheet, View, Text } from 'react-native';

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 20,
    },
  });

  const MyComponent = () => (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, world!</Text>
    </View>
  );
  ```

#### 6. **Handling User Input**
- **Touch Events**: Components like `Button`, `TouchableOpacity`, and `TouchableHighlight` handle touch events.
  ```jsx
  import { Button, Alert } from 'react-native';

  const MyComponent = () => (
    <Button title="Press me" onPress={() => Alert.alert('Button pressed!')} />
  );
  ```

#### 7. **Navigation**
- **React Navigation**: A popular library for handling navigation in React Native apps.
  ```bash
  npm install @react-navigation/native
  npm install @react-navigation/stack
  ```
  ```jsx
  import { NavigationContainer } from '@react-navigation/native';
  import { createStackNavigator } from '@react-navigation/stack';

  const Stack = createStackNavigator();

  const MyStack = () => (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  ```

### Setting Up a React Native Project

#### Using Expo
1. **Install Expo CLI**
   ```bash
   npm install -g expo-cli
   ```

2. **Create a New Project**
   ```bash
   expo init MyNewProject
   ```

3. **Navigate to Project Directory**
   ```bash
   cd MyNewProject
   ```

4. **Start Development Server**
   ```bash
   expo start
   ```

#### Using React Native CLI
1. **Install React Native CLI**
   ```bash
   npm install -g react-native-cli
   ```

2. **Create a New Project**
   ```bash
   react-native init MyNewProject
   ```

3. **Navigate to Project Directory**
   ```bash
   cd MyNewProject
   ```

4. **Start Development Server**
   ```bash
   npx react-native start
   ```

5. **Run the App**
   - For Android:
     ```bash
     npx react-native run-android
     ```
   - For iOS (macOS only):
     ```bash
     npx react-native run-ios
     ```

### Advanced Concepts

#### 1. **State Management**
- **Context API**: Built-in solution for prop drilling.
- **Redux**: Popular library for managing global state.

#### 2. **Networking**
- **Fetch API**: Standard way to make network requests.
  ```jsx
  fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  ```

#### 3. **Local Storage**
- **AsyncStorage**: Simple, unencrypted, asynchronous, persistent, key-value storage system.
  ```jsx
  import AsyncStorage from '@react-native-async-storage/async-storage';

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@storage_Key', value);
    } catch (e) {
      // saving error
    }
  }

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key');
      if(value !== null) {
        // value previously stored
      }
    } catch(e) {
      // error reading value
    }
  }
  ```

#### 4. **Animations**
- **Animated API**: For complex animations.
- **LayoutAnimation**: For simple layout transitions.

### Conclusion

React Native is a powerful framework for building mobile applications with a single codebase for both iOS and Android. Understanding the core concepts such as components, state and props, lifecycle methods, and styling is essential for building efficient and maintainable applications. With the addition of advanced concepts like state management, networking, local storage, and animations, you can create rich and performant mobile apps.