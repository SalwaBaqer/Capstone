import React from "react";
import { useNavigation } from "@react-navigation/native";

// mobx
import { observer } from "mobx-react";

//native
import { ListItem, Text } from "native-base";

//stores
import friendStore from "../../stores/friendStore";


//styles
import { ButtonStyledAccept, ButtonStyledDecline } from "./styles";


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
        {friendUsername}{" "}
      </Text>
      <Text style={{ fontSize: 16 }}> has requested to add you. </Text>

      <ButtonStyledAccept onPress={handleAccept}>
        <Text>Accept</Text>
      </ButtonStyledAccept>
      <ButtonStyledDecline onPress={handleDecline}>
        <Text>Decline</Text>
      </ButtonStyledDecline>
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
