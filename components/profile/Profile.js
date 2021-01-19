//Libraries
import React from "react";
import { observer } from "mobx-react";
import { Left, Right, Spinner, Item } from "native-base";

//Components
import Schedule from "../Schedule";

//Buttons
import EditProfileButton from "../buttons/EditProfileButton";
import SignoutButton from "../buttons/SignoutButton";

//Stores
import authStore from "../../stores/authStore";
import profileStore from "../../stores/profileStore";
import eventStore from "../../stores/eventStore";

//Styles
import {
  ProfileWrapper,
  ProfileImage,
  ProfileUsernameStyled,
  ProfileBio,
  NumberOfFriendsStyled,
} from "../../styles";
import { TouchableOpacity } from "react-native-gesture-handler";

const Profile = ({ navigation }) => {
  if (!authStore.user) return <Spinner />;

  const myProfile = profileStore.getProfileById(authStore.user.profileId);

  if (profileStore.loading) return <Spinner />;

  const profileEvents = eventStore.events.filter(
    (event) => event.userId === authStore.user.id
  );

  if (eventStore.loading) return <Spinner />;

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
        <ProfileImage source={{ uri: authStore.user.image }} />
        <ProfileUsernameStyled>
          @{authStore.user.username}
        </ProfileUsernameStyled>
        <ProfileBio>{authStore.user.bio}</ProfileBio>
        <TouchableOpacity>
          <NumberOfFriendsStyled>
            {authStore.user.friends.length}
            {authStore.user.friends.length < 2 ? " Friend" : " Friends"}
            {authStore.user.friends.length < 1 ?? "Friends"}
          </NumberOfFriendsStyled>
        </TouchableOpacity>
      </ProfileWrapper>
      <Schedule navigation={navigation} exploreEvents={profileEvents} />
    </>
  );
};

export default observer(Profile);
