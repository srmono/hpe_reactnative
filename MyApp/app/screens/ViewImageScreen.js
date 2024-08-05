import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'

 function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image 
        style={styles.image}
        resizeMode='contain'
        source={require("../assets/chair.jpg")}
        />
    </View>
  )
}

export default ViewImageScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#040B10",
    flex: 1 
  },
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 40,
    left: 30
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: "absolute",
    top: 40,
    right: 30
  },
  image: {
    width: "100%",
    height: "100%"
  }
})