The `Image` component in React Native is used for displaying images. It supports various props and methods for customizing the display of images. Here are some basic to advanced examples showcasing its usage:

### Basic Usage

**Example 1: Basic Image Component**
```jsx
import React from 'react';
import { Image, View } from 'react-native';

const App = () => {
  return (
    <View>
      <Image 
        source={{ uri: 'https://example.com/image.png' }}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
};

export default App;
```

### Styling Images

**Example 2: Styling Image with Inline Styles**
```jsx
import React from 'react';
import { Image, View } from 'react-native';

const App = () => {
  return (
    <View>
      <Image 
        source={{ uri: 'https://example.com/image.png' }}
        style={{ width: 200, height: 200, borderRadius: 20 }}
      />
    </View>
  );
};

export default App;
```

**Example 3: Styling Image with Stylesheet**
```jsx
import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View>
      <Image 
        source={{ uri: 'https://example.com/image.png' }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    borderRadius: 20,
  },
});

export default App;
```

### Using Props

**Example 4: Using Resize Mode Prop**
```jsx
import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://example.com/image.png' }}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default App;
```

### Local Images

**Example 5: Displaying Local Images**
```jsx
import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('./path/to/local/image.png')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default App;
```

### Using Image Background

**Example 6: Image Background**
```jsx
import React from 'react';
import { ImageBackground, Text, View, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={{ uri: 'https://example.com/background.png' }}
        style={styles.background}
      >
        <Text style={styles.text}>Hello, World!</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;
```

### Handling Image Loading

**Example 7: Handling Image Loading Events**
```jsx
import React, { useState } from 'react';
import { Image, View, StyleSheet, ActivityIndicator } from 'react-native';

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      <Image 
        source={{ uri: 'https://example.com/image.png' }}
        style={styles.image}
        onLoad={() => setLoading(false)}
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
  image: {
    width: 200,
    height: 200,
  },
});

export default App;
```

### Using Image Methods

**Example 8: Prefetching Images**
```jsx
import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

const App = () => {
  React.useEffect(() => {
    Image.prefetch('https://example.com/image.png');
  }, []);

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://example.com/image.png' }}
        style={styles.image}
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
  image: {
    width: 200,
    height: 200,
  },
});

export default App;
```

These examples cover the basics and some advanced features of the `Image` component in React Native, demonstrating how to display images, style them, use props and methods, handle local images, use image backgrounds, and manage image loading events.