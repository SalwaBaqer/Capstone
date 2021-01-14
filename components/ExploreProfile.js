//Libraries
import React, { useState } from "react";
import { observer } from "mobx-react";
import { Spinner, Text } from "native-base";

//Components
import MySchedule from "./MySchedule";

//Stores
import profileStore from "../stores/profileStore";
import eventStore from "../stores/eventStore";
import friendStore from "../stores/friendStore";

//Styles
import {
  ProfileWrapper,
  ProfileImage,
  ProfileUsernameStyled,
  ProfileBio,
  NumberOfFriendsStyled,
  Ioniconstyled,
  AntDesignstyled,
} from "../styles";

const ExploreProfile = ({ navigation, route }) => {
  const [addFriend, setAddFriend] = useState(true);
  const { user } = route.params;
  const { userId } = route.params;

  profileStore.getProfileById(userId ? userId : user.id);

  const userProfile = profileStore.profiles;

  if (profileStore.loading) return <Spinner />;

  const profileEvents = eventStore.events.filter((event) =>
    userId ? event.userId === userId : event.userId === user.id
  );
  const handleAddFriend = () => {
    if (addFriend) {
      friendStore.SendFriendReq(userId ? userId : user.id);
      setAddFriend(false);
    } else setAddFriend(true);
  };

  return (
    <>
      <ProfileWrapper style={{ marginBottom: 20 }}>
        <ProfileImage source={{ uri: userProfile.image }} />
        <ProfileUsernameStyled>
          {userId ? userId.username : user.id.username}
        </ProfileUsernameStyled>
        <ProfileBio>{userProfile.bio}</ProfileBio>
        <NumberOfFriendsStyled># of Friends</NumberOfFriendsStyled>
        <>
          {addFriend ? (
            <Ioniconstyled
              name={"md-person-add"}
              size={20}
              color="#2596be"
              onPress={handleAddFriend}
            />
          ) : (
            <AntDesignstyled
              name={"clockcircle"}
              size={20}
              color="#2596be"
              onPress={handleAddFriend}
            />
          )}
        </>
      </ProfileWrapper>
      <MySchedule navigation={navigation} exploreEvents={profileEvents} />
    </>
  );
};

export default observer(ExploreProfile);
