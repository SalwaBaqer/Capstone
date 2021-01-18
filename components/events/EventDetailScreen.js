import React, { useState } from "react";

import { Title } from "react-native-paper";
import { Image } from "react-native";
import { Right } from "native-base";

// mobx
import { observer } from "mobx-react";
import { DetailWrapper } from "./styles";

//Stores
import eventStore from "../../stores/eventStore";

//styles
import { Dotsiconstyled, MaterialIconstyled, TextStyled } from "./styles";

const EventDetailScreen = ({ navigation, route }) => {
  const { event } = route.params;
  const [menu, setMenu] = useState(true);

  const handleEdit = (event) => {
    setMenu(true);
    navigation.navigate("EditEventScreen", { oldEvent: event });
  };

  const handleDelete = (event) => {
    setMenu(true);
    eventStore.deleteEvent(event.id);
  };

  return (
    <DetailWrapper>
      {menu ? (
        <Dotsiconstyled
          name="dots-horizontal"
          size={24}
          color="gray"
          onPress={() => setMenu(false)}
        />
      ) : (
        <>
          <TextStyled onPress={() => setMenu(true)}>Cancel</TextStyled>
          <MaterialIconstyled
            name="edit"
            size={24}
            color="blue"
            onPress={() => handleEdit(event)}
          />
          <MaterialIconstyled
            name="delete"
            size={24}
            color="red"
            onPress={() => handleDelete(event)}
          />
        </>
      )}
      <Title>{event.name}</Title>
      <Title>{event.label}</Title>
      <Title>{event.date}</Title>
      <Title>with @{event.tag}</Title>
      <Image
        source={{ uri: event.image }}
        style={{ width: 100, height: 100 }}
      />
    </DetailWrapper>
  );
};

export default observer(EventDetailScreen);
