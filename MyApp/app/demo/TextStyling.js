import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from '../components/AppText'
// import AppText from '../components/AppText'

const TextStyling = () => {
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <AppText> Welcome to HPE Anylitics Portal</AppText>
    </View>
  )
}

const styles = StyleSheet.create({})

export default TextStyling

