//Libraries
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import Timeline from "../timeline/Timeline";
import TimelineProfile from "../timeline/TimelineProfile";

const TimelineStack = createStackNavigator();

const TimelineStackScreen = () => {
  return (
    <TimelineStack.Navigator>
      <TimelineStack.Screen name="TimelineScreen" component={Timeline} />
      <TimelineStack.Screen
        name="TimelineProfileScreen"
        component={TimelineProfile}
      />
    </TimelineStack.Navigator>
  );
};

export default TimelineStackScreen;
