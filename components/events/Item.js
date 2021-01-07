import React from "react";

// mobx
import { observer } from "mobx-react";

//react-native
import { Text, View, TouchableOpacity } from "react-native";
import { Title } from "react-native-paper";

//styles
import { ItemWrapper } from "./styles";

const Item = ({ event }) => {
  return (
    <ItemWrapper>
      <Title>{event.name}</Title>
      <Title>{event.label}</Title>
      <Title>{event.date}</Title>
    </ItemWrapper>
  );
};

export default observer(Item);
