import React from "react";

// mobx
import { observer } from "mobx-react";

//stores
import eventStore from "../../stores/eventStore";
import authStore from "../../stores/authStore";

//components
import ExploreEventItem from "./ExploreEventItem";
import { Spinner } from "native-base";
import { ScrollView } from "react-native-gesture-handler";

const ExploreEvents = ({ navigation }) => {
  if (eventStore.loading) return <Spinner />;
  if (!authStore.user) return <Spinner />;

  const explorelist = eventStore.events
    .filter((event) => event.userId !== authStore.user.id && !event.isPrivate)
    .map((event) => (
      <ExploreEventItem event={event} key={event.id} navigation={navigation} />
    ));

  return <ScrollView>{explorelist}</ScrollView>;
};

export default observer(ExploreEvents);
