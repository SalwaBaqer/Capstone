import React, { useState } from "react";

// mobx
import { observer } from "mobx-react";

//react-native
import { Title } from "react-native-paper";
import { TouchableOpacity } from "react-native";

//stores
import eventStore from "../../stores/eventStore";

//styles
import {
  ItemWrapper,
  Dotsiconstyled,
  MaterialIconstyled,
  TextStyled,
} from "./styles";

const Item = ({ event }) => {
  const [menu, setMenu] = useState(true);

  const handleEdit = () => {
    setMenu(true);
    // navigation.navigate("EditEventScreen");
  };

  const handleDelete = () => {
    setMenu(true);
    eventStore.deleteEvent(event.id);
  };
  return (
    //for detail page

    // <TouchableOpacity onPress={}>
    <ItemWrapper>
      {menu ? (
        <Dotsiconstyled
          name="dots-horizontal"
          size={24}
          color="gray"
          onPress={() => setMenu(false)}
        />
      ) : (
        <>
          <MaterialIconstyled
            name="edit"
            size={24}
            color="blue"
            onPress={handleEdit}
          />
          <MaterialIconstyled
            name="delete"
            size={24}
            color="red"
            onPress={handleDelete}
          />
          <TextStyled onPress={() => setMenu(true)}>Cancel</TextStyled>
        </>
      )}

      <Title>{event.name}</Title>
      <Title>{event.label}</Title>
      <Title>{event.date}</Title>
    </ItemWrapper>
    // </TouchableOpacity>
  );
};

export default observer(Item);
