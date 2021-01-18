//Libraries
import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";
import { Spinner } from "native-base";

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

const ExploreProfile = ({ navigation, route }) => {
  const { user } = route.params; //from search bar
  const { userId } = route.params; //from explore items
  const [isPending, setIsPending] = useState(false);
  const itemUser = authStore.getUserbyId(userId);
  profileStore.getProfileById(userId ? userId : user.id);
  const [isFriend, setIsFriend] = useState(false);

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
  const checkFriend = () => {
    const checkIsFriend = friendStore.friends
      .filter(
        (friend) =>
          (friend.actionUser === authStore.user.id &&
            friend.user2Id === id &&
            friend.status === 1) ||
          (friend.actionUser === id &&
            friend.user2Id === authStore.user.id &&
            friend.status === 1)
      )
      .find(
        (friend) =>
          friend.actionUser === authStore.user.id || friend.user2Id === id
      );

    return checkIsFriend;
  };

  //handle remove friend  (unfollow)
  const handleRemoveFriend = () => {
    friendStore.DeleteFriend(userId ? userId : user.id);
    authStore.updateUser;
  };

  return (
    <>
      <ProfileWrapper style={{ marginBottom: 20 }}>
        <ProfileImage source={{ uri: userProfile.image }} />
        <ProfileUsernameStyled>
          @{userId ? itemUser.username : user.username}
        </ProfileUsernameStyled>
        <ProfileBio>{userProfile.bio}</ProfileBio>
        <NumberOfFriendsStyled># of Friends</NumberOfFriendsStyled>
        <>
          {checkFriend() ? (
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
      <Schedule navigation={navigation} exploreEvents={profileEvents} />
    </>
  );
};

export default observer(ExploreProfile);