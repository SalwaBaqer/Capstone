//Libraries
import React from "react";
import { Text } from "react-native";
import { observer } from "mobx-react";
import { Left, Right, Spinner, Item } from "native-base";

//Components
import MySchedule from "./MySchedule";
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

const Profile = ({ navigation, route }) => {
  if (!authStore.user) return <Spinner />;
  const userProfile = profileStore.getProfileById(
    route.params?.userId ? route.params.userId : authStore.user.id
  );
  console.log(userProfile);

  if (profileStore.loading) return <Spinner />;

  return (
    <>
      <ProfileWrapper style={{ marginBottom: 20 }}>
        <Item>
          <Left>
            <EditProfileButton oldProfile={userProfile} />
          </Left>
          <Right>
            <SignoutButton navigation={navigation} />
          </Right>
        </Item>
        <ProfileImage source={{ uri: userProfile.image }} />
        <ProfileUsernameStyled>{authStore.user.username}</ProfileUsernameStyled>
        <ProfileBio>{userProfile.bio}</ProfileBio>
        <NumberOfFriendsStyled># Friends</NumberOfFriendsStyled>
      </ProfileWrapper>
      <MySchedule navigation={navigation} />
      {/* <List navigation={navigation} /> */}
    </>
  );
};

export default observer(Profile);
