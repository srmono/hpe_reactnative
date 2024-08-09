import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import Screen from '../demo/Screen'

const ModalScreen = ({navigation}) => {
  return (
    <Screen>
      <Text>ModalScreen</Text>
      <Button title='Close Modal' onPress={ () => navigation.goBack()} />
    </Screen>
  )
}

export default ModalScreen

const styles = StyleSheet.create({})