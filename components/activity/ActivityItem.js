import React from "react";
import { useNavigation } from "@react-navigation/native";

// mobx
import { observer } from "mobx-react";

import { Button, ListItem, Text } from "native-base";
import friendStore from "../../stores/friendStore";

const ActivityItem = ({
  friendUsername,
  friendId,
  isFriend,
  username,
  event,
}) => {
  const navigation = useNavigation();

  const handleAccept = async () => {
    await friendStore.AcceptFriendReq(friendId);
  };
  const handleDecline = async () => {
    await friendStore.DeclineFriendReq(friendId);
  };

  return (
    <ListItem>
      {isFriend ? (
        <>
          <Text>{friendUsername} has requested to add you. </Text>
          <Button onPress={handleAccept}>
            <Text>Accept</Text>
          </Button>
          <Button onPress={handleDecline}>
            <Text>Decline</Text>
          </Button>
        </>
      ) : (
        <>
          <Text>{username} tagged you on an event!</Text>
          <Button
            onPress={() =>
              navigation.navigate("EventDetailScreen", { event: event })
            }
          >
            <Text>Show Details</Text>
          </Button>
        </>
      )}
    </ListItem>
  );
};

export default observer(ActivityItem);
