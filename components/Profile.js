//Libraries
import React from "react";
import { Text } from "react-native"; // unused import
import { observer } from "mobx-react";
import { Left, Right, Spinner, Item } from "native-base";

//Components
import MySchedule from "./MySchedule"; // unused import
import List from "./events/List";

//Buttons
import EditProfileButton from "./buttons/EditProfileButton";
import SignoutButton from "./buttons/SignoutButton";

//Stores
import authStore from "../stores/authStore";
import profileStore from "../stores/profileStore";

//Styles
import {
  ProfileWrapper,
  ProfileImage,
  ProfileUsernameStyled,
  ProfileBio,
  NumberOfFriendsStyled,
} from "../styles";

const Profile = ({ navigation }) => {
  if (!authStore.user) return <Spinner />;
  profileStore.getProfileById(authStore.user.id);

  if (profileStore.loading) return <Spinner />;

  const myProfile = profileStore.profiles;

  return (
    <>
      <ProfileWrapper style={{ marginBottom: 20 }}>
        <Item>
          <Left>
            <EditProfileButton oldProfile={myProfile} />
          </Left>
          <Right>
            <SignoutButton navigation={navigation} />
          </Right>
        </Item>
        <ProfileImage source={{ uri: myProfile.image }} />
        <ProfileUsernameStyled>{authStore.user.username}</ProfileUsernameStyled>
        <ProfileBio>{myProfile.bio}</ProfileBio>
        <NumberOfFriendsStyled># Friends</NumberOfFriendsStyled>
      </ProfileWrapper>
      {/* <MySchedule /> */}
      <List navigation={navigation} />
    </>
  );
};

export default observer(Profile);
