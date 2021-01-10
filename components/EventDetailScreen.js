import React from "react";

import { View } from "native-base";
import { Title } from "react-native-paper";
import { Image } from "react-native";

// mobx
import { observer } from "mobx-react";

const EventDetailScreen = ({ route }) => {
  const { event } = route.params;
  console.log(event);
  return (
    <View>
      <Title>{event.name}</Title>
      <Title>{event.label}</Title>
      <Title>{event.date}</Title>
      <Image source={{ uri: event.image }} />
    </View>
  );
};

export default observer(EventDetailScreen);
