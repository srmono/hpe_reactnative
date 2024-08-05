The `Alert` component in React Native is used to display alert dialogs to the user. It is available on both iOS and Android, but has some differences in appearance and behavior between the platforms. Below are examples of how to use the `Alert` component in various scenarios.

### Basic Usage

**Example 1: Basic Alert**
```jsx
import React from 'react';
import { Button, View, Alert, StyleSheet } from 'react-native';

const App = () => {
  const showAlert = () => {
    Alert.alert('Alert Title', 'This is a simple alert');
  };

  return (
    <View style={styles.container}>
      <Button title="Show Alert" onPress={showAlert} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
```

### Alert with Multiple Buttons

**Example 2: Alert with Multiple Buttons**
```jsx
import React from 'react';
import { Button, View, Alert, StyleSheet } from 'react-native';

const App = () => {
  const showAlert = () => {
    Alert.alert(
      'Alert Title',
      'This is an alert with multiple buttons',
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Button title="Show Alert" onPress={showAlert} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
```

### Alert with Text Input (iOS Only)

**Example 3: Alert with Text Input (iOS Only)**
```jsx
import React from 'react';
import { Button, View, Alert, StyleSheet, Platform } from 'react-native';

const App = () => {
  const showAlert = () => {
    if (Platform.OS === 'ios') {
      Alert.prompt(
        'Alert with Text Input',
        'Enter something',
        text => console.log('Text entered:', text)
      );
    } else {
      Alert.alert('Text Input Alert', 'This feature is available only on iOS');
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Show Alert with Text Input" onPress={showAlert} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
```

### Alert with Custom Button Styles (Android)

**Example 4: Alert with Custom Button Styles (Android)**
```jsx
import React from 'react';
import { Button, View, Alert, StyleSheet, Platform } from 'react-native';

const App = () => {
  const showAlert = () => {
    Alert.alert(
      'Alert Title',
      'This is an alert with custom button styles',
      [
        { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <Button title="Show Alert" onPress={showAlert} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
```

### Alert with Cancellation Callback

**Example 5: Alert with Cancellation Callback**
```jsx
import React from 'react';
import { Button, View, Alert, StyleSheet } from 'react-native';

const App = () => {
  const showAlert = () => {
    Alert.alert(
      'Alert Title',
      'This is an alert with a cancellation callback',
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: true, onDismiss: () => console.log('Alert dismissed') }
    );
  };

  return (
    <View style={styles.container}>
      <Button title="Show Alert" onPress={showAlert} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
```

### Handling Complex Alerts with State

**Example 6: Handling Complex Alerts with State**
```jsx
import React, { useState } from 'react';
import { Button, View, Alert, StyleSheet, TextInput, Text } from 'react-native';

const App = () => {
  const [text, setText] = useState('');

  const showAlert = () => {
    Alert.alert(
      'Alert Title',
      'This is an alert with text input',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => Alert.alert('Entered Text', text),
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter something"
        value={text}
        onChangeText={setText}
      />
      <Button title="Show Alert" onPress={showAlert} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: '80%',
  },
});

export default App;
```

These examples cover the basics and some advanced features of the `Alert` component in React Native, demonstrating how to create alerts, customize their appearance and behavior, handle multiple buttons, use text input in alerts (iOS only), handle cancellation, and manage state within alerts.