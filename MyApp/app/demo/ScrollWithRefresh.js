import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { RefreshControl } from 'react-native-gesture-handler'

const ScrollWithRefresh = () => {

  return (
    <ScrollView 
        style={styles.container}
        refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
    >
      <View>
        <Text> data</Text>
      </View>
    </ScrollView>
  )
}

export default ScrollWithRefresh

const styles = StyleSheet.create({})