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
import { List, Text } from "native-base";

const ActivityList = ({ navigation }) => {
  const friendList = friendStore.friends.filter(
    (friend) => friend.user2Id === authStore.user.id && friend.status === 0
  );

  const user = authStore.users.filter(
    (user) => user.id === friendList[0].actionUser
  );

  console.log("action user ", user);

  return <ScrollView></ScrollView>;
};

export default observer(ActivityList);
