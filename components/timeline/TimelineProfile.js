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
  theme,
  Dotsiconstyled,
  EntypoIconStyled,
} from "../../styles";

const TimelineProfile = ({ navigation, route }) => {
  const [menu, setMenu] = useState(true);
  const [isPending, setIsPending] = useState(false);
  const [blockUser, setBlockUser] = useState(true);
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
  //is Friend?
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

  //block user
  const handleBlock = () => {
    if (blockUser) {
      friendStore.BlockUser(userId);
      setBlockUser(false);
    } else {
      setBlockUser(true);
    }
    setMenu(true);
  };

  return (
    <>
      <ProfileWrapper>
        {menu ? (
          <Dotsiconstyled
            name="dots-horizontal"
            size={24}
            color="gray"
            onPress={() => setMenu(false)}
            style={{ marginLeft: 389 }}
          />
        ) : blockUser ? (
          <>
            <EntypoIconStyled
              name={"block"}
              size={20}
              color={theme.redish}
              onPress={handleBlock}
            />
            <Text
              onPress={() => setMenu(true)}
              style={{ marginLeft: 370, marginTop: 10 }}
            >
              Cancel
            </Text>
          </>
        ) : null}
        <ProfileImage source={{ uri: userProfile.image }} />
        <ProfileUsernameStyled>@{itemUser.username}</ProfileUsernameStyled>
        <ProfileBio>{userProfile.bio}</ProfileBio>
        <NumberOfFriendsStyled>
          {itemUser.friends.length < 2
            ? `${itemUser.friends.length} Friend`
            : `${itemUser.friends.length} Friends`}
        </NumberOfFriendsStyled>
        <>
          {checkFriend() ? (
            <Ioniconstyled
              name={"ios-person-remove"}
              size={15}
              color={theme.redish}
              onPress={handleRemoveFriend}
            />
          ) : isPending ? (
            <AntDesignstyled
              name={"clockcircle"}
              size={15}
              color={theme.blueish}
              onPress={handleAddFriend}
            />
          ) : (
            <Ioniconstyled
              name={"md-person-add"}
              size={15}
              color={theme.blueish}
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
