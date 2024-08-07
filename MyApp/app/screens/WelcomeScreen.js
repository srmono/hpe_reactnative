import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../config/colors';
import AppButton from '../demo/AppButton';

function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
        <View style={styles.logoContainer}>
            <Image style={styles.logo}  source={require("../assets/hpe-logo.png")}/>
            <Text style={styles.tagline}>Welcome to HPE Analytics</Text>
        </View>
        <View style={styles.buttonContainer}>
            <AppButton title="Login" />
            <AppButton title="Register" color='secondary' />
        </View>
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
    buttonContainer: {
        padding: 20,
        width: "100%"
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
        width: 270,
        height: 100
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: 'center'
    },
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingHorizontal: 20
    }
})