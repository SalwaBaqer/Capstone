import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import Profile from "../Profile";
import EditProfile from "../EditProfile";

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
          headerTitle: null,
          headerBackTitle: null,
          headerBackTitleVisible: null,
        }}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackScreen;