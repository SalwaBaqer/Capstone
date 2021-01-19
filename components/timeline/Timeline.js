import React from "react";
import Schedule from "../Schedule";
import { observer } from "mobx-react";
import { Spinner } from "native-base";

//Stores
import eventStore from "../../stores/eventStore";
import authStore from "../../stores/authStore";

const Timeline = ({ navigation }) => {
  if (!authStore.user) return <Spinner />;

  const exploreEvents = eventStore.events.filter(
    (event) => authStore.user.friends.includes(event.userId) && !event.isPrivate
  );

  const timeline = true;

  return (
    <>
      <Schedule
        navigation={navigation}
        exploreEvents={exploreEvents}
        timeline={timeline}
        isExplore={true}
      />
    </>
  );
};

export default observer(Timeline);
