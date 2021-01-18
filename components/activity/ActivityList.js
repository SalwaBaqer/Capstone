import React from "react";

// mobx
import { observer } from "mobx-react";

//stores
import friendStore from "../../stores/friendStore";
import authStore from "../../stores/authStore";

//components
import ActivityItem from "./ActivityItem";

//native
import { ScrollView } from "react-native-gesture-handler";
import { List, Spinner, Text } from "native-base";

const ActivityList = ({ navigation }) => {
  if (friendStore.loading) <Spinner />;
  // We have to add a condition so that if a user doesn't have requests it shows a msg ?

  // Fetch Pending Friend Requests > to get username
  const friendList = friendStore.friends
    .filter(
      (friend) => friend.user2Id === authStore.user.id && friend.status === 0
    )
    .map((friend) => ({
      friend,
      user: authStore.users.find((user) => user.id === friend.user1Id),
    }));

  const friendlist_ = friendList.map((friend) => (
    <ActivityItem
      friendUsername={friend.user.username}
      friendId={friend.friend.user1Id}
      key={friend.user.id}
      navigation={navigation}
    />
  ));

  return (
    <ScrollView>
      <List>{friendlist_}</List>
    </ScrollView>
  );
};

export default observer(ActivityList);
