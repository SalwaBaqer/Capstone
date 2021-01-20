import React from "react";

// mobx
import { observer } from "mobx-react";

//stores
import friendStore from "../../stores/friendStore";
import authStore from "../../stores/authStore";
import eventStore from "../../stores/eventStore";

//components
import ActivityItem from "./ActivityItem";

//native
import { ScrollView } from "react-native-gesture-handler";
import { List, Spinner } from "native-base";

const ActivityList = () => {
  if (!authStore.user) return <Spinner />;

  if (friendStore.loading) return <Spinner />;

  // Friend Requests
  const friendList = friendStore.friends
    .filter(
      (friend) => friend.user2Id === authStore.user.id && friend.status === 0
    )
    .map((friend) => ({
      friend,
      user: authStore.users.find((user) => user.id === friend.user1Id),
    }));

  // Tags
  const taggedByUsername = eventStore.events
    .filter((event) => event.tag === authStore.user.username)
    .map((event) => ({
      event,
      username: authStore.users.find((user) => user.id === event.userId)
        .username,
    }));
  const friendlist_ = friendList.map((friend) => (
    <ActivityItem
      friendUsername={friend.user.username}
      friendId={friend.friend.user1Id}
      key={friend.user.id}
      isFriend={true}
    />
  ));

  const taggedByUsername_ = taggedByUsername.map((event) => (
    <ActivityItem username={event.username} event={event} key={event.id} />
  ));

  return (
    <ScrollView>
      <List>{friendlist_}</List>
      <List>{taggedByUsername_}</List>
    </ScrollView>
  );
};

export default observer(ActivityList);
