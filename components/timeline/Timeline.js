import React from "react";
import MySchedule from "../MySchedule";
import { observer } from "mobx-react";
import { Spinner } from "native-base";

//Stores
import eventStore from "../../stores/eventStore";
import authStore from "../../stores/authStore";
// import friendStore from "../../stores/friendStore";

const Timeline = ({ navigation }) => {
  if (!authStore.user) return <Spinner />;

  // const friendEvents = eventStore.events.filter(
  //   (event) => event.userId === authStore.user.friends && !event.isPrivate
  // );

  const exploreEvents = eventStore.events.filter(
    (event) => event.userId !== authStore.user.id && !event.isPrivate
  );
  const timeline = true;

  return (
    <>
      <MySchedule
        navigation={navigation}
        exploreEvents={exploreEvents}
        timeline={timeline}
      />
    </>
  );
};

export default observer(Timeline);
