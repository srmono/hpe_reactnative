import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './styles'

const AppText = ({children, pstyles}) => {
  return (
    //   <Text style={[styles.text, pstyles]}>{children}</Text>
    <Text style={styles.text}>{children}</Text>
  )
}

export default AppText

// const styles = StyleSheet.create({
//     text: {
//         fontSize: 18,
//         fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
//     }
// })