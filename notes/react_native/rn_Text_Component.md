The `Text` component in React Native is used for displaying text. It supports various props and methods to style and manage the text content. Here are some basic to advanced examples showcasing its usage:

### Basic Usage

**Example 1: Basic Text Component**
```jsx
import React from 'react';
import { Text, View } from 'react-native';

const App = () => {
  return (
    <View>
      <Text>Hello, World!</Text>
    </View>
  );
};

export default App;
```

### Styling Text

**Example 2: Styling Text with Inline Styles**
```jsx
import React from 'react';
import { Text, View } from 'react-native';

const App = () => {
  return (
    <View>
      <Text style={{ fontSize: 20, color: 'blue' }}>Styled Text</Text>
    </View>
  );
};

export default App;
```

**Example 3: Styling Text with Stylesheet**
```jsx
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View>
      <Text style={styles.text}>Styled with Stylesheet</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'green',
  },
});

export default App;
```

### Using Props

**Example 4: Using Props for Dynamic Text**
```jsx
import React from 'react';
import { Text, View } from 'react-native';

const Greeting = ({ name }) => {
  return (
    <Text>Hello, {name}!</Text>
  );
};

const App = () => {
  return (
    <View>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
    </View>
  );
};

export default App;
```

### Nesting Text Components

**Example 5: Nesting Text Components**
```jsx
import React from 'react';
import { Text, View } from 'react-native';

const App = () => {
  return (
    <View>
      <Text>
        This is <Text style={{ fontWeight: 'bold' }}>bold</Text> and this is <Text style={{ color: 'red' }}>red</Text>.
      </Text>
    </View>
  );
};

export default App;
```

### Handling Text Overflow

**Example 6: Handling Text Overflow**
```jsx
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text} numberOfLines={1}>
        This is a very long text that should be truncated with an ellipsis at the end.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  text: {
    width: 200,
    fontSize: 16,
  },
});

export default App;
```

### Using Text Methods

**Example 7: Text Press Event**
```jsx
import React from 'react';
import { Text, View, Alert, StyleSheet } from 'react-native';

const App = () => {
  const onTextPress = () => {
    Alert.alert('Text Pressed', 'You pressed the text!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={onTextPress}>
        Press Me
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  text: {
    fontSize: 16,
    color: 'blue',
  },
});

export default App;
```

### Combining Multiple Props and Methods

**Example 8: Advanced Usage with Multiple Props and Methods**
```jsx
import React, { useState } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);

  const handlePress = () => {
    setCount(count + 1);
    Alert.alert('Text Pressed', `Pressed ${count + 1} times!`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={handlePress}>
        Press Me
      </Text>
      <Text style={styles.text}>
        Press count: {count}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: 'blue',
    marginBottom: 10,
  },
});

export default App;
```

These examples cover the basics and some advanced features of the `Text` component in React Native, demonstrating how to style text, use props, handle events, and manage text overflow.