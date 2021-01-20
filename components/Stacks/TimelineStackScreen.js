//Libraries
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import Timeline from "../timeline/Timeline";
import TimelineProfile from "../timeline/TimelineProfile";
import EventDetailScreen from "../events/EventDetailScreen";

const TimelineStack = createStackNavigator();

const TimelineStackScreen = () => {
  return (
    <TimelineStack.Navigator>
      <TimelineStack.Screen name="TimelineScreen" component={Timeline} />
      <TimelineStack.Screen
        name="TimelineProfileScreen"
        component={TimelineProfile}
      />
      <TimelineStack.Screen
        name="EventDetailScreen"
        component={EventDetailScreen}
      />
    </TimelineStack.Navigator>
  );
};

export default TimelineStackScreen;
