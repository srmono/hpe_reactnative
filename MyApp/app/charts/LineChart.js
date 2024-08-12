import { Dimensions, StyleSheet, Text, View } from 'react-native'
import {LineChart}  from 'react-native-chart-kit'
import React, {useState, useEffect} from 'react'

const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
        {
            data: [10, 45, 28, 80, 90]
        }
    ]
}



const screenWidth = Dimensions.get('window').width

const LineChart = () => {
    //const [data, setData] = useState([])

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setData( prevData => {
    //             const newData = [...prevData.slice(1), Math.floor() ]
    //         })
    //     })
    // })
    
  return (
    <View>
      <Text> Line Chart</Text>

      <LineChart
        data= {data}
        width= {screenWidth - 10}
        height={200}
        yAxisLabel="$"
        chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
       />

    </View>
  )
}

export default LineChart

const styles = StyleSheet.create({})