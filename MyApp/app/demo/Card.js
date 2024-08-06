import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from './AppText'
import colors from '../config/colors'


const Card = ({title, subTitle, imageSource}) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={imageSource}/>
      <View style={styles.detailsContainer}>
         <AppText style={styles.title}> {title} </AppText>
         <AppText style={styles.subTitle}> {subTitle} </AppText>
      </View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        borderRadius: 15,
        marginBottom: 20,
        overflow: "hidden"
    },
    detailsContainer:{
        padding: 20
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: "bold"
    },
    title: {
        margin: 7,
        // color: colors.primary
    },
    image: {
      width: "100%",
      height: 200,
    },
})