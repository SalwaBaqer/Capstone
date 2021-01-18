import React from "react";

// mobx
import { observer } from "mobx-react";

import { Button, ListItem, Text } from "native-base";
import friendStore from "../../stores/friendStore";

const ActivityItem = ({ friendUsername, friendId, navigation }) => {
  const handleAccept = async () => {
    await friendStore.AcceptFriendReq(friendId);
    // navigation.navigate("Profile");
  };

  const handleDecline = async () => {
    await friendStore.DeclineFriendReq(friendId);
  };

  return (
    <ListItem>
      <Text>{friendUsername} has requested to add you. </Text>
      <Button onPress={handleAccept}>
        <Text>Accept</Text>
      </Button>
      <Button onPress={handleDecline}>
        <Text>Decline</Text>
      </Button>
    </ListItem>
  );
};

export default observer(ActivityItem);
