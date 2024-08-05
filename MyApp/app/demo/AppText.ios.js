import { StyleSheet, Text } from 'react-native'
import React from 'react'


const AppText = ({children, pstyles}) => {
  return (
      <Text style={[styles.text, pstyles]}>{children}</Text>
  )
}

export default AppText

const styles = StyleSheet.create({
    text: {
        color: "tomato",
        fontSize: 20,
        fontFamily: "Avenir"
    }
})
