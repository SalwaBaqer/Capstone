import React from "react";

// mobx
import { observer } from "mobx-react";

//react-native
import { Text, View } from "react-native";

const Item = ({ event }) => {
  return (
    <View>
      <Text>{event.name}</Text>
      <Text>{event.label}</Text>
      <Text>{event.date}</Text>
    </View>
  );
};

export default observer(Item);
