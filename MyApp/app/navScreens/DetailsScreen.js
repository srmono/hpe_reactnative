import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import Screen from '../demo/Screen'

const DetailsScreen = ({navigation}) => {
  return (
    <Screen>
        <Text> DEtails Screen</Text>
        <Button title='Go Back' onPress={ () => navigation.goBack()} />
    </Screen>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({})