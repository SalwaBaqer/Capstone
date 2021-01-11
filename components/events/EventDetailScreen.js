import React from "react";

import { Title } from "react-native-paper";
import { Image } from "react-native";

// mobx
import { observer } from "mobx-react";
import { DetailWrapper } from "./styles";

//style

const EventDetailScreen = ({ route }) => {
  const { event } = route.params;

  return (
    <DetailWrapper>
      <Title>{event.name}</Title>
      <Title>{event.label}</Title>
      <Title>{event.date}</Title>
      <Image source={{ uri: event.image }} />
    </DetailWrapper>
  );
};

export default observer(EventDetailScreen);
