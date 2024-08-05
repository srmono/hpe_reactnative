In React Native, detecting the orientation (Portrait or Landscape) can be done using the `Dimensions` API, `useWindowDimensions` hook, and `onLayout` event. Additionally, you can also use platform-specific approaches if needed. Here are some examples demonstrating these methods and how to handle any issues, especially on Android.

### Using Dimensions API

**Example 1: Detecting Orientation with Dimensions API**

```jsx
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const App = () => {
  const [orientation, setOrientation] = useState('Portrait');

  useEffect(() => {
    const updateOrientation = () => {
      const { width, height } = Dimensions.get('window');
      setOrientation(width > height ? 'Landscape' : 'Portrait');
    };

    Dimensions.addEventListener('change', updateOrientation);

    return () => {
      Dimensions.removeEventListener('change', updateOrientation);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Orientation: {orientation}</Text>
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

### Using useWindowDimensions Hook

**Example 2: Detecting Orientation with useWindowDimensions Hook**

```jsx
import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';

const App = () => {
  const { width, height } = useWindowDimensions();
  const orientation = width > height ? 'Landscape' : 'Portrait';

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Orientation: {orientation}</Text>
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

### Using onLayout Event

**Example 3: Detecting Orientation with onLayout Event**

```jsx
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  const [orientation, setOrientation] = useState('Portrait');

  const onLayout = (event) => {
    const { width, height } = event.nativeEvent.layout;
    setOrientation(width > height ? 'Landscape' : 'Portrait');
  };

  return (
    <View style={styles.container} onLayout={onLayout}>
      <Text style={styles.text}>Orientation: {orientation}</Text>
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

### Handling Android Specific Issues

On Android, orientation changes can sometimes cause issues, such as activity restarts or unwanted re-renders. One way to handle these issues is by updating the `AndroidManifest.xml` file to handle configuration changes for orientation.

**AndroidManifest.xml**
```xml
<activity
  android:name=".MainActivity"
  android:configChanges="orientation|screenSize|keyboardHidden">
  <!-- Other configurations -->
</activity>
```

This ensures that the activity does not restart on orientation changes, allowing the React Native app to handle the orientation change smoothly.

### Combining Platform-Specific Code

**Example 4: Platform-Specific Orientation Detection**

```jsx
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Platform } from 'react-native';

const App = () => {
  const [orientation, setOrientation] = useState('Portrait');

  useEffect(() => {
    const updateOrientation = () => {
      const { width, height } = Dimensions.get('window');
      setOrientation(width > height ? 'Landscape' : 'Portrait');
    };

    Dimensions.addEventListener('change', updateOrientation);

    return () => {
      Dimensions.removeEventListener('change', updateOrientation);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Orientation: {orientation}</Text>
      <Text style={styles.text}>
        Platform: {Platform.OS === 'ios' ? 'iOS' : 'Android'}
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

These examples cover various methods for detecting orientation changes in React Native using `Dimensions`, `useWindowDimensions`, and `onLayout`. They also include platform-specific adjustments and handling of potential issues on Android by modifying the `AndroidManifest.xml` file.