//Libraries
import React, { useState } from "react";
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

const TimelineProfile = ({ navigation, route }) => {
  const [isPending, setIsPending] = useState(false);
  if (!authStore.user) return <Spinner />;

  const { userId } = route.params;

  const itemUser = authStore.getUserbyId(userId);

  profileStore.getProfileById(userId);

  if (profileStore.loading) return <Spinner />;

  const userProfile = profileStore.profiles;

  const profileEvents = eventStore.events.filter(
    (event) => event.userId === userId
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
            friend.user2Id === userId &&
            friend.status === 1) ||
          (friend.actionUser === userId &&
            friend.user2Id === authStore.user.id &&
            friend.status === 1)
      )
      .find(
        (friend) =>
          friend.actionUser === authStore.user.id || friend.user2Id === userId
      );

    return checkIsFriend;
  };
  //handle remove friend  (unfollow)
  const handleRemoveFriend = () => {
    friendStore.DeleteFriend(userId);
    authStore.updateUser;
  };

  return (
    <>
      <ProfileWrapper style={{ marginBottom: 20 }}>
        <ProfileImage source={{ uri: userProfile.image }} />
        <ProfileUsernameStyled>@{itemUser.username}</ProfileUsernameStyled>
        <ProfileBio>{userProfile.bio}</ProfileBio>
        <NumberOfFriendsStyled>
          {itemUser.friends.length}
          {itemUser.friends.length < 2 ? " Friend" : " Friends"}
        </NumberOfFriendsStyled>
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

export default observer(TimelineProfile);
