import React from "react";
import { useNavigation } from "@react-navigation/native";

// mobx
import { observer } from "mobx-react";

//native
import { ListItem, Text } from "native-base";

//stores
import friendStore from "../../stores/friendStore";

//styles
import {
  ButtonStyledAccept,
  ButtonStyledDecline,
  ButtonStyledDetails,
} from "./styles";

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
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            {friendUsername}
          </Text>
          <Text style={{ fontSize: 16 }}> has requested to add you. </Text>

          <ButtonStyledAccept onPress={handleAccept}>
            <Text style={{ color: "white" }}>Accept</Text>
          </ButtonStyledAccept>
          <ButtonStyledDecline onPress={handleDecline}>
            <Text style={{ color: "white" }}>Decline</Text>
          </ButtonStyledDecline>
        </>
      ) : (
        <>
          <Text>{username} tagged you on an event!</Text>
          <ButtonStyledDetails
            onPress={() =>
              navigation.navigate("EventDetailScreen", { event: event })
            }
          >
            <Text style={{ color: "white" }}>Show Details</Text>
          </ButtonStyledDetails>
        </>
      )}
    </ListItem>
  );
};

export default observer(ActivityItem);
