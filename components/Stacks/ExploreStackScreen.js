//Libraries
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import SearchPage from "../explore/SearchPage";
import Explore from "../explore/Explore";
import ExploreProfile from "../explore/ExploreProfile";
import EventDetailScreen from "../events/EventDetailScreen";
import HeaderLogo from "../HeaderLogo";

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
        options={{
          headerTitle: <HeaderLogo />,
        }}
      />
      <ExploreStack.Screen
        name="ExploreProfileScreen"
        component={ExploreProfile}
        options={{
          headerTitle: <HeaderLogo />,
          headerBackTitle: null,
          headerBackTitleVisible: null,
        }}
      />

      <ExploreStack.Screen
        name="EventDetailScreen"
        component={EventDetailScreen}
        options={{
          headerTitle: <HeaderLogo />,
          headerBackTitle: null,
          headerBackTitleVisible: null,
        }}
      />
    </ExploreStack.Navigator>
  );
};

export default ExploreStackScreen;
