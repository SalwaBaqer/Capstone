import React from "react";

// mobx
import { observer } from "mobx-react";

//native
import { ListItem, Text } from "native-base";

//stores
import friendStore from "../../stores/friendStore";

//styles
import { ButtonStyledAccept, ButtonStyledDecline } from "./styles";

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
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>
        {friendUsername}{" "}
      </Text>
      <Text style={{ fontSize: 16 }}> has requested to add you. </Text>

      <ButtonStyledAccept onPress={handleAccept}>
        <Text>Accept</Text>
      </ButtonStyledAccept>
      <ButtonStyledDecline onPress={handleDecline}>
        <Text>Decline</Text>
      </ButtonStyledDecline>
    </ListItem>
  );
};

export default observer(ActivityItem);
