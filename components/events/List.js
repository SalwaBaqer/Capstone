import React from "react";

// mobx
import { observer } from "mobx-react";

//stores
import eventStore from "../../stores/eventStore";
import authStore from "../../stores/authStore";

//components
import Item from "./Item";
import { Spinner } from "native-base";
import { ScrollView } from "react-native-gesture-handler";

const List = ({ navigation }) => {
  if (eventStore.loading) <Spinner />;
  const mylist = eventStore.events
    .filter((event) => event.userId == authStore.user.id)
    .map((event) => (
      <Item event={event} key={event.id} navigation={navigation} />
    ));

  return <ScrollView>{mylist}</ScrollView>;
};

export default observer(List);
