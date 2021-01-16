//Libraries
import React, { useState } from "react";
import { observer } from "mobx-react";
import { Spinner, Text } from "native-base";

//Components
import Schedule from "../Schedule";

//Stores
import authStore from "../../stores/authStore";
import profileStore from "../../stores/profileStore";
import eventStore from "../../stores/eventStore";
import friendStore from "../../stores/friendStore";

//Styles
import {
  ProfileWrapper,
  ProfileImage,
  ProfileUsernameStyled,
  ProfileBio,
  NumberOfFriendsStyled,
  Ioniconstyled,
  AntDesignstyled,
} from "../../styles";

const TimelineProfile = ({ navigation, route }) => {
  const [addFriend, setAddFriend] = useState(true);
  const { userId } = route.params;

  const itemUser = authStore.getUserbyId(userId);

  profileStore.getProfileById(userId);

  const userProfile = profileStore.profiles;

  if (profileStore.loading) return <Spinner />;

  const profileEvents = eventStore.events.filter(
    (event) => event.userId === userId
  );
  const handleAddFriend = () => {
    if (addFriend) {
      friendStore.SendFriendReq(userId);
      setAddFriend(false);
    } else setAddFriend(true);
  };

  return (
    <>
      <ProfileWrapper style={{ marginBottom: 20 }}>
        <ProfileImage source={{ uri: userProfile.image }} />
        <ProfileUsernameStyled>@{itemUser.username}</ProfileUsernameStyled>
        <ProfileBio>{userProfile.bio}</ProfileBio>
        <NumberOfFriendsStyled># of Friends</NumberOfFriendsStyled>
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
      </ProfileWrapper>
      <Schedule navigation={navigation} exploreEvents={profileEvents} />
    </>
  );
};

export default TimelineProfile;
