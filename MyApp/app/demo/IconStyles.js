import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {MaterialCommunityIcons} from '@expo/vector-icons'

const IconStyles = () => {
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <MaterialCommunityIcons name='home' size={200} color="dodgerblue" />
    </View>
  )
}

export default IconStyles

const styles = StyleSheet.create({})