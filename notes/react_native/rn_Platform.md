In React Native, you can write platform-specific code using the `Platform` module and by organizing your files to target specific platforms. Here are some examples demonstrating how to use platform-specific code with components, props, and methods.

### Basic Platform-Specific Code

**Example 1: Basic Platform Check**
```jsx
import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {Platform.OS === 'ios' ? 'Hello, iOS User!' : 'Hello, Android User!'}
      </Text>
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
    fontSize: 20,
  },
});

export default App;
```

### Platform-Specific Styles

**Example 2: Platform-Specific Styles**
```jsx
import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Platform-Specific Styles</Text>
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
    fontSize: 20,
    ...Platform.select({
      ios: {
        color: 'blue',
      },
      android: {
        color: 'green',
      },
      default: {
        color: 'black', // other platforms, web for example
      },
    }),
  },
});

export default App;
```

### Platform-Specific Components

**Example 3: Platform-Specific Components**
Create separate files for each platform and import them conditionally.

1. **App.ios.js**
```jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is iOS</Text>
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
    fontSize: 20,
    color: 'blue',
  },
});

export default App;
```

2. **App.android.js**
```jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is Android</Text>
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
    fontSize: 20,
    color: 'green',
  },
});

export default App;
```

### Platform-Specific Methods

**Example 4: Platform-Specific Methods**
```jsx
import React from 'react';
import { View, Text, Button, StyleSheet, Platform, Alert } from 'react-native';

const showAlert = () => {
  if (Platform.OS === 'ios') {
    Alert.alert('iOS Alert', 'This is an alert for iOS users');
  } else {
    Alert.alert('Android Alert', 'This is an alert for Android users');
  }
};

const App = () => {
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

### Platform-Specific Props

**Example 5: Platform-Specific Props**
```jsx
import React from 'react';
import { View, Text, Button, StyleSheet, Platform } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Button
        title="Press Me"
        color={Platform.OS === 'ios' ? 'blue' : 'green'}
        onPress={() => alert('Button Pressed')}
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
});

export default App;
```

### Advanced: Platform-Specific Code in the Same File

**Example 6: Advanced Platform-Specific Code in the Same File**
```jsx
import React from 'react';
import { View, Text, Button, StyleSheet, Platform, Alert } from 'react-native';

const App = () => {
  const handlePress = () => {
    if (Platform.OS === 'ios') {
      Alert.alert('iOS Button Pressed');
    } else {
      Alert.alert('Android Button Pressed');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Platform-Specific Code</Text>
      <Button
        title="Press Me"
        color={Platform.OS === 'ios' ? 'blue' : 'green'}
        onPress={handlePress}
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
  text: {
    fontSize: 20,
    ...Platform.select({
      ios: {
        color: 'blue',
      },
      android: {
        color: 'green',
      },
      default: {
        color: 'black', // other platforms, web for example
      },
    }),
  },
});

export default App;
```

These examples demonstrate how to write platform-specific code in React Native using the `Platform` module, `Platform.select`, and platform-specific files. This helps to create a seamless user experience tailored to each platform.