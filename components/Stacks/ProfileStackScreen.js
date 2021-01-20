import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import Profile from "../profile/Profile";
import EditProfile from "../profile/EditProfile";
import EditEventScreen from "../events/EditEventScreen";
import EventDetailScreen from "../events/EventDetailScreen";

const ProfileStack = createStackNavigator();

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="ProfileScreen"
        component={Profile}
        options={{ headerShown: false }}
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
