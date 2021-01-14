//Libraries
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import Explore from "../Explore";
import SearchBar from "../SearchBar";
import EventDetailScreen from "../events/EventDetailScreen";
import ExploreProfile from "../ExploreProfile";

const ExploreStack = createStackNavigator();

const ExploreStackScreen = () => {
  return (
    <ExploreStack.Navigator initialRouteName="ExploreScreen" header={SearchBar}>
      <ExploreStack.Screen
        name="ExploreScreen"
        component={Explore}
        // options={{ headerShown: false }}
      />
      <ExploreStack.Screen
        name="ExploreProfileScreen"
        component={ExploreProfile}
        // options={{ headerShown: false }}
      />

      <ExploreStack.Screen
        name="EventDetailScreen"
        component={EventDetailScreen}
        options={{
          headerTitle: null,
          headerTitle: null,
          headerBackTitle: null,
          headerBackTitleVisible: null,
        }}
      />
    </ExploreStack.Navigator>
  );
};

export default ExploreStackScreen;
