import React, { useState } from "react";

// mobx
import { observer } from "mobx-react";

//react-native
import { Title } from "react-native-paper";
import { TouchableOpacity } from "react-native";

//styles
import { ItemWrapper } from "./styles";

const Item = ({ event, navigation }) => {
  const [menu, setMenu] = useState(true);

  return (
    //for detail page

    <TouchableOpacity
      onPress={() => navigation.navigate("EventDetailScreen", { event: event })}
    >
      <ItemWrapper>
        <Title>{event.name}</Title>
        <Title>{event.label}</Title>
        <Title>{event.date}</Title>
      </ItemWrapper>
    </TouchableOpacity>
  );
};

export default observer(Item);
