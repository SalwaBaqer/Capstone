//Libraries
import React from "react";
import { observer } from "mobx-react";
import { Spinner } from "native-base";

//Components
import MySchedule from "./MySchedule";

//Stores
import authStore from "../stores/authStore";
import profileStore from "../stores/profileStore";
import eventStore from "../stores/eventStore";

//Styles
import {
  ProfileWrapper,
  ProfileImage,
  ProfileUsernameStyled,
  ProfileBio,
  NumberOfFriendsStyled,
} from "../styles";

const ExploreProfile = ({ navigation, route }) => {
  if (!authStore.user) return <Spinner />;
  const userProfile = profileStore.getProfileById(
    route.params?.userId ? route.params.userId : authStore.user.id
  );

  if (profileStore.loading) return <Spinner />;

  const profileEvents = eventStore.events.filter(
    (event) => event.userId === authStore.user.id
  );

  console.log(profileEvents);

  return (
    <>
      <ProfileWrapper style={{ marginBottom: 20 }}>
        <ProfileImage source={{ uri: userProfile.image }} />
        <ProfileUsernameStyled>{authStore.user.username}</ProfileUsernameStyled>
        <ProfileBio>{userProfile.bio}</ProfileBio>
        <NumberOfFriendsStyled># Friends</NumberOfFriendsStyled>
      </ProfileWrapper>
      <MySchedule navigation={navigation} exploreEvents={profileEvents} />
    </>
  );
};

export default observer(ExploreProfile);
