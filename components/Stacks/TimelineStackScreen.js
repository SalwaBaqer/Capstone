//Libraries
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import Timeline from "../Timeline";

const TimelineStack = createStackNavigator();

const TimelineStackScreen = () => {
  return (
    <TimelineStack.Navigator>
      <TimelineStack.Screen
        name="TimelineScreen"
        component={Timeline}
        // options={{ headerShown: false }}
      />
    </TimelineStack.Navigator>
  );
};

export default TimelineStackScreen;
