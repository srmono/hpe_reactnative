import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
//import styles from './AppText/styles'

const AppText = ({children, style}) => {
  return (
      <Text style={[styles.text, style]}>{children}</Text>
  )
}

export default AppText

const styles = StyleSheet.create({
    text: {
        color: "tomato",
        ...Platform.select({
            ios: {
                fontSize: 20,
                fontFamily: "Avenir"
            },
            android: {
                fontSize: 18,
                fontFamily: "Roboto"
            }
        })
    }
})


// const styles = StyleSheet.create({
//     text: {
//         fontSize: 18,
//         fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
//     }
// })