import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

const data = Array.from({length: 45}, (_, index) => `Item ${index + 1}`)

const VerticalScroll = () => {

  return (
    <ScrollView style={styles.container}>
        {data.map( (item, index) => (
            <View key={index} style={styles.item}>
                <Text> {item} </Text>
            </View>
        ))}
    </ScrollView>
  )
}

export default VerticalScroll

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20
    },
    item: {
        paddingTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc"
    }
})