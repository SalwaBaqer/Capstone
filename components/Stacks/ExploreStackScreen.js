//Libraries
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import SearchPage from "../explore/SearchPage";
import Explore from "../explore/Explore";
import ExploreProfile from "../explore/ExploreProfile";
import EventDetailScreen from "../events/EventDetailScreen";

const ExploreStack = createStackNavigator();

const ExploreStackScreen = () => {
  return (
    <ExploreStack.Navigator
      initialRouteName="ExploreScreen"
      header={SearchPage}
    >
      <ExploreStack.Screen
        name="ExploreScreen"
        component={Explore}
        options={{ headerShown: false }}
      />
      <ExploreStack.Screen
        name="ExploreProfileScreen"
        component={ExploreProfile}
        options={{ headerShown: false }}
      />

      <ExploreStack.Screen
        name="EventDetailScreen"
        component={EventDetailScreen}
        options={{
          headerTitle: null,
          headerBackTitle: null,
          headerBackTitleVisible: null,
          headerShown: false,
        }}
      />
    </ExploreStack.Navigator>
  );
};

export default ExploreStackScreen;
