import React from "react";

import { Title } from "react-native-paper";
import { Image } from "react-native";

// mobx
import { observer } from "mobx-react";
import { DetailWrapper } from "./styles";

const EventDetailScreen = ({ navigation, route }) => {
  const { event } = route.params;

  return (
    <DetailWrapper>
      <Title>{event.name}</Title>
      <Title>{event.label}</Title>
      <Title>with @{event.tag}</Title>
      <Image
        source={{ uri: event.image }}
        style={{ width: 100, height: 100 }}
      />
    </DetailWrapper>
  );
};

export default observer(EventDetailScreen);
