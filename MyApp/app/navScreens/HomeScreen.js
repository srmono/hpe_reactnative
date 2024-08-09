import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import Screen from '../demo/Screen'

const HomeScreen = ({navigation}) => {
  return (
   <Screen>
    <Text> Home Screen </Text>
    <Button title='Go to Details' onPress={ () => navigation.navigate("Details")} />
    <Button title='Open Modal' onPress={ () => navigation.navigate("Modal")} />
   </Screen>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})