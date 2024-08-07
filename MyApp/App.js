import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MessagesScreen from './app/screens/MessagesScreen';

const App = () => {
  return <MessagesScreen />;
}

export default App

const styles = StyleSheet.create({})


// import { StyleSheet, Text, View } from "react-native";
// import React from "react";
// import WelcomeScreen from "./app/screens/WelcomeScreen";
// import ViewImageScreen from "./app/screens/ViewImageScreen";
// import Demo from "./app/demo/Demo";
// import TextStyling from "./app/demo/TextStyling";
// import IconStyles from "./app/demo/IconStyles";
// import AppButton from "./app/demo/AppButton";
// import Card from "./app/demo/Card";
// import MessagesScreen from "./app/screens/MessagesScreen";

// function App() {
//   return <MessagesScreen />;


//   // return (
//   //   <MessagesScreen />
//     // <View style={{ backgroundColor: "#f8f4f4", padding:20, paddingTop: 100 }}>
//     //   <Card
//     //     title="Pie Chart"
//     //     subTitle="Metics"
//     //     imageSource={require("./app/assets/jacket.jpg")}
//     //   />
//     // </View>
//   //)
//   // return <WelcomeScreen />;
//   // return <ViewImageScreen />;
//   // return <Demo />;
//   // return <TextStyling />
//   // return <IconStyles />
//   // return (
//   //   // <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
//   //   //     {/* <AppButton title="Login" onPress={() => console.log("Button Tapped")}/> */}

//   //   //     <Card  title="Pie Chart" subTitle="Metics" imageSource={require("./app/assets/jacket.jpg")}/>
//   //   // </View>
//     // <View style={{ backgroundColor: "#f8f4f4", padding:20, paddingTop: 100 }}>
//     //   <Card
//     //     title="Pie Chart"
//     //     subTitle="Metics"
//     //     imageSource={require("./app/assets/jacket.jpg")}
//     //   />
//     // </View>
//   // );
// }

// export default App;

// const styles = StyleSheet.create({});

// // import React, { useState } from "react";
// // import {
// //   StyleSheet,
// //   Text,
// //   Image,
// //   View,
// //   Button,
// //   SafeAreaView,
// //   Alert,
// //   Dimensions,
// //   TouchableWithoutFeedback,
// //   TouchableOpacity,
// //   TouchableHighlight,
// //   TouchableNativeFeedback,
// //   Platform,
// //   StatusBar,
// // } from "react-native";

// // import {
// //   useDimensions,
// //   useDeviceOrientation,
// // } from "@react-native-community/hooks";

// // export default function App() {
// //   console.log(Dimensions.get("window"));

// //   // let x;
// //   // x.toString()
// //   //console.log(require('./assets/icon.png'))
// //   // const handlePress = () => console.log("Button Pressed");
// //   const handlePress = () =>
// //     Alert.alert("My Title", "My Message", [
// //       { text: "Yes", onPress: () => console.log("Yes") },
// //       { text: "No", onPress: () => console.log("No") },
// //     ]);

// //   // console.log(useDeviceOrientation());
// //   // const { landscape } = useDeviceOrientation();
// //   return (
// //     <View
// //       style={{
// //         backgroundColor: "#fff",
// //         flex: 1,
// //         flexDirection: "row", // horizontal
// //         justifyContent: "center", //main
// //         alignItems: "center", //secondary
// //         alignContent: "center",
// //         // flexWrap: "wrap-reverse"
// //       }}
// //     >
// //         <View
// //           style={{
// //             backgroundColor: "dodgerblue",
// //             width: 100,
// //             height: 100,
// //             bottom: 20,
// //             right: 20,
// //             position: "absolute"
// //           }}
// //         ></View>
// //         <View
// //           style={{
// //             backgroundColor: "tomato",
// //             width: 100,
// //             height: 100
// //           }}
// //         ></View>

// //         <View
// //           style={{
// //             backgroundColor: "gold",
// //             width: 100,
// //             height: 100
// //           }}
// //         ></View>
// //     </View>
// //     // <SafeAreaView style={styles.container}>

// //     //   <View  style={{
// //     //     backgroundColor: 'dodgerblue',
// //     //     width: "100%",
// //     //     height: landscape ? "100%": "30%"
// //     //   }}>

// //     //   </View>
// //     // </SafeAreaView>
// //     // <View style={[styles.container, containerStyle]}>
// //     //   {/* StyleSheet */}
// //     //   <Button title="click me" />
// //     // </View>

// //     // <SafeAreaView style={styles.container}>

// //     //     <Button color="tomato" title="Click Me" onPress={
// //     //       () => Alert.prompt("My Title", "My Message", text => console.log(text))
// //     //     }/>
// //     // </SafeAreaView>
// //     // <SafeAreaView style={styles.container}>
// //     //   <Text numberOfLines={1} onPress={handlePress}>
// //     //     Click Me
// //     //   </Text>
// //     //   {/* <Image source={require('./assets/icon.png')} /> */}

// //     //   <TouchableNativeFeedback>
// //     //     <View style={{width: 200, height: 70, backgroundColor: "dodgerblue"}}>

// //     //     </View>
// //     //   </TouchableNativeFeedback>
// //     //   <TouchableNativeFeedback onPress={() => console.log("Image Pressed")} >
// //     //     <Image
// //     //       // blurRadius={10}
// //     //       fadeDuration={1000}
// //     //       source={{
// //     //         width: 200,
// //     //         height: 300,
// //     //         uri: "https://picsum.photos/200/300",
// //     //       }}
// //     //     />
// //     //   </TouchableNativeFeedback>

// //     //   {/* <Text numberOfLines={1} onPress={() => console.log("message")}>  */}
// //     //   {/* <Text numberOfLines={1} onPress={handlePress}>
// //     //       Welcome to React Native. Welcome to React Native.
// //     //       Welcome to React Native. Welcome to React Native. Welcome to React Native.
// //     //       Welcome to React Native. Welcome to React Native. Welcome to React Native.
// //     //       Welcome to React Native. Welcome to React Native.
// //     //   </Text>  */}
// //     // </SafeAreaView>
// //   );
// // }

// // const containerStyle = {
// //   backgroundColor: "tomato",
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: "#012",
// //     // justifyContent: "center",
// //     // alignItems: "center",
// //     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
// //   },
// //   myImage: {},
// // });
