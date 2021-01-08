import React from "react";

// mobx
import { observer } from "mobx-react";

//stores
import eventStore from "../../stores/eventStore";

//components
import Item from "./Item";

//styles
import { AddButtonStyled } from "./styles";

//react-native
import { Title } from "react-native-paper";

const List = () => {
  const mylist = eventStore.events.map((event) => <Item event={event} />);
  console.log(mylist);

  return (
    <>
      {/* <AddButtonStyled type="Ionicons" name="add-circle-outline" /> */}
      <Title onPress={() => handleAdd}>Add</Title>
      {mylist}
    </>
  );
};

export default observer(List);
