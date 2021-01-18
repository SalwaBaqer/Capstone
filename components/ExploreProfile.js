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
import authStore from "../stores/authStore";

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
} from "../styles";

const ExploreProfile = ({ navigation, route }) => {
  const { user } = route.params; //from search bar
  const { userId } = route.params;
  const [addFriend, setAddFriend] = useState(true);
  const [blockUser, setBlockUser] = useState(true);

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
          {userId ? userId.username : user.id.username}
        </ProfileUsernameStyled>
        {authStore.user.blockedBy.includes(user.id) ? (
          <Text>You've been blocked by the user. Click here to Learn more</Text>
        ) : (
          <>
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
      <MySchedule navigation={navigation} exploreEvents={profileEvents} />
    </>
  );
};

export default observer(ExploreProfile);
