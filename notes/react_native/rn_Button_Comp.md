The `Button` component in React Native is used to create a button that users can press. It has a simple API for basic use, and you can use other components like `TouchableOpacity` for more complex buttons with additional styling and behavior. Here are some examples showcasing the usage of the `Button` component:

### Basic Usage

**Example 1: Basic Button**
```jsx
import React from 'react';
import { Button, View, Alert, StyleSheet } from 'react-native';

const App = () => {
  const handlePress = () => {
    Alert.alert('Button Pressed');
  };

  return (
    <View style={styles.container}>
      <Button title="Press Me" onPress={handlePress} />
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

### Customizing Button Color

**Example 2: Button with Custom Color**
```jsx
import React from 'react';
import { Button, View, Alert, StyleSheet } from 'react-native';

const App = () => {
  const handlePress = () => {
    Alert.alert('Button Pressed');
  };

  return (
    <View style={styles.container}>
      <Button title="Press Me" onPress={handlePress} color="purple" />
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

### Disabled Button

**Example 3: Disabled Button**
```jsx
import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Button title="Disabled Button" disabled />
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

### Handling Multiple Buttons

**Example 4: Multiple Buttons**
```jsx
import React from 'react';
import { Button, View, Alert, StyleSheet } from 'react-native';

const App = () => {
  const handlePress = (button) => {
    Alert.alert(`${button} Pressed`);
  };

  return (
    <View style={styles.container}>
      <Button title="Button 1" onPress={() => handlePress('Button 1')} />
      <Button title="Button 2" onPress={() => handlePress('Button 2')} color="green" />
      <Button title="Button 3" onPress={() => handlePress('Button 3')} color="red" />
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
    margin: 10,
  },
});

export default App;
```

### Custom Button Component with TouchableOpacity

For more customization, you can create your own button component using `TouchableOpacity`.

**Example 5: Custom Button with TouchableOpacity**
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
  const handlePress = (button) => {
    Alert.alert(`${button} Pressed`);
  };

  return (
    <View style={styles.container}>
      <CustomButton 
        title="Custom Button 1" 
        backgroundColor="blue" 
        onPress={() => handlePress('Custom Button 1')} 
      />
      <CustomButton 
        title="Custom Button 2" 
        backgroundColor="green" 
        onPress={() => handlePress('Custom Button 2')} 
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
    margin: 10,
  },
  text: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default App;
```

### Handling Button States

**Example 6: Button with State Management**
```jsx
import React, { useState } from 'react';
import { Button, View, Alert, StyleSheet, Text } from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);

  const handlePress = () => {
    setCount(count + 1);
    Alert.alert('Button Pressed', `Pressed ${count + 1} times!`);
  };

  return (
    <View style={styles.container}>
      <Button title="Press Me" onPress={handlePress} />
      <Text style={styles.text}>Press count: {count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 20,
    fontSize: 18,
  },
});

export default App;
```

These examples cover the basics and some advanced features of the `Button` component in React Native, demonstrating how to create buttons, customize their appearance, handle multiple buttons, manage button states, and create custom button components using `TouchableOpacity` for more flexibility.