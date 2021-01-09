//Libraries
import React from "react";
import { observer } from "mobx-react";
import { Spinner } from "native-base";

//Components
import EditProfileButton from "./buttons/EditProfileButton";
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
  profileStore.getProfileById(authStore.user.id);

  if (profileStore.loading) return <Spinner />;

  const myProfile = profileStore.profiles;

  return (
    <ProfileWrapper>
      <EditProfileButton oldProfile={myProfile} />
      <ProfileImage source={{ uri: myProfile.image }} />
      <ProfileUsernameStyled>{myProfile.username}</ProfileUsernameStyled>
      <ProfileBio>{myProfile.bio}</ProfileBio>
    </ProfileWrapper>
  );
};

export default observer(Profile);
