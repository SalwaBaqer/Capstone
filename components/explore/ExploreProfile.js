//Libraries
import React, { useState, useEffect } from "react";
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
  EntypoIconStyled,
} from "../../styles";

const ExploreProfile = ({ navigation, route }) => {
  const [isPending, setIsPending] = useState(false);
  const [blockUser, setBlockUser] = useState(true);
  if (!authStore.user) return <Spinner />;

  const { user } = route.params; //from search bar
  const { userId } = route.params; //from explore itmes
  const itemUser = authStore.getUserbyId(userId);

  profileStore.getProfileById(userId ? userId : user.id);

  if (profileStore.loading) return <Spinner />;

  const id = userId ? userId : user.id;
  const userProfile = profileStore.profiles;

  if (friendStore.loading) return <Spinner />;

  const profileEvents = eventStore.events.filter((event) =>
    userId ? event.userId === userId : event.userId === user.id
  );

  //handle add and withdraw friendRequest
  const handleAddFriend = () => {
    friendStore.SendFriendReq(userId ? userId : user.id);
    setIsPending(true);
  };

  //handle withdraw
  const handleWithDrawFriend = () => {
    friendStore.WithdrawFriendReq(userId ? userId : user.id);
    setIsPending(false);
  };
  //isFriend ?
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

  //is request pending
  const checkPending = () => {
    const checkIsPending = friendStore.friends.find(
      (friend) =>
        friend.actionUser === authStore.user.id &&
        friend.user2Id === id &&
        friend.status === 0
    );
    let check = false;
    if (checkIsPending) check = true;

    return check;
  };
  //handle remove friend  (unfollow)
  const handleRemoveFriend = () => {
    friendStore.DeleteFriend(userId ? userId : user.id);
    authStore.updateUser;
  };

  const handleBlock = () => {
    if (blockUser) {
      friendStore.BlockUser(userId ? userId : user.id);
      setBlockUser(false);
    } else {
      setBlockUser(true);
    }
  };

  return (
    <>
      <ProfileWrapper style={{ marginBottom: 20 }}>
        <ProfileImage source={{ uri: userProfile.image }} />
        <ProfileUsernameStyled>
          @{userId ? itemUser.username : user.username}
        </ProfileUsernameStyled>
        {authStore.user.blockedBy.includes(user.id) ? (
          <Text>You've been blocked by the user. Click here to Learn more</Text>
        ) : (
          <>
            <ProfileBio>{userProfile.bio}</ProfileBio>
            <NumberOfFriendsStyled>
              {userId
                ? itemUser.friends.length < 2
                  ? `${itemUser.friends.length} Friend`
                  : `${itemUser.friends.length} Friends`
                : user.friends.length < 2
                ? `${user.friends.length} Friend`
                : `${user.friends.length} Friends`}
            </NumberOfFriendsStyled>
            <>
              {checkFriend() ? (
                <Ioniconstyled
                  name={"ios-person-remove"}
                  size={15}
                  color="red"
                  onPress={handleRemoveFriend}
                />
              ) : checkPending() ? (
                <AntDesignstyled
                  name={"clockcircle"}
                  size={15}
                  color="#2596be"
                  onPress={handleWithDrawFriend}
                />
              ) : (
                <Ioniconstyled
                  name={"md-person-add"}
                  size={15}
                  color="#2596be"
                  onPress={handleAddFriend}
                />
              )}
              {blockUser ? (
                <EntypoIconStyled
                  name={"block"}
                  size={20}
                  color="#2596be"
                  onPress={handleBlock}
                />
              ) : null}
            </>
          </>
        )}
      </ProfileWrapper>
      <Schedule navigation={navigation} exploreEvents={profileEvents} />
    </>
  );
};

export default observer(ExploreProfile);
