import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import Profile from "../profile/Profile";
import EditProfile from "../profile/EditProfile";
import EditEventScreen from "../events/EditEventScreen";
import EventDetailScreen from "../events/EventDetailScreen";
import HeaderLogo from "../HeaderLogo";
import SignoutButton from "../buttons/SignoutButton";
import EditProfileButton from "../buttons/EditProfileButton";

//Stores
import profileStore from "../../stores/profileStore";
import authStore from "../../stores/authStore";

const ProfileStack = createStackNavigator();

const ProfileStackScreen = ({ navigation }) => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="ProfileScreen"
        component={Profile}
        options={{
          headerRight: () => <SignoutButton navigation={navigation} />,
          headerTitle: <HeaderLogo />,
          headerLeft: () => (
            <EditProfileButton
              oldProfile={profileStore.getProfileById(authStore.user.profileId)}
            />
          ),
        }}
      />
      <ProfileStack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          headerTitle: null,
          headerBackTitle: null,
          headerBackTitleVisible: null,
          headerShown: false,
        }}
      />
      <ProfileStack.Screen
        name="EditEventScreen"
        component={EditEventScreen}
        options={{
          headerTitle: null,
          headerTitle: null,
          headerBackTitle: null,
          headerBackTitleVisible: null,
          headerShown: false,
        }}
      />
      <ProfileStack.Screen
        name="EventDetailScreen"
        component={EventDetailScreen}
        options={{
          headerTitle: null,
          headerTitle: null,
          headerBackTitle: null,
          headerBackTitleVisible: null,
          headerShown: false,
        }}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackScreen;
