import React from "react";

// mobx
import { observer } from "mobx-react";

import { Button, ListItem, Text } from "native-base";
import friendStore from "../../stores/friendStore";
import LikeButton from "../buttons/LikeButton";

const ActivityItem = ({ friendUsername, friendId, navigation }) => {
  const handleAccept = async () => {
    await friendStore.AcceptFriendReq(friendId);
    // navigation.navigate("Profile");
  };

  const handleDecline = async () => {
    await friendStore.DeclineFriendReq(friendId);
  };
  // not working cuz friendId is not the auth user id its the id for the actionUser
  console.log(friendId);

  return (
    <ListItem>
      <Text>{friendUsername} has requested to add you. </Text>
      {/* <LikeButton></LikeButton> */}
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
