import React from "react";

//Libraries
import { observer } from "mobx-react";
import { Spinner, Text } from "native-base";

//Stores
import authStore from "../stores/authStore";
import profileStore from "../stores/profileStore";

//Styles
import {
  ProfileWrapper,
  ProfileImage,
  ProfileUsernameStyled,
  ProfileBio,
} from "../styles";

const Profile = () => {
  if (!authStore.user) return <Spinner />;
  profileStore.getProfileById(authStore.user.id);
  if (profileStore.loading) return <Spinner />;
  return (
    <ProfileWrapper>
      <ProfileImage source={{ uri: profileStore.profile.image }} />
      <ProfileUsernameStyled>
        {profileStore.profile.username}
      </ProfileUsernameStyled>
      <ProfileBio>{profileStore.profile.bio}</ProfileBio>
    </ProfileWrapper>
  );
};

export default observer(Profile);
