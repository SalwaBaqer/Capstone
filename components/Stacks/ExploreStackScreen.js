//Libraries
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import Explore from "../Explore";
import EventDetailScreen from "../events/EventDetailScreen";

const ExploreStack = createStackNavigator();

const ExploreStackScreen = () => {
  return (
    <ExploreStack.Navigator>
      <ExploreStack.Screen
        name="ExploreScreen"
        component={Explore}
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
