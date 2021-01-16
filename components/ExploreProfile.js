//Libraries
import React, { useState } from "react";
import { observer } from "mobx-react";
import { Button, Spinner, Text } from "native-base";

//Components
import MySchedule from "./MySchedule";

//Stores
import authStore from "../stores/authStore";
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
import authStore from "../stores/authStore";
import { Title } from "react-native-paper";

const ExploreProfile = ({ navigation, route }) => {
  const [isPending, setIsPending] = useState(false);
  const { user } = route.params;
  const { userId } = route.params;

  const itemUser = authStore.getUserbyId(userId);

  profileStore.getProfileById(userId ? userId : user.id);

  const id = userId ? userId : user.id;
  const userProfile = profileStore.profiles;

  if (profileStore.loading || friendStore.loading) return <Spinner />;

  const profileEvents = eventStore.events.filter((event) =>
    userId ? event.userId === userId : event.userId === user.id
  );

  profileStore.getProfileById(userId ? userId : user.id);
  //find if req exist
  const foundreq = friendStore.friends.find(
    (friend) => friend.user2Id === id && friend.actionUser === authStore.user.id
  );

  //handle add and withdraw friendRequest
  const handleAddFriend = () => {
    if (!isPending) {
      friendStore.SendFriendReq(userId ? userId : user.id);
      setIsPending(true);
    } else {
      friendStore.WithdrawFriendReq(userId ? userId : user.id);
      setIsPending(false);
    }
  };

  //is Friend?
  const isFriend = () => {
    return authStore.user.friends.includes(id);
  };
  //handle remove friend  (unfollow)
  const handleRemoveFriend = () => {
    friendStore.DeleteFriend(userId ? userId : user.id);
  };

  return (
    <>
      <ProfileWrapper style={{ marginBottom: 20 }}>
        <ProfileImage source={{ uri: userProfile.image }} />
        <ProfileUsernameStyled>
          @{userId ? itemUser.username : user.username}
        </ProfileUsernameStyled>
        {/* <ProfileUsernameStyled>
          {userId ? userId.username : user.id.username}
        </ProfileUsernameStyled> */}
        <ProfileBio>{userProfile.bio}</ProfileBio>
        <NumberOfFriendsStyled># of Friends</NumberOfFriendsStyled>
        <>
          {isFriend ? (
            <Ioniconstyled
              name={"ios-person-remove"}
              size={15}
              color="red"
              onPress={handleRemoveFriend}
            />
          ) : isPending ? (
            <AntDesignstyled
              name={"clockcircle"}
              size={15}
              color="#2596be"
              onPress={handleAddFriend}
            />
          ) : (
            <Ioniconstyled
              name={"md-person-add"}
              size={15}
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
