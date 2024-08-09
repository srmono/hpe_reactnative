import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

const NestedScroll = () => {
  return (
    <ScrollView style={styles.outerContainer}>
      <View style={styles.innerContainer}>

        <ScrollView style={styles.innerSroll} horizontal>
            <Text> horizontal ScrollView </Text>
            <Text> horizontal ScrollView </Text>
            <Text> horizontal ScrollView </Text>
            <Text> horizontal ScrollView </Text>
        </ScrollView>

        {/* Vertical scroll */}
        <View style={styles.content}>
            <Text> Vertical  ScrollView </Text>
            <Text> Vertical  ScrollView </Text>
            <Text> Vertical  ScrollView </Text>
            <Text> Vertical  ScrollView </Text>
            <Text> Vertical  ScrollView </Text>
            <Text> Vertical  ScrollView </Text>
        </View>

      </View>
    </ScrollView>
  )
}

export default NestedScroll

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        padding:20
    },
    innerContainer: {
        flex: 1
    },
    innerSroll: {
        height: 100,
        backgroundColor: "#f4f4f4",
        marginBottom: 20
    },
    content: {
        flex: 1
    }
})