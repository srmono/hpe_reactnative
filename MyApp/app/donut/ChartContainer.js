import {ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import DonutChart from './src/components/DonutChart'
import { useFont } from '@shopify/react-native-skia'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useSharedValue, withTiming } from 'react-native-reanimated'
import { calculatePercentage } from './src/utils/calculatePercentage'
import { generateRandomNumbers } from './src/utils/generateRandomNumbers'
import RenderItem from './src/components/RenderItem'
import { SafeAreaView } from 'react-native-safe-area-context'


const RADIUS = 160;
const STROKE_WIDTH = 30;
const OUTER_STROKE_WIDTH = 46;
const GAP = 0.04;


const ChartContainer = () => {

  const n = 5;
  const [data, setData] = useState([]);
  const totalValue = useSharedValue(0);
  const decimals = useSharedValue([]);
  const colors = ["#333333", "#FFCC00", "#669966", "#993366", "#028482"]

  const generateData = () => {
    const generateNumbers = generateRandomNumbers(n);
    const total = generateNumbers.reduce(
      (acc, currentValue) => acc + currentValue,
      0
    );
    const generatePercentages = calculatePercentage(generateNumbers, total);
    const generateDecimals = generatePercentages.map(
      number => Number(number.toFixed(0)) / 100
    );
    totalValue.value = withTiming(total, { duration: 1000 });
    decimals.value = [...generateDecimals];

    const arrayOfObjects = generateNumbers.map((value, index) => ({
      value,
      percentage: generatePercentages[index],
      color: colors[index],
    }));

    setData(arrayOfObjects);
  };

  const font = useFont(require('./src/assets/fonts/Roboto-Bold.ttf'), 60);
  const smallFont = useFont(require('./src/assets/fonts/Roboto-Light.ttf'), 25);

  if (!font || !smallFont) {
    return <View />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{ alignItems: 'center' }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.chartContainer}>
          <DonutChart
            radius={RADIUS}
            gap={GAP}
            strokeWidth={STROKE_WIDTH}
            outerStrokeWidth={OUTER_STROKE_WIDTH}
            font={font}
            smallFont={smallFont}
            totalValue={totalValue}
            n={n}
            decimals={decimals}
            colors={colors}
          />
        </View>
        <TouchableOpacity onPress={generateData} style={styles.button}>
          <Text style={styles.buttonText}>Generate</Text>
        </TouchableOpacity>
        {data.map((item, index) => (
          <RenderItem item={item} key={index} index={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default ChartContainer

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  chartContainer: {
    width: RADIUS * 2,
    height: RADIUS * 2,
    marginTop: 10,
  },
  button: {
    marginVertical: 40,
    backgroundColor: '#f4f7fc',
    paddingHorizontal: 60,
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
  },
});