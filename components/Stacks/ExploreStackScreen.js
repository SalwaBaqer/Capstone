//Libraries
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import Explore from "../Explore";
import SearchBar from "../SearchBar";

const ExploreStack = createStackNavigator();

const ExploreStackScreen = () => {
  return (
    <ExploreStack.Navigator initialRouteName="ExploreScreen" header={SearchBar}>
      <ExploreStack.Screen
        name="ExploreScreen"
        component={Explore}
        // options={{ headerShown: false }}
      />
    </ExploreStack.Navigator>
  );
};

export default ExploreStackScreen;
