To set up platform-specific fonts in a React Native application, you need to handle font families for iOS and Android differently due to the way each platform manages fonts. Here’s how to configure and use custom fonts for both iOS and Android:

### 1. **Adding Custom Fonts**

#### **iOS**

1. **Add Font Files to Xcode**
   - Place your `.ttf` or `.otf` font files into the `ios` directory of your project, typically inside `ios/YourApp/Assets.xcassets`.

2. **Update `Info.plist`**
   - Open `Info.plist` in Xcode and add a new key called `Fonts provided by application` (or `UIAppFonts`).
   - Add the names of your font files (e.g., `MyCustomFont.ttf`).

   ```xml
   <key>UIAppFonts</key>
   <array>
       <string>MyCustomFont.ttf</string>
   </array>
   ```

#### **Android**

1. **Add Font Files to the Project**
   - Place your font files into the `android/app/src/main/assets/fonts` directory. Create the `fonts` directory if it doesn’t exist.

2. **Ensure Proper Directory Structure**
   - Make sure the font files are correctly placed in `assets/fonts`.

### 2. **Using Custom Fonts in React Native**

You can then use these fonts in your React Native styles. Here’s how to specify platform-specific fonts:

**Example Code:**

```jsx
import React from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.customText}>Hello, Custom Font!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customText: {
    fontSize: 20,
    fontFamily: Platform.select({
      ios: 'MyCustomFont', // iOS font family name (without extension)
      android: 'my_custom_font', // Android font file name (without extension)
    }),
  },
});

export default App;
```

### 3. **Platform-Specific Font Family Names**

- **iOS**: Use the name of the font as specified in the font file, not including the file extension.
  - Example: If your font file is named `MyCustomFont.ttf`, the font family name might be `MyCustomFont` (check using a tool like Font Book or by inspecting the font properties).

- **Android**: Use the font file name (excluding the extension) as the font family name.
  - Example: If your font file is named `my_custom_font.ttf`, you should use `my_custom_font`.

### 4. **Checking Font Names**

- **iOS**: To find the exact font family name, you can use macOS Font Book or programmatically list available fonts using a small script or code snippet in iOS.

- **Android**: The font family name is usually the filename without the extension. If you encounter issues, check the exact name using tools like Android Studio or by inspecting the font files.

### 5. **Troubleshooting**

- **iOS**: Ensure the font files are correctly added to the Xcode project and listed in `Info.plist`. Sometimes, cleaning the build or restarting Xcode might be necessary.
  
- **Android**: Ensure the fonts are placed in the correct directory and that the file names match what you use in your styles. Ensure the `assets` folder is correctly linked and built into the app.

### Summary

- **iOS**: Add fonts to `Assets.xcassets` and list them in `Info.plist`.
- **Android**: Place fonts in `android/app/src/main/assets/fonts`.
- **Use**: Define platform-specific font families using `Platform.select` in your styles.

