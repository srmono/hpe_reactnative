Flexbox is a layout model used in React Native to design complex layouts and handle alignment, direction, and distribution of space within containers. It's similar to CSS Flexbox but tailored for mobile development. Here's a comprehensive guide to using Flexbox in React Native, with basic to advanced examples.

### Basic Flexbox Concepts

1. **Container and Items**
   - `flexDirection`: Defines the primary axis (`row` or `column`).
   - `justifyContent`: Aligns items along the primary axis.
   - `alignItems`: Aligns items perpendicular to the primary axis.
   - `alignSelf`: Aligns a single item perpendicular to the primary axis.

2. **Flexbox Properties**

   - **`flexDirection`**: Defines the direction of items within the container.
     - `row`: Horizontal direction.
     - `column`: Vertical direction.
   
   - **`justifyContent`**: Aligns items along the main axis.
     - `flex-start`: Start of the container.
     - `center`: Center of the container.
     - `flex-end`: End of the container.
     - `space-between`: Distributes space between items.
     - `space-around`: Distributes space around items.
   
   - **`alignItems`**: Aligns items perpendicular to the main axis.
     - `flex-start`: Start of the cross-axis.
     - `center`: Center of the cross-axis.
     - `flex-end`: End of the cross-axis.
     - `stretch`: Stretch to fill the container.
   
   - **`flex`**: Defines how a flex item grows relative to others.
     - `flex: 1` makes the item grow to fill the available space.
   
   - **`alignSelf`**: Overrides the `alignItems` value for a single item.
     - `auto`, `flex-start`, `center`, `flex-end`, `stretch`

### Basic Examples

**Example 1: Basic Flexbox Layout**

```jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}><Text>Box 1</Text></View>
      <View style={styles.box2}><Text>Box 2</Text></View>
      <View style={styles.box3}><Text>Box 3</Text></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // Horizontal layout
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box3: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
```

**Example 2: Vertical Layout with Flex**

```jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text>Item 1</Text>
      </View>
      <View style={styles.box}>
        <Text>Item 2</Text>
      </View>
      <View style={styles.box}>
        <Text>Item 3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', // Vertical layout
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
```

### Advanced Flexbox Examples

**Example 3: Nested Flexbox Layouts**

```jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.box}><Text>1</Text></View>
        <View style={styles.box}><Text>2</Text></View>
      </View>
      <View style={styles.row}>
        <View style={styles.box}><Text>3</Text></View>
        <View style={styles.box}><Text>4</Text></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 10,
  },
  box: {
    width: 80,
    height: 80,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
```

**Example 4: Flex with Grow, Shrink, and Basis**

```jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}><Text>Box 1</Text></View>
      <View style={styles.box2}><Text>Box 2</Text></View>
      <View style={styles.box3}><Text>Box 3</Text></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box1: {
    flex: 1, // Grow to fill available space
    backgroundColor: 'cyan',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  box2: {
    flex: 2, // Grow more compared to box1 and box3
    backgroundColor: 'magenta',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  box3: {
    flex: 1, // Grow to fill available space
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
});

export default App;
```

**Example 5: Flexbox with `alignSelf`**

```jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.box, styles.box1]}>Box 1</Text>
      <Text style={[styles.box, styles.box2]}>Box 2</Text>
      <Text style={[styles.box, styles.box3]}>Box 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  box: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'teal',
  },
  box1: {
    alignSelf: 'flex-start',
  },
  box2: {
    alignSelf: 'center',
  },
  box3: {
    alignSelf: 'flex-end',
  },
});

export default App;
```

### Common Issues and Fixes

- **Issue: Items Overlapping**
  - **Fix:** Ensure proper use of `flexDirection`, `justifyContent`, and `alignItems` to control the layout and spacing of items. Avoid fixed sizes that might lead to overlapping.

- **Issue: Flex Items Not Stretching**
  - **Fix:** Use `alignItems: 'stretch'` on the container to make flex items stretch to fill the container.

- **Issue: Layout Jumping on Orientation Change**
  - **Fix:** Ensure the container and items use percentage-based widths/heights rather than fixed sizes to accommodate orientation changes.

### Summary

Flexbox in React Native provides a powerful way to create responsive and adaptive layouts. It allows you to handle various layout scenarios efficiently using properties like `flexDirection`, `justifyContent`, `alignItems`, and `flex`. Understanding how to use these properties effectively can help you build complex and flexible UIs in React Native.