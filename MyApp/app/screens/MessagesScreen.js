import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ListItem from "../demo/ListItem";
import Screen from "../demo/Screen";
import ListItemSeparator from "../demo/ListItemSeparator";
import ListItemDeleteAction from "../demo/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/user.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/user.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/user.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;



// const MessagesScreen = () => {
//     const [messages, setMessages] = useState(initalMessages)
//     const [refreshing, setRefreshing] = useState(false)

//   const handleDelete = (msg) => {
//     setMessages( messages.filter( (m) => m.id !== msg.id  ) )
//   }

//   const initalMessages = [
//     {
//       id: 1,
//       title: "T1",
//       description: "D1",
//       image: require("../assets/user.jpg"),
//     },
//     {
//       id: 2,
//       title: "T2",
//       description: "D2",
//       image: require("../assets/user.jpg"),
//     },
//   ];

//   return (
//     <Screen>
//       <FlatList
//         data={messages}
//         keyExtractor={(message) => message.id.toString()}
//         renderItem={({ item }) => (
//           <ListItem
//             title={item.title}
//             subTitle={item.description}
//             image={item.image}
//             onPress={() => console.log("Item Selected", item)}
//             renderRightActions={ () => (
//                 <ListItemDeleteAction onPress={() => handleDelete(item)} />
//             )}
//           />
//         )}

//         ItemSeparatorComponent = { ListItemSeparator }
//         refreshing={refreshing}
//         onRefresh={ () => {
//             setMessages(
//                 [{
//                     id: 2,
//                     title: "T2",
//                     description: "D2",
//                     image: require("../assets/user.jpg"),
//                   }]
//             )
//         }}
//       />
//     </Screen>
//   );
// };

// export default MessagesScreen;

// const styles = StyleSheet.create({});
