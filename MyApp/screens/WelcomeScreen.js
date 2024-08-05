import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
    </ImageBackground>
  );
}

export default WelcomeScreen

const styles = StyleSheet.create({
  background: {
        flex: 1
    },
    loginButton: {
        width: '100%',
        height: "70%"
    }
})