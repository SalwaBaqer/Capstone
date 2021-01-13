import React, { useState } from "react";

// mobx
import { observer } from "mobx-react";

//react-native
import { Title } from "react-native-paper";
import { TouchableOpacity } from "react-native";

//styles
import { Ioniconstyled, AntDesignstyled, ItemWrapper } from "./styles";

//store
import friendStore from "../../stores/friendStore";

const Item = ({ event, navigation }) => {
  const [addFriend, setAddFriend] = useState(true);

  const handleAddFriend = () => {
    if (addFriend) {
      friendStore.SendFriendReq(event.userId);
      setAddFriend(false);
    } else {
      friendStore.WithdrawFriendReq(event.userId);
      setAddFriend(true);
    }
  };

  return (
    //for detail page

    <TouchableOpacity
      onPress={() => navigation.navigate("EventDetailScreen", { event: event })}
    >
      <ItemWrapper>
        {addFriend ? (
          <Ioniconstyled
            name={"md-person-add"}
            size={30}
            color="#2596be"
            onPress={handleAddFriend}
          />
        ) : (
          <AntDesignstyled
            name={"clockcircle"}
            size={30}
            color="#2596be"
            onPress={handleAddFriend}
          />
        )}

        <Title>{event.name}</Title>
        <Title>{event.label}</Title>
        <Title>{event.date}</Title>
      </ItemWrapper>
    </TouchableOpacity>
  );
};

export default observer(Item);
