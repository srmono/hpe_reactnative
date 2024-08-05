In React Native, Touchable components are used to create interactive UI elements that respond to touch events. Here are some basic to advanced examples showcasing the usage of various Touchable components like `TouchableOpacity`, `TouchableHighlight`, `TouchableWithoutFeedback`, and `TouchableNativeFeedback`.

### Basic Usage

**Example 1: TouchableOpacity**
```jsx
import React from 'react';
import { TouchableOpacity, Text, View, Alert, StyleSheet } from 'react-native';

const App = () => {
  const handlePress = () => {
    Alert.alert('TouchableOpacity Pressed');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.text}>TouchableOpacity</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: 'white',
  },
});

export default App;
```

### TouchableHighlight

**Example 2: TouchableHighlight**
```jsx
import React from 'react';
import { TouchableHighlight, Text, View, Alert, StyleSheet } from 'react-native';

const App = () => {
  const handlePress = () => {
    Alert.alert('TouchableHighlight Pressed');
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.button} onPress={handlePress} underlayColor="darkblue">
        <Text style={styles.text}>TouchableHighlight</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: 'white',
  },
});

export default App;
```

### TouchableWithoutFeedback

**Example 3: TouchableWithoutFeedback**
```jsx
import React from 'react';
import { TouchableWithoutFeedback, Text, View, Alert, StyleSheet } from 'react-native';

const App = () => {
  const handlePress = () => {
    Alert.alert('TouchableWithoutFeedback Pressed');
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.button}>
          <Text style={styles.text}>TouchableWithoutFeedback</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: 'white',
  },
});

export default App;
```

### TouchableNativeFeedback (Android Only)

**Example 4: TouchableNativeFeedback**
```jsx
import React from 'react';
import { TouchableNativeFeedback, Text, View, Alert, StyleSheet, Platform } from 'react-native';

const App = () => {
  const handlePress = () => {
    Alert.alert('TouchableNativeFeedback Pressed');
  };

  if (Platform.OS === 'android') {
    return (
      <View style={styles.container}>
        <TouchableNativeFeedback onPress={handlePress}>
          <View style={styles.button}>
            <Text style={styles.text}>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.text}>TouchableNativeFeedback (iOS)</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: 'white',
  },
});

export default App;
```

### Handling Multiple Touchables

**Example 5: Handling Multiple Touchables**
```jsx
import React from 'react';
import { TouchableOpacity, TouchableHighlight, Text, View, Alert, StyleSheet } from 'react-native';

const App = () => {
  const handlePress = (type) => {
    Alert.alert(`${type} Pressed`);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => handlePress('TouchableOpacity')}>
        <Text style={styles.text}>TouchableOpacity</Text>
      </TouchableOpacity>
      <TouchableHighlight style={styles.button} onPress={() => handlePress('TouchableHighlight')} underlayColor="darkblue">
        <Text style={styles.text}>TouchableHighlight</Text>
      </TouchableHighlight>
      <TouchableWithoutFeedback onPress={() => handlePress('TouchableWithoutFeedback')}>
        <View style={styles.button}>
          <Text style={styles.text}>TouchableWithoutFeedback</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  text: {
    color: 'white',
  },
});

export default App;
```

### Advanced Usage with Props and Methods

**Example 6: Custom Touchable Component**
```jsx
import React from 'react';
import { TouchableOpacity, Text, View, Alert, StyleSheet } from 'react-native';

const CustomButton = ({ onPress, title, backgroundColor }) => (
  <TouchableOpacity 
    style={[styles.button, { backgroundColor }]} 
    onPress={onPress}
  >
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const handlePress = (type) => {
    Alert.alert(`${type} Pressed`);
  };

  return (
    <View style={styles.container}>
      <CustomButton 
        title="Custom TouchableOpacity" 
        backgroundColor="blue" 
        onPress={() => handlePress('Custom TouchableOpacity')} 
      />
      <CustomButton 
        title="Custom TouchableHighlight" 
        backgroundColor="green" 
        onPress={() => handlePress('Custom TouchableHighlight')} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  text: {
    color: 'white',
  },
});

export default App;
```

These examples cover the basics and some advanced features of Touchable components in React Native, demonstrating how to create interactive UI elements, handle touch events, and customize their appearance and behavior using props and methods.