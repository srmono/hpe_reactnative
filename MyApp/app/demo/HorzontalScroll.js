import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'

const images = [
    {id: '1', src: "https://via.placeholder.com/150"},
    {id: '2', src: "https://via.placeholder.com/150"},
    {id: '3', src: "https://via.placeholder.com/150"},
    {id: '4', src: "https://via.placeholder.com/150"},
    {id: '5', src: "https://via.placeholder.com/150"}
]
const HorzontalScroll = () => {
  return (
    <ScrollView
        horizontal
        contentContainerStyle={styles.container}
        showsHorizontalScrollIndicator={false}
    >
      {
        images.map(image => (
            <View key={image.id} style={styles.item}>
                <Image source={{uri:image.src}} style={styles.image} />
            </View>
        ))
      }
    </ScrollView>
  )
}

export default HorzontalScroll

const styles = StyleSheet.create({
    container:{
        flexDirection: "row"
    },
    item: {
        marginRight: 10
    },
    image: {
        width: 150,
        height: 150
    }
})