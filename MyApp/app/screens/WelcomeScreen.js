import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../config/colors';

function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
        <View style={styles.logoContainer}>
            <Image style={styles.logo}  source={require("../assets/icon.png")}/>
            <Text>Welcome to HPE Analytics</Text>
        </View>
        <View style={styles.loginButton}></View>
        <View style={styles.registerButton}></View>
    </ImageBackground>
  )
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end"
    },
    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: colors.primary
    },
    registerButton: {
        width: "100%",
        height: 70,
        backgroundColor: colors.secondary
    },
    logo: {
        width: 100,
        height: 100
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: 'center'
    }
})